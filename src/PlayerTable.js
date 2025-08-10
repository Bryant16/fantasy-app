import React, { useState, useEffect, useCallback } from 'react';
import playersData from './constants.js';
import './PlayerTable.css';

// Storage utility functions
const STORAGE_KEYS = {
  DRAFTED_PLAYERS: 'fantasy-draft-drafted-players',
  MY_TEAM: 'fantasy-draft-my-team',
  SEARCH_TERM: 'fantasy-draft-search-term',
  POSITION_FILTER: 'fantasy-draft-position-filter',
  SORT_CONFIG: 'fantasy-draft-sort-config',
  TEAM_SORT_CONFIG: 'fantasy-draft-team-sort-config',
  PLAYER_VIEW_FILTER: 'fantasy-draft-player-view-filter'
};

const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
    return defaultValue;
  }
};

const clearStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
};

const PlayerTable = () => {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(() => loadFromStorage(STORAGE_KEYS.SEARCH_TERM, ''));
  const [myTeam, setMyTeam] = useState(() => loadFromStorage(STORAGE_KEYS.MY_TEAM, []));
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [sortConfig, setSortConfig] = useState(() => loadFromStorage(STORAGE_KEYS.SORT_CONFIG, { key: null, direction: 'asc' }));
  const [selectedPosition, setSelectedPosition] = useState(() => loadFromStorage(STORAGE_KEYS.POSITION_FILTER, 'ALL'));
  const [playerViewFilter, setPlayerViewFilter] = useState(() => loadFromStorage(STORAGE_KEYS.PLAYER_VIEW_FILTER, 'available'));

  // Helper function to get position-specific CSS class
  const getPositionClass = (position) => {
    return `position-tag ${position.toLowerCase()}`;
  };

  useEffect(() => {
    // Load drafted players from storage
    const draftedPlayerIds = loadFromStorage(STORAGE_KEYS.DRAFTED_PLAYERS, []);
    
    const playersWithStatus = playersData.map((player) => {
      // Create consistent ID based on player data
      const playerId = `${player.overallRank}-${player.playerName.replace(/\s+/g, '-')}`;
      
      return {
        ...player,
        drafted: draftedPlayerIds.includes(playerId),
        id: playerId
      };
    });
    console.log(playersWithStatus, 'playersWithStatus');
    setPlayers(playersWithStatus);
    setFilteredPlayers(playersWithStatus);
  }, []);

  useEffect(() => {
    let filtered = players.filter(player => {
      // Search filter
      const matchesSearch = player.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.team.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Position filter
      const matchesPosition = selectedPosition === 'ALL' || player.position === selectedPosition;
      
      // Player view filter (available vs drafted)
      const isDrafted = isPlayerDrafted(player);
      const matchesViewFilter = playerViewFilter === 'available' ? !isDrafted : isDrafted;
      
      return matchesSearch && matchesPosition && matchesViewFilter;
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        
        if (sortConfig.key === 'overallRank' || sortConfig.key === 'byeWeek' || sortConfig.key === 'fantasyPoints' || sortConfig.key === 'positionRank') {
          aValue = Number(aValue);
          bValue = Number(bValue);
        } else {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredPlayers(filtered);
  }, [searchTerm, players, sortConfig, selectedPosition, playerViewFilter, myTeam]);

  // Persist search term changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.SEARCH_TERM, searchTerm);
  }, [searchTerm]);

  // Persist position filter changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.POSITION_FILTER, selectedPosition);
  }, [selectedPosition]);

  // Persist player view filter changes
  useEffect(() => {
    saveToStorage(STORAGE_KEYS.PLAYER_VIEW_FILTER, playerViewFilter);
  }, [playerViewFilter]);

  // Helper function to determine if a player is drafted
  const isPlayerDrafted = useCallback((player) => {
    return player.drafted || myTeam.some(teamPlayer => teamPlayer.id === player.id);
  }, [myTeam]);

  const handleDraftedChange = (playerId) => {
    const updatedPlayers = players.map(player =>
      player.id === playerId ? { ...player, drafted: !player.drafted } : player
    );
    
    // Save drafted player IDs to storage
    const draftedPlayerIds = updatedPlayers
      .filter(player => player.drafted)
      .map(player => player.id);
    saveToStorage(STORAGE_KEYS.DRAFTED_PLAYERS, draftedPlayerIds);
    
    setPlayers(updatedPlayers);
  };

  const addToTeam = (player) => {
    if (!myTeam.find(p => p.id === player.id)) {
      const updatedTeam = [...myTeam, player];
      setMyTeam(updatedTeam);
      saveToStorage(STORAGE_KEYS.MY_TEAM, updatedTeam);
    }
  };

  const removeFromTeam = (playerId) => {
    const updatedTeam = myTeam.filter(p => p.id !== playerId);
    setMyTeam(updatedTeam);
    saveToStorage(STORAGE_KEYS.MY_TEAM, updatedTeam);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    const newSortConfig = { key, direction };
    setSortConfig(newSortConfig);
    saveToStorage(STORAGE_KEYS.SORT_CONFIG, newSortConfig);
  };


  const getSortIcon = (columnKey, currentSortConfig) => {
    if (currentSortConfig.key !== columnKey) {
      return ' ⇅';
    }
    return currentSortConfig.direction === 'asc' ? ' ⇧' : ' ⇩';
  };

  // Reset all data - clear localStorage and reset state
  const resetAllData = () => {
    if (window.confirm('Are you sure you want to reset all draft data? This cannot be undone.')) {
      // Clear all storage
      Object.values(STORAGE_KEYS).forEach(key => clearStorage(key));
      
      // Reset all state
      setSearchTerm('');
      setSelectedPosition('ALL');
      setPlayerViewFilter('available');
      setSortConfig({ key: null, direction: 'asc' });
      setMyTeam([]);
      
      // Reset players drafted status
      const resetPlayers = players.map(player => ({
        ...player,
        drafted: false
      }));
      setPlayers(resetPlayers);
    }
  };

  const getUniquePositions = () => {
    const positions = [...new Set(players.map(player => player.position))];
    return positions.sort();
  };

  // Roster structure constants
  const ROSTER_REQUIREMENTS = {
    QB: 1,
    RB: 2,
    WR: 3,
    TE: 1,
    FLEX: 1, // WR/RB/TE eligible
    K: 1,
    DST: 1
  };

  const FLEX_ELIGIBLE = ['WR', 'RB', 'TE'];

  // Smart roster assignment logic
  const getOptimalLineup = () => {
    const sorted = [...myTeam].sort((a, b) => {
      // Sort by overall rank (better rank = lower number)
      return a.overallRank - b.overallRank;
    });

    const lineup = {
      starters: {
        QB: [],
        RB: [],
        WR: [],
        TE: [],
        FLEX: [],
        K: [],
        DST: []
      },
      bench: []
    };

    // Fill required positions first
    sorted.forEach(player => {
      const pos = player.position;
      
      // Fill required starter slots
      if (lineup.starters[pos] && lineup.starters[pos].length < ROSTER_REQUIREMENTS[pos]) {
        lineup.starters[pos].push(player);
      }
      // Check for flex eligibility if flex slot is open
      else if (FLEX_ELIGIBLE.includes(pos) && lineup.starters.FLEX.length < ROSTER_REQUIREMENTS.FLEX) {
        lineup.starters.FLEX.push(player);
      }
      // Otherwise goes to bench
      else {
        lineup.bench.push(player);
      }
    });

    return lineup;
  };

  // Get roster completion status
  const getRosterStatus = () => {
    const lineup = getOptimalLineup();
    const totalStarters = Object.values(ROSTER_REQUIREMENTS).reduce((sum, req) => sum + req, 0);
    
    let filledStarters = 0;
    Object.entries(ROSTER_REQUIREMENTS).forEach(([pos, required]) => {
      filledStarters += Math.min(lineup.starters[pos].length, required);
    });

    const missingPositions = Object.entries(ROSTER_REQUIREMENTS)
      .filter(([pos, required]) => lineup.starters[pos].length < required)
      .map(([pos, required]) => ({ 
        position: pos, 
        needed: required - lineup.starters[pos].length 
      }));

    return {
      filledStarters,
      totalStarters,
      missingPositions,
      isComplete: filledStarters === totalStarters
    };
  };

  return (
    <div className="player-table-container">
      <div className="controls-container">
        <div className="view-toggle">
          <button 
            onClick={() => setPlayerViewFilter('available')}
            className={`toggle-button ${playerViewFilter === 'available' ? 'active' : ''}`}
          >
            Available ({players.filter(p => !isPlayerDrafted(p)).length})
          </button>
          <button 
            onClick={() => setPlayerViewFilter('drafted')}
            className={`toggle-button ${playerViewFilter === 'drafted' ? 'active' : ''}`}
          >
            Drafted ({players.filter(p => isPlayerDrafted(p)).length})
          </button>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search players, positions, or teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="position-filter">
            <label htmlFor="position-select">Filter by Position:</label>
            <select
              id="position-select"
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="position-select"
            >
              <option value="ALL">All Positions</option>
              {getUniquePositions().map(position => (
                <option key={position} value={position}>
                  {position}
                </option>
              ))}
            </select>
          </div>
          <button onClick={resetAllData} className="reset-button">
            Reset Draft
          </button>
        </div>
      </div>

      <div className="main-content">
        <div className="players-section">
          {/* <h2>
            {playerViewFilter === 'available' 
              ? `Available Players (${filteredPlayers.length})`
              : `Drafted Players (${filteredPlayers.length})`
            }
          </h2> */}
          
          <table className="player-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('overallRank')} className="sortable">
                  Rank{getSortIcon('overallRank', sortConfig)}
                </th>
                <th onClick={() => handleSort('playerName')} className="sortable">
                  Name{getSortIcon('playerName', sortConfig)}
                </th>
                <th onClick={() => handleSort('team')} className="sortable">
                  Team{getSortIcon('team', sortConfig)}
                </th>
                <th onClick={() => handleSort('position')} className="sortable">
                  Position{getSortIcon('position', sortConfig)}
                </th>
                <th onClick={() => handleSort('positionRank')} className="sortable">
                  Pos Rank{getSortIcon('positionRank', sortConfig)}
                </th>
                <th onClick={() => handleSort('byeWeek')} className="sortable">
                  Bye Week{getSortIcon('byeWeek', sortConfig)}
                </th>
                <th onClick={() => handleSort('fantasyPoints')} className="sortable">
                  2024 Total/AVG{getSortIcon('fantasyPoints', sortConfig)}
                </th>
                <th>Draft</th>
                <th>Team</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map(player => {
                const isOnMyTeam = myTeam.some(teamPlayer => teamPlayer.id === player.id);
                const isDrafted = isPlayerDrafted(player);
                
                return (
                  <tr key={player.id} className={isDrafted ? 'drafted' : ''}>
                    <td>{player.overallRank}</td>
                    <td>{player.playerName}</td>
                    <td>{player.team}</td>
                    <td>{player.position}</td>
                    <td>{player.positionRank}</td>
                    <td>{player.byeWeek}</td>
                    <td>{player.fantasyPoints || 'N/A'} / {((player.fantasyPoints || 0) /17).toFixed(0,2)}</td>
                    <td>
                      {playerViewFilter === 'available' ? (
                        <button
                          onClick={() => handleDraftedChange(player.id)}
                          className={`draft-button ${player.drafted ? 'drafted' : 'available'}`}
                        >
                          {player.drafted ? 'Drafted' : 'Draft'}
                        </button>
                      ) : (
                        <span className="status-badge">
                          {isOnMyTeam ? 'My Team' : 'Other'}
                        </span>
                      )}
                    </td>
                    <td>
                      {playerViewFilter === 'available' ? (
                        <button
                          onClick={() => addToTeam(player)}
                          disabled={isOnMyTeam}
                          className="add-button"
                        >
                          {isOnMyTeam ? '✓ Added' : 'Add'}
                        </button>
                      ) : (
                        isOnMyTeam ? (
                          <button
                            onClick={() => removeFromTeam(player.id)}
                            className="remove-button"
                          >
                            Remove
                          </button>
                        ) : (
                          <span className="no-action">-</span>
                        )
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="my-team-sidebar">
          <h3>My Team ({myTeam.length})</h3>
          
          {myTeam.length === 0 ? (
            <p>No players selected</p>
          ) : (
            <>

              {/* Starting Lineup */}
              <div className="lineup-section">
                <h4>Starting Lineup</h4>
                {Object.entries(ROSTER_REQUIREMENTS).map(([position, required]) => (
                  <div key={position} className="position-group">
                    <div className="position-header">
                      {position} ({getOptimalLineup().starters[position].length}/{required})
                    </div>
                    
                    {Array.from({ length: required }).map((_, index) => {
                      const player = getOptimalLineup().starters[position][index];
                      return (
                        <div key={index} className={`roster-slot ${player ? 'filled' : 'empty'}`}>
                          {player ? (
                            <>
                              <span className={getPositionClass(player.position)}>{player.position}</span>
                              <span className="player-name">{player.playerName}</span>
                              <span className="player-rank">#{player.overallRank}</span>
                            </>
                          ) : (
                            <span className="empty-slot">Empty {position} slot</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Bench */}
              {getOptimalLineup().bench.length > 0 && (
                <div className="bench-section">
                  <h4>Bench ({getOptimalLineup().bench.length})</h4>
                  <ul className="bench-list">
                    {getOptimalLineup().bench.map(player => (
                      <li key={player.id} className="bench-player">
                        <span className={getPositionClass(player.position)}>{player.position}</span>
                        <span className="player-name">{player.playerName}</span>
                        <span className="player-rank">#{player.overallRank}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerTable;