# Fantasy Football Draft Tracker

A React-based fantasy football in-person draft tracking application featuring ESPN's PPR top 300 players with 2024 fantasy football statistics.

## Overview

This application helps you track and manage your fantasy football draft in real-time. It includes comprehensive player data, team building tools, and an intuitive interface for managing your draft picks.

## Features

- **Player Database**: Complete list of ESPN's PPR top 300 players for 2024
- **2024 Fantasy Stats**: Historical fantasy points and averages for informed decision-making
- **Draft Tracking**: Mark players as drafted to track availability
- **Team Builder**: Add players to your team with optimal lineup suggestions
- **Smart Filtering**: Filter by position, search players, and toggle between available/drafted views
- **Roster Management**: Visual roster with color-coded positions and automatic lineup optimization
- **Persistent Storage**: Your draft progress is saved locally and persists between sessions

## Position Color Coding

- **QB**: Teal
- **WR**: Blue  
- **RB**: Red
- **TE**: Orange
- **K**: Purple
- **DST**: Dark Gray

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd fantasy-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Usage

1. **Search & Filter**: Use the search bar to find specific players or filter by position
2. **Draft Players**: Click "Draft" to mark players as unavailable
3. **Build Your Team**: Click "Add" to add players to your personal roster
4. **View Progress**: Toggle between "Available" and "Drafted" views
5. **Reset Draft**: Use "Reset Draft" button to clear all data and start over

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Removes the single build dependency and copies all configuration files for full customization control.

## Data Source

Player data is sourced from ESPN's 2024 PPR rankings and includes:
- Overall rank and position rank
- Player names and team affiliations
- 2024 fantasy points totals and per-game averages
- Bye week information
- Projected values

## Technology Stack

- **Frontend**: React.js
- **Styling**: CSS3 with responsive design
- **Data Storage**: Local Storage for persistence
- **Build Tool**: Create React App

## Contributing

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

For more information about React development, check out the [React documentation](https://reactjs.org/).