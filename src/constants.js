const data = `
81. (RB28)	Isiah Pacheco, KC	$4	10
82. (RB29)	Tyrone Tracy Jr., NYG	$4	14
83. (TE6)	Travis Kelce, KC	$4	10
84. (TE7)	David Njoku, CLE	$4	9
85. (TE8)	Mark Andrews, BAL	$4	7
86. (TE9)	Evan Engram, DEN	$4	12
87. (QB8)	Bo Nix, DEN	$3	12
88. (QB9)	Kyler Murray, ARI	$3	8
89. (QB10)	Brock Purdy, SF	$3	14
90. (RB30)	Jaylen Warren, PIT	$3	5
91. (RB31)	Brian Robinson Jr., WAS	$3	12
92. (RB32)	Javonte Williams, DAL	$3	10
93. (RB33)	Rhamondre Stevenson, NE	$3	14
94. (RB34)	Cam Skattebo, NYG	$3	14
95. (RB35)	J.K. Dobbins, DEN	$3	12
96. (WR42)	Khalil Shakir, BUF	$2	7
97. (WR43)	Jauan Jennings, SF	$2	14
98. (WR44)	Deebo Samuel Sr., WAS	$2	12
99. (WR45)	Ricky Pearsall, SF	$2	14
100. (WR46)	Keon Coleman, BUF	$2	7
101. (WR47)	Michael Pittman Jr., IND	$2	11
102. (WR48)	Jayden Reed, GB	$2	5
103. (QB11)	Justin Herbert, LAC	$2	12
104. (QB12)	Caleb Williams, CHI	$2	5
105. (QB13)	Dak Prescott, DAL	$2	10
106. (QB14)	Justin Fields, NYJ	$2	9
107. (WR49)	Keenan Allen, LAC	$2	12
108. (WR50)	Darnell Mooney, ATL	$2	5
109. (WR51)	Josh Downs, IND	$2	11
110. (WR52)	Rashid Shaheed, NO	$2	11
111. (WR53)	Jayden Higgins, HOU	$2	6
112. (WR54)	Emeka Egbuka, TB	$2	9
113. (TE10)	Tucker Kraft, GB	$2	5
114. (RB36)	Austin Ekeler, WAS	$2	12
115. (RB37)	Travis Etienne Jr., JAC	$2	8
116. (RB38)	Tyjae Spears, TEN	$2	10
117. (RB39)	Tank Bigsby, JAC	$2	8
118. (RB40)	Jerome Ford, CLE	$2	9
119. (RB41)	Rachaad White, TB	$2	9
120. (RB42)	Jordan Mason, MIN	$2	6
121. (QB15)	Drake Maye, NE	$1	14
122. (QB16)	Jordan Love, GB	$1	5
123. (QB17)	Jared Goff, DET	$1	8
124. (QB18)	J.J. McCarthy, MIN	$1	6
125. (TE11)	Colston Loveland, CHI	$1	5
126. (TE12)	Dallas Goedert, PHI	$1	9
127. (TE13)	Jake Ferguson, DAL	$1	10
128. (TE14)	Dalton Kincaid, BUF	$1	7
129. (TE15)	Tyler Warren, IND	$1	11
130. (RB43)	Trey Benson, ARI	$1	8
131. (RB44)	Quinshon Judkins, CLE	$1	9
132. (RB45)	Dylan Sampson, CLE	$1	9
133. (RB46)	Zach Charbonnet, SEA	$1	8
134. (RB47)	Tyler Allgeier, ATL	$1	5
135. (RB48)	Najee Harris, LAC	$1	12
136. (WR55)	Adam Thielen, CAR	$1	14
137. (WR56)	Xavier Legette, CAR	$1	14
138. (WR57)	Cedric Tillman, CLE	$1	9
139. (WR58)	Hollywood Brown, KC	$1	10
140. (WR59)	Brandon Aiyuk, SF	$1	14
141. (TE16)	Hunter Henry, NE	$1	14
142. (TE17)	Kyle Pitts, ATL	$1	5
143. (QB19)	Tua Tagovailoa, MIA	$1	12
144. (QB20)	Matthew Stafford, LAR	$1	8
145. (QB21)	C.J. Stroud, HOU	$1	6
146. (RB49)	Jaylen Wright, MIA	$1	12
147. (RB50)	Bhayshul Tuten, JAC	$1	8
148. (RB51)	Braelon Allen, NYJ	$1	9
149. (RB52)	Isaac Guerendo, SF	$1	14
150. (RB53)	MarShawn Lloyd, GB	$1	5
151. (RB54)	Ray Davis, BUF	$1	7
152. (WR60)	Jack Bech, LV	$1	8
153. (WR61)	Wan'Dale Robinson, NYG	$1	14
154. (WR62)	Marvin Mims Jr., DEN	$1	12
155. (WR63)	Kyle Williams, NE	$1	14
156. (WR64)	Rashod Bateman, BAL	$1	7
157. (WR65)	Luther Burden III, CHI	$1	5
158. (WR66)	Jalen McMillan, TB	$1	9
159. (WR67)	Tre Harris, LAC	$1	12
160. (RB55)	Roschon Johnson, CHI	$1	5
1. (WR1)	Ja'Marr Chase, CIN	$57	10
2. (RB1)	Bijan Robinson, ATL	$56	5
3. (WR2)	Justin Jefferson, MIN	$55	6
4. (RB2)	Saquon Barkley, PHI	$55	9
5. (RB3)	Jahmyr Gibbs, DET	$54	8
6. (WR3)	CeeDee Lamb, DAL	$53	10
7. (RB4)	Christian McCaffrey, SF	$53	14
8. (WR4)	Puka Nacua, LAR	$52	8
9. (WR5)	Malik Nabers, NYG	$51	14
10. (WR6)	Amon-Ra St. Brown, DET	$50	8
11. (RB5)	Ashton Jeanty, LV	$48	8
12. (RB6)	De'Von Achane, MIA	$46	12
13. (WR7)	Nico Collins, HOU	$45	6
14. (WR8)	Brian Thomas Jr., JAC	$43	8
15. (WR9)	A.J. Brown, PHI	$42	9
16. (WR10)	Drake London, ATL	$40	5
17. (RB7)	Jonathan Taylor, IND	$38	11
18. (RB8)	Josh Jacobs, GB	$37	5
19. (RB9)	Derrick Henry, BAL	$36	7
20. (TE1)	Brock Bowers, LV	$35	8
21. (TE2)	Trey McBride, ARI	$34	8
22. (RB10)	Bucky Irving, TB	$33	9
23. (RB11)	Kyren Williams, LAR	$32	8
24. (WR11)	Tee Higgins, CIN	$32	10
25. (WR12)	Tyreek Hill, MIA	$31	12
26. (WR13)	Ladd McConkey, LAC	$30	12
27. (WR14)	Davante Adams, LAR	$30	8
28. (QB1)	Josh Allen, BUF	$29	7
29. (QB2)	Lamar Jackson, BAL	$28	7
30. (QB3)	Jayden Daniels, WAS	$27	12
31. (QB4)	Jalen Hurts, PHI	$26	9
32. (RB12)	Chase Brown, CIN	$25	10
33. (RB13)	James Cook, BUF	$24	7
34. (WR15)	Jaxon Smith-Njigba, SEA	$23	8
35. (WR16)	Terry McLaurin, WAS	$22	12
36. (WR17)	Garrett Wilson, NYJ	$22	9
37. (RB14)	Kenneth Walker III, SEA	$22	8
38. (RB15)	Omarion Hampton, LAC	$21	12
39. (QB5)	Joe Burrow, CIN	$21	10
40. (TE3)	George Kittle, SF	$20	14
41. (RB16)	Alvin Kamara, NO	$19	11
42. (RB17)	Chuba Hubbard, CAR	$19	14
43. (RB18)	James Conner, ARI	$18	8
44. (RB19)	Breece Hall, NYJ	$17	9
45. (WR18)	Mike Evans, TB	$17	9
46. (WR19)	Marvin Harrison Jr., ARI	$15	8
47. (WR20)	DK Metcalf, PIT	$15	5
48. (WR21)	DJ Moore, CHI	$14	5
49. (WR22)	Rashee Rice, KC	$13	10
50. (WR23)	Xavier Worthy, KC	$13	10
51. (RB20)	Joe Mixon, HOU	$12	6
52. (RB21)	D'Andre Swift, CHI	$11	5
53. (WR24)	Zay Flowers, BAL	$11	7
54. (WR25)	Courtland Sutton, DEN	$10	12
55. (WR26)	Calvin Ridley, TEN	$10	10
56. (WR27)	DeVonta Smith, PHI	$10	9
57. (WR28)	Jaylen Waddle, MIA	$10	12
58. (WR29)	Jerry Jeudy, CLE	$9	9
59. (WR30)	Jameson Williams, DET	$9	8
60. (WR31)	George Pickens, DAL	$9	10
61. (TE4)	Sam LaPorta, DET	$8	8
62. (QB6)	Patrick Mahomes, KC	$8	10
63. (QB7)	Baker Mayfield, TB	$8	9
64. (WR32)	Rome Odunze, CHI	$7	5
65. (WR33)	Tetairoa McMillan, CAR	$7	14
66. (WR34)	Travis Hunter, JAC	$7	8
67. (RB22)	TreVeyon Henderson, NE	$7	14
68. (RB23)	Aaron Jones, MIN	$6	6
69. (TE5)	T.J. Hockenson, MIN	$6	6
70. (RB24)	David Montgomery, DET	$6	8
71. (RB25)	Kaleb Johnson, PIT	$6	5
72. (RB26)	RJ Harvey, DEN	$6	12
73. (WR35)	Chris Godwin, TB	$6	9
74. (WR36)	Jakobi Meyers, LV	$5	8
75. (WR37)	Chris Olave, NO	$5	11
76. (WR38)	Cooper Kupp, SEA	$5	8
77. (WR39)	Stefon Diggs, NE	$5	14
78. (WR40)	Matthew Golden, GB	$4	5
79. (WR41)	Jordan Addison, MIN	$4	6
80. (RB27)	Tony Pollard, TEN	$4	10
161. (RB56)	Jaydon Blue, DAL	$0	10
162. (RB57)	Will Shipley, PHI	$0	9
163. (WR68)	Michael Wilson, ARI	$0	8
164. (WR69)	Pat Bryant, DEN	$0	12
165. (TE18)	Chigoziem Okonkwo, TEN	$0	10
166. (TE19)	Darren Waller, MIA	$0	12
167. (TE20)	Zach Ertz, WAS	$0	12
168. (TE21)	Jonnu Smith, PIT	$0	5
169. (DST1)	Texans D/ST, HOU	$0	6
170. (DST2)	Steelers D/ST, PIT	$0	5
171. (DST3)	Broncos D/ST, DEN	$0	12
172. (DST4)	Vikings D/ST, MIN	$0	6
173. (DST5)	Seahawks D/ST, SEA	$0	8
174. (DST6)	Ravens D/ST, BAL	$0	7
175. (DST7)	Patriots D/ST, NE	$0	14
176. (DST8)	Lions D/ST, DET	$0	8
177. (DST9)	Eagles D/ST, PHI	$0	9
178. (DST10)	Bills D/ST, BUF	$0	7
179. (DST11)	Colts D/ST, IND	$0	11
180. (DST12)	Jets D/ST, NYJ	$0	9
181. (K1)	Jake Bates, DET	$0	8
182. (K2)	Chase McLaughlin, TB	$0	9
183. (K3)	Cameron Dicker, LAC	$0	12
184. (K4)	Brandon Aubrey, DAL	$0	10
185. (K5)	Jason Sanders, MIA	$0	12
186. (K6)	Tyler Bass, BUF	$0	7
187. (K7)	Jake Elliott, PHI	$0	9
188. (K8)	Chris Boswell, PIT	$0	5
189. (K9)	Harrison Butker, KC	$0	10
190. (K10)	Cairo Santos, CHI	$0	5
191. (K11)	Tyler Loop, BAL	$0	7
192. (K12)	Matt Gay, WAS	$0	12
193. (WR70)	Christian Kirk, HOU	$0	6
194. (WR71)	Romeo Doubs, GB	$0	5
195. (RB58)	Justice Hill, BAL	$0	7
196. (RB59)	Kareem Hunt, KC	$0	10
197. (WR72)	Tyler Lockett, TEN	$0	10
198. (QB22)	Trevor Lawrence, JAC	$0	8
199. (QB23)	Cameron Ward, TEN	$0	10
200. (QB24)	Michael Penix Jr., ATL	$0	5
201. (WR73)	DeMario Douglas, NE	$0	14
202. (WR74)	Nick Westbrook-Ikhine, MIA	$0	12
203. (WR75)	Joshua Palmer, BUF	$0	7
204. (WR76)	Diontae Johnson, CLE	$0	9
205. (WR77)	Brandin Cooks, NO	$0	11
206. (TE22)	Brenton Strange, JAC	$0	8
207. (TE23)	Mike Gesicki, CIN	$0	10
208. (WR78)	Darius Slayton, NYG	$0	14
209. (WR79)	DeAndre Hopkins, BAL	$0	7
210. (WR80)	Quentin Johnston, LAC	$0	12
211. (WR81)	Dont'e Thornton Jr., LV	$0	8
212. (RB60)	Blake Corum, LAR	$0	8
213. (RB61)	Nick Chubb, HOU	$0	6
214. (RB62)	Woody Marks, HOU	$0	6
215. (TE24)	Elijah Arroyo, SEA	$0	8
216. (TE25)	Mason Taylor, NYJ	$0	9
217. (TE26)	Cade Otton, TB	$0	9
218. (QB25)	Bryce Young, CAR	$0	14
219. (QB26)	Geno Smith, LV	$0	8
220. (QB27)	Anthony Richardson, IND	$0	11
221. (RB63)	Kendre Miller, NO	$0	11
222. (RB64)	Rico Dowdle, CAR	$0	14
223. (RB65)	Raheem Mostert, LV	$0	8
224. (WR82)	Adonai Mitchell, IND	$0	11
225. (RB66)	Miles Sanders, DAL	$0	10
226. (RB67)	DJ Giddens, IND	$0	11
227. (WR83)	Amari Cooper, FA	$0	0
228. (WR84)	Gabe Davis, FA	$0	0
229. (WR85)	Dyami Brown, JAC	$0	8
230. (WR86)	Josh Reynolds, NYJ	$0	9
231. (WR87)	Ray-Ray McCloud III, ATL	$0	5
232. (WR88)	Tutu Atwell, LAR	$0	8
233. (WR89)	Calvin Austin III, PIT	$0	5
234. (WR90)	Christian Watson, GB	$0	5
235. (DST13)	Giants D/ST, NYG	$0	14
236. (DST14)	Buccaneers D/ST, TB	$0	9
237. (K13)	Ka'imi Fairbairn, HOU	$0	6
238. (K14)	Joshua Karty, LAR	$0	8
239. (RB68)	Trevor Etienne, CAR	$0	14
240. (RB69)	Jarquez Hunter, LAR	$0	8
241. (RB70)	Sincere McCormick, LV	$0	8
242. (RB71)	Antonio Gibson, NE	$0	14
243. (RB72)	Jaleel McLaughlin, DEN	$0	12
244. (RB73)	Devin Singletary, NYG	$0	14
245. (RB74)	Samaje Perine, CIN	$0	10
246. (RB75)	Ty Johnson, BUF	$0	7
247. (RB76)	Elijah Mitchell, KC	$0	10
248. (RB77)	Kenneth Gainwell, PIT	$0	5
249. (RB78)	Ollie Gordon II, MIA	$0	12
250. (RB79)	Sean Tucker, TB	$0	9
251. (RB80)	Clyde Edwards-Helaire, NO	$0	11
252. (WR91)	Noah Brown, WAS	$0	12
253. (WR92)	Allen Lazard, NYJ	$0	9
254. (DST15)	Cardinals D/ST, ARI	$0	8
255. (DST16)	Packers D/ST, GB	$0	5
256. (K15)	Brandon McManus, GB	$0	5
257. (K16)	Evan McPherson, CIN	$0	10
258. (TE27)	Pat Freiermuth, PIT	$0	5
259. (TE28)	Dalton Schultz, HOU	$0	6
260. (TE29)	Tyler Higbee, LAR	$0	8
261. (WR93)	Alec Pierce, IND	$0	11
262. (WR94)	KaVontae Turpin, DAL	$0	10
263. (WR95)	Andrei Iosivas, CIN	$0	10
264. (WR96)	Jalen Tolbert, DAL	$0	10
265. (RB81)	Keaton Mitchell, BAL	$0	7
266. (RB82)	Kyle Juszczyk, SF	$0	14
267. (QB28)	Sam Darnold, SEA	$0	8
268. (QB29)	Aaron Rodgers, PIT	$0	5
269. (QB30)	Russell Wilson, NYG	$0	14
270. (QB31)	Tyler Shough, NO	$0	11
271. (WR97)	Jaylin Noel, HOU	$0	6
272. (WR98)	Jalen Coker, CAR	$0	14
273. (WR99)	Tre Tucker, LV	$0	8
274. (WR100)	Van Jefferson, TEN	$0	10
275. (WR101)	Greg Dortch, ARI	$0	8
276. (RB83)	Emari Demercado, ARI	$0	8
277. (RB84)	Kyle Monangai, CHI	$0	5
278. (RB85)	Devin Neal, NO	$0	11
279. (RB86)	Alec Ingold, MIA	$0	12
280. (RB87)	Dare Ogunbowale, HOU	$0	6
281. (RB88)	Tahj Brooks, CIN	$0	10
282. (RB89)	Brashard Smith, KC	$0	10
283. (RB90)	Jacory Croskey-Merritt, WAS	$0	12
284. (WR102)	Jordan Whittington, LAR	$0	8
285. (DST17)	Chiefs D/ST, KC	$0	10
286. (DST18)	Bears D/ST, CHI	$0	5
287. (K17)	Jason Myers, SEA	$0	8
288. (K18)	Wil Lutz, DEN	$0	12
289. (TE30)	Theo Johnson, NYG	$0	14
290. (TE31)	Isaiah Likely, BAL	$0	7
291. (TE32)	Juwan Johnson, NO	$0	11
292. (TE33)	Ja'Tavion Sanders, CAR	$0	14
293. (TE34)	Tyler Conklin, LAC	$0	12
294. (WR103)	Jalen Nailor, MIN	$0	6
295. (WR104)	Marquez Valdes-Scantling, SEA	$0	8
296. (QB32)	Daniel Jones, IND	$0	11
297. (DST19)	Rams D/ST, LAR	$0	8
298. (DST20)	49ers D/ST, SF	$0	14
299. (DST21)	Dolphins D/ST, MIA	$0	12
300. (DST22)	Chargers D/ST, LAC	$0	12`;
const regex = /(\d+)\.\s*\(([A-Z]+)(\d+)\)\s+([^,]+),\s+([A-Z]+)\s+\$(\d+)\s+(\d+)/g;
const matches = [...data.matchAll(regex)];
const players = [];



const lastYearQbs = [
    {
        "name": "Lamar Jackson",
        "value": "434.4"
    },
    {
        "name": "Josh Allen",
        "value": "385.1"
    },
    {
        "name": "Joe Burrow",
        "value": "381.9"
    },
    {
        "name": "Baker Mayfield",
        "value": "381.8"
    },
    {
        "name": "Jayden Daniels",
        "value": "364.7"
    },
    {
        "name": "Jared Goff",
        "value": "336.5"
    },
    {
        "name": "Bo Nix",
        "value": "329.1"
    },
    {
        "name": "Jalen Hurts",
        "value": "320.0"
    },
    {
        "name": "Sam Darnold",
        "value": "319.8"
    },
    {
        "name": "Kyler Murray",
        "value": "308.4"
    },
    {
        "name": "Patrick Mahomes II",
        "value": "293.9"
    },
    {
        "name": "Justin Herbert",
        "value": "288.6"
    },
    {
        "name": "Geno Smith",
        "value": "281.1"
    },
    {
        "name": "Brock Purdy",
        "value": "279.0"
    },
    {
        "name": "Aaron Rodgers",
        "value": "267.6"
    },
    {
        "name": "Caleb Williams",
        "value": "260.5"
    },
    {
        "name": "Jordan Love",
        "value": "244.9"
    },
    {
        "name": "C.J. Stroud",
        "value": "232.4"
    },
    {
        "name": "Matthew Stafford",
        "value": "222.6"
    },
    {
        "name": "Bryce Young",
        "value": "203.8"
    },
    {
        "name": "Kirk Cousins",
        "value": "192.3"
    },
    {
        "name": "Tua Tagovailoa",
        "value": "188.5"
    },
    {
        "name": "Drake Maye",
        "value": "187.1"
    },
    {
        "name": "Russell Wilson",
        "value": "177.8"
    },
    {
        "name": "Anthony Richardson Sr.",
        "value": "175.5"
    },
    {
        "name": "Derek Carr",
        "value": "156.0"
    },
    {
        "name": "Trevor Lawrence",
        "value": "152.2"
    },
    {
        "name": "Jameis Winston",
        "value": "143.2"
    },
    {
        "name": "Daniel Jones",
        "value": "142.3"
    },
    {
        "name": "Will Levis",
        "value": "132.0"
    },
    {
        "name": "Dak Prescott",
        "value": "124.5"
    },
    {
        "name": "Justin Fields",
        "value": "120.1"
    },
    {
        "name": "Cooper Rush",
        "value": "114.6"
    },
    {
        "name": "Gardner Minshew II",
        "value": "106.5"
    },
    {
        "name": "Joe Flacco",
        "value": "106.2"
    },
    {
        "name": "Mason Rudolph",
        "value": "104.8"
    },
    {
        "name": "Mac Jones",
        "value": "104.1"
    },
    {
        "name": "Aidan O'Connell",
        "value": "97.7"
    },
    {
        "name": "Drew Lock",
        "value": "85.1"
    },
    {
        "name": "Deshaun Watson",
        "value": "79.6"
    },
    {
        "name": "Spencer Rattler",
        "value": "72.2"
    },
    {
        "name": "Andy Dalton",
        "value": "64.9"
    },
    {
        "name": "Tyler Huntley",
        "value": "63.7"
    },
    {
        "name": "Malik Willis",
        "value": "51.8"
    },
    {
        "name": "Michael Penix Jr.",
        "value": "47.2"
    },
    {
        "name": "Jacoby Brissett",
        "value": "46.2"
    },
    {
        "name": "Marcus Mariota",
        "value": "45.7"
    },
    {
        "name": "Joshua Dobbs",
        "value": "32.8"
    },
    {
        "name": "Tanner McKee",
        "value": "28.9"
    },
    {
        "name": "Kenny Pickett",
        "value": "26.1"
    },
    {
        "name": "Desmond Ridder",
        "value": "23.9"
    },
    {
        "name": "Dorian Thompson-Robinson",
        "value": "21.8"
    },
    {
        "name": "Jimmy Garoppolo",
        "value": "20.9"
    },
    {
        "name": "Tyrod Taylor",
        "value": "20.0"
    },
    {
        "name": "Joe Milton III",
        "value": "19.2"
    },
    {
        "name": "Mitchell Trubisky",
        "value": "15.3"
    },
    {
        "name": "Tim Boyle",
        "value": "15.0"
    },
    {
        "name": "Jake Haener",
        "value": "14.3"
    },
    {
        "name": "Trey Lance",
        "value": "13.7"
    },
    {
        "name": "Tommy DeVito",
        "value": "13.5"
    },
    {
        "name": "Davis Mills",
        "value": "9.6"
    },
    {
        "name": "Bailey Zappe",
        "value": "9.0"
    },
    {
        "name": "Brandon Allen",
        "value": "8.4"
    },
    {
        "name": "Skylar Thompson",
        "value": "7.9"
    },
    {
        "name": "Carson Wentz",
        "value": "4.7"
    },
    {
        "name": "Taylor Heinicke",
        "value": "3.2"
    },
    {
        "name": "Hendon Hooker",
        "value": "2.7"
    },
    {
        "name": "Feleipe Franks",
        "value": "2.2"
    },
    {
        "name": "Nick Mullens",
        "value": "1.4"
    },
    {
        "name": "Mike White",
        "value": "1.1"
    },
    {
        "name": "Kyle Allen",
        "value": "0.8"
    },
    {
        "name": "Josh Johnson",
        "value": "0.7"
    },
    {
        "name": "Jarrett Stidham",
        "value": "0.5"
    },
    {
        "name": "Chris Oladokun",
        "value": "0.5"
    },
    {
        "name": "Sam Howell",
        "value": "0.2"
    },
    {
        "name": "Kyle McCord",
        "value": "0"
    },
    {
        "name": "J.J. McCarthy",
        "value": "0"
    },
    {
        "name": "Emory Jones",
        "value": "0.0"
    },
    {
        "name": "Malik Cunningham",
        "value": "0"
    },
    {
        "name": "Zach Wilson",
        "value": "0"
    },
    {
        "name": "Adrian Martinez",
        "value": "0"
    },
    {
        "name": "DJ Uiagalelei",
        "value": "0"
    },
    {
        "name": "Jalen Milroe",
        "value": "0"
    },
    {
        "name": "Sean Clifford",
        "value": "0"
    },
    {
        "name": "Tyler Shough",
        "value": "0"
    },
    {
        "name": "John Rhys Plumlee",
        "value": "0"
    },
    {
        "name": "Jack Plummer",
        "value": "0"
    },
    {
        "name": "Jason Bean",
        "value": "0"
    },
    {
        "name": "Shedeur Sanders",
        "value": "0"
    },
    {
        "name": "Will Howard",
        "value": "0"
    },
    {
        "name": "Carter Bradley",
        "value": "0"
    },
    {
        "name": "Austin Reed",
        "value": "0.0"
    },
    {
        "name": "Kurtis Rourke",
        "value": "0"
    },
    {
        "name": "Brady Cook",
        "value": "0"
    },
    {
        "name": "Connor Bazelak",
        "value": "0"
    },
    {
        "name": "Taylor Elgersma",
        "value": "0"
    },
    {
        "name": "Payton Thorne",
        "value": "0"
    },
    {
        "name": "Garrett Greene",
        "value": "0"
    },
    {
        "name": "Tommy Mellott",
        "value": "0"
    },
    {
        "name": "Max Brosmer",
        "value": "0"
    },
    {
        "name": "Ben Wooldridge",
        "value": "0"
    },
    {
        "name": "Hunter Dekkers",
        "value": "0"
    },
    {
        "name": "Cam Miller",
        "value": "0"
    },
    {
        "name": "Dresser Winn",
        "value": "0"
    },
    {
        "name": "Quinn Ewers",
        "value": "0"
    },
    {
        "name": "Stetson Bennett IV",
        "value": "0"
    },
    {
        "name": "Jaren Hall",
        "value": "0.0"
    },
    {
        "name": "Sam Hartman",
        "value": "0.0"
    },
    {
        "name": "Dillon Gabriel",
        "value": "0"
    },
    {
        "name": "Jaxson Dart",
        "value": "0"
    },
    {
        "name": "Kedon Slovis",
        "value": "0"
    },
    {
        "name": "Graham Mertz",
        "value": "0"
    },
    {
        "name": "Michael Pratt",
        "value": "0"
    },
    {
        "name": "Tanner Mordecai",
        "value": "0"
    },
    {
        "name": "Seth Henigan",
        "value": "0"
    },
    {
        "name": "Riley Leonard",
        "value": "0"
    },
    {
        "name": "Jordan Travis",
        "value": "0.0"
    },
    {
        "name": "Devin Leary",
        "value": "0"
    },
    {
        "name": "Cameron Ward",
        "value": "0"
    },
    {
        "name": "Ben Chappell",
        "value": "0"
    },
    {
        "name": "Adam Froman",
        "value": "0"
    },
    {
        "name": "Erik Ainge",
        "value": "0"
    },
    {
        "name": "Hunter Cantwell",
        "value": "0"
    },
    {
        "name": "Teddy Bridgewater",
        "value": "0"
    },
    {
        "name": "Case Keenum",
        "value": "0"
    },
    {
        "name": "Sam Ehlinger",
        "value": "0"
    },
    {
        "name": "John Wolford",
        "value": "0"
    },
    {
        "name": "Will Grier",
        "value": "0"
    },
    {
        "name": "Brett Rypien",
        "value": "0"
    },
    {
        "name": "Logan Woodside",
        "value": "0"
    },
    {
        "name": "Brett Smith",
        "value": "0"
    },
    {
        "name": "Jake Luton",
        "value": "0.0"
    },
    {
        "name": "Shane Buechele",
        "value": "0"
    },
    {
        "name": "Easton Stick",
        "value": "0"
    },
    {
        "name": "Trevor Siemian",
        "value": "0.0"
    },
    {
        "name": "C.J. Beathard",
        "value": "0.0"
    },
    {
        "name": "Jeff Driskel",
        "value": "0.0"
    },
    {
        "name": "Jake Browning",
        "value": "-0.2"
    },
    {
        "name": "Kyle Trask",
        "value": "-0.2"
    },
    {
        "name": "Tyson Bagent",
        "value": "-0.3"
    },
    {
        "name": "Clayton Tune",
        "value": "-2.1"
    }
]
const lastYearRbs = [
    {
        "name": "Jahmyr Gibbs",
        "value": "362.9"
    },
    {
        "name": "Saquon Barkley",
        "value": "355.3"
    },
    {
        "name": "Bijan Robinson",
        "value": "341.7"
    },
    {
        "name": "Derrick Henry",
        "value": "336.4"
    },
    {
        "name": "De'Von Achane",
        "value": "299.9"
    },
    {
        "name": "Josh Jacobs",
        "value": "293.1"
    },
    {
        "name": "Kyren Williams",
        "value": "272.1"
    },
    {
        "name": "James Cook",
        "value": "266.7"
    },
    {
        "name": "Alvin Kamara",
        "value": "265.3"
    },
    {
        "name": "Chase Brown",
        "value": "255.0"
    },
    {
        "name": "James Conner",
        "value": "253.8"
    },
    {
        "name": "Jonathan Taylor",
        "value": "244.7"
    },
    {
        "name": "Bucky Irving",
        "value": "244.4"
    },
    {
        "name": "Aaron Jones Sr.",
        "value": "241.6"
    },
    {
        "name": "Chuba Hubbard",
        "value": "241.6"
    },
    {
        "name": "Breece Hall",
        "value": "240.9"
    },
    {
        "name": "Joe Mixon",
        "value": "240.5"
    },
    {
        "name": "David Montgomery",
        "value": "221.7"
    },
    {
        "name": "D'Andre Swift",
        "value": "214.5"
    },
    {
        "name": "Najee Harris",
        "value": "204.6"
    },
    {
        "name": "Tony Pollard",
        "value": "200.7"
    },
    {
        "name": "Rachaad White",
        "value": "199.6"
    },
    {
        "name": "Rico Dowdle",
        "value": "197.8"
    },
    {
        "name": "J.K. Dobbins",
        "value": "191.8"
    },
    {
        "name": "Zach Charbonnet",
        "value": "186.9"
    },
    {
        "name": "Tyrone Tracy Jr.",
        "value": "182.3"
    },
    {
        "name": "Kenneth Walker III",
        "value": "181.2"
    },
    {
        "name": "Rhamondre Stevenson",
        "value": "175.9"
    },
    {
        "name": "Brian Robinson Jr.",
        "value": "159.8"
    },
    {
        "name": "Javonte Williams",
        "value": "157.9"
    },
    {
        "name": "Kareem Hunt",
        "value": "155.4"
    },
    {
        "name": "Alexander Mattison",
        "value": "137.4"
    },
    {
        "name": "Jerome Ford",
        "value": "134.0"
    },
    {
        "name": "Austin Ekeler",
        "value": "132.3"
    },
    {
        "name": "Travis Etienne Jr.",
        "value": "130.2"
    },
    {
        "name": "Tank Bigsby",
        "value": "129.0"
    },
    {
        "name": "Justice Hill",
        "value": "127.1"
    },
    {
        "name": "Ameer Abdullah",
        "value": "125.2"
    },
    {
        "name": "Jaylen Warren",
        "value": "124.1"
    },
    {
        "name": "Ray Davis",
        "value": "116.1"
    },
    {
        "name": "Jordan Mason",
        "value": "115.0"
    },
    {
        "name": "Tyjae Spears",
        "value": "113.6"
    },
    {
        "name": "Tyler Allgeier",
        "value": "106.2"
    },
    {
        "name": "Antonio Gibson",
        "value": "103.4"
    },
    {
        "name": "Jaleel McLaughlin",
        "value": "97.2"
    },
    {
        "name": "Devin Singletary",
        "value": "96.6"
    },
    {
        "name": "Emanuel Wilson",
        "value": "96.0"
    },
    {
        "name": "Isaac Guerendo",
        "value": "94.2"
    },
    {
        "name": "Cam Akers",
        "value": "93.2"
    },
    {
        "name": "Ty Johnson",
        "value": "91.7"
    },
    {
        "name": "Braelon Allen",
        "value": "85.2"
    },
    {
        "name": "Zack Moss",
        "value": "81.9"
    },
    {
        "name": "Samaje Perine",
        "value": "81.4"
    },
    {
        "name": "Roschon Johnson",
        "value": "77.4"
    },
    {
        "name": "Miles Sanders",
        "value": "77.3"
    },
    {
        "name": "Raheem Mostert",
        "value": "70.9"
    },
    {
        "name": "Sean Tucker",
        "value": "68.7"
    },
    {
        "name": "Gus Edwards",
        "value": "64.1"
    },
    {
        "name": "Jeremy McNichols",
        "value": "63.8"
    },
    {
        "name": "Nick Chubb",
        "value": "63.3"
    },
    {
        "name": "Kenneth Gainwell",
        "value": "62.6"
    },
    {
        "name": "Kyle Juszczyk",
        "value": "57.6"
    },
    {
        "name": "Ezekiel Elliott",
        "value": "57.5"
    },
    {
        "name": "Isiah Pacheco",
        "value": "56.9"
    },
    {
        "name": "Dare Ogunbowale",
        "value": "56.0"
    },
    {
        "name": "Emari Demercado",
        "value": "54.7"
    },
    {
        "name": "Trey Sermon",
        "value": "53.8"
    },
    {
        "name": "Audric Estime",
        "value": "48.7"
    },
    {
        "name": "Christian McCaffrey",
        "value": "47.8"
    },
    {
        "name": "Trey Benson",
        "value": "47.0"
    },
    {
        "name": "Isaiah Davis",
        "value": "45.9"
    },
    {
        "name": "Tyler Goodson",
        "value": "44.4"
    },
    {
        "name": "Dameon Pierce",
        "value": "43.5"
    },
    {
        "name": "Chris Brooks",
        "value": "42.2"
    },
    {
        "name": "Cordarrelle Patterson",
        "value": "37.5"
    },
    {
        "name": "Jamaal Williams",
        "value": "37.1"
    },
    {
        "name": "D'Ernest Johnson",
        "value": "35.9"
    },
    {
        "name": "Michael Carter",
        "value": "35.8"
    },
    {
        "name": "Pierre Strong Jr.",
        "value": "35.2"
    },
    {
        "name": "Blake Corum",
        "value": "33.5"
    },
    {
        "name": "Hassan Haskins",
        "value": "32.8"
    },
    {
        "name": "Kimani Vidal",
        "value": "32.7"
    },
    {
        "name": "D'Onta Foreman",
        "value": "32.6"
    },
    {
        "name": "Khalil Herbert",
        "value": "31.5"
    },
    {
        "name": "Chris Rodriguez Jr.",
        "value": "31.5"
    },
    {
        "name": "Patrick Taylor Jr.",
        "value": "29.8"
    },
    {
        "name": "Michael Burton",
        "value": "29.3"
    },
    {
        "name": "Zamir White",
        "value": "29.3"
    },
    {
        "name": "Kendre Miller",
        "value": "29.1"
    },
    {
        "name": "JaMycal Hasty",
        "value": "28.8"
    },
    {
        "name": "Ty Chandler",
        "value": "28.4"
    },
    {
        "name": "Sincere McCormick",
        "value": "27.2"
    },
    {
        "name": "Hunter Luepke",
        "value": "26.9"
    },
    {
        "name": "Jaylen Wright",
        "value": "26.7"
    },
    {
        "name": "Alec Ingold",
        "value": "26.3"
    },
    {
        "name": "Jordan Mims",
        "value": "26.1"
    },
    {
        "name": "Carson Steele",
        "value": "23.9"
    },
    {
        "name": "Kenny McIntosh",
        "value": "22.4"
    },
    {
        "name": "DeeJay Dallas",
        "value": "21.0"
    },
    {
        "name": "Craig Reynolds",
        "value": "20.9"
    },
    {
        "name": "Ronnie Rivers",
        "value": "18.3"
    },
    {
        "name": "Eric Gray",
        "value": "17.3"
    },
    {
        "name": "Patrick Ricard",
        "value": "17.2"
    },
    {
        "name": "Will Shipley",
        "value": "15.7"
    },
    {
        "name": "C.J. Ham",
        "value": "13.5"
    },
    {
        "name": "Julius Chestnut",
        "value": "13.3"
    },
    {
        "name": "Deuce Vaughn",
        "value": "11.8"
    },
    {
        "name": "Tony Jones Jr.",
        "value": "11.5"
    },
    {
        "name": "Jeff Wilson Jr.",
        "value": "10.6"
    },
    {
        "name": "Clyde Edwards-Helaire",
        "value": "10.0"
    },
    {
        "name": "Tyler Badie",
        "value": "9.4"
    },
    {
        "name": "Sione Vaki",
        "value": "8.1"
    },
    {
        "name": "Raheem Blackshear",
        "value": "8.0"
    },
    {
        "name": "Jonathon Brooks",
        "value": "7.5"
    },
    {
        "name": "Keaton Mitchell",
        "value": "6.8"
    },
    {
        "name": "Travis Homer",
        "value": "6.4"
    },
    {
        "name": "J.J. Taylor",
        "value": "6.4"
    },
    {
        "name": "Kene Nwangwu",
        "value": "6.0"
    },
    {
        "name": "Mike Boone",
        "value": "5.9"
    },
    {
        "name": "Jacob Kibodi",
        "value": "4.9"
    },
    {
        "name": "Jermar Jefferson",
        "value": "4.2"
    },
    {
        "name": "Dalvin Cook",
        "value": "4.0"
    },
    {
        "name": "Blake Watson",
        "value": "3.3"
    },
    {
        "name": "Terrell Jennings",
        "value": "3.3"
    },
    {
        "name": "Jase McClellan",
        "value": "3.2"
    },
    {
        "name": "Rasheen Ali",
        "value": "3.1"
    },
    {
        "name": "MarShawn Lloyd",
        "value": "2.8"
    },
    {
        "name": "Jonathan Ward",
        "value": "2.2"
    },
    {
        "name": "Myles Gaskin",
        "value": "2.0"
    },
    {
        "name": "George Holani",
        "value": "1.9"
    },
    {
        "name": "Cody Schrader",
        "value": "1.9"
    },
    {
        "name": "Chris Collier",
        "value": "1.8"
    },
    {
        "name": "Aaron Shampklin",
        "value": "1.7"
    },
    {
        "name": "Tyreik McAllister",
        "value": "1.1"
    },
    {
        "name": "Reggie Gilliam",
        "value": "0.7"
    },
    {
        "name": "Tyrion Davis-Price",
        "value": "0.7"
    },
    {
        "name": "Ke'Shawn Vaughn",
        "value": "0.4"
    },
    {
        "name": "Darrynton Evans",
        "value": "0.3"
    },
    {
        "name": "British Brooks",
        "value": "0.2"
    },
    {
        "name": "Joshua Kelley",
        "value": "0.2"
    },
    {
        "name": "Tahj Brooks",
        "value": "0"
    },
    {
        "name": "Woody Marks",
        "value": "0"
    },
    {
        "name": "Ahmani Marshall",
        "value": "0"
    },
    {
        "name": "Elijah Young",
        "value": "0"
    },
    {
        "name": "Montrell Johnson Jr.",
        "value": "0"
    },
    {
        "name": "Nathan Carter",
        "value": "0"
    },
    {
        "name": "Amar Johnson",
        "value": "0"
    },
    {
        "name": "Robbie Ouzts",
        "value": "0"
    },
    {
        "name": "Lan Larison",
        "value": "0"
    },
    {
        "name": "Lucas Scott",
        "value": "0"
    },
    {
        "name": "Deion Hankins",
        "value": "0"
    },
    {
        "name": "Quali Conley",
        "value": "0"
    },
    {
        "name": "Rushawn Baker",
        "value": "0"
    },
    {
        "name": "ShunDerrick Powell",
        "value": "0"
    },
    {
        "name": "Max Hurleman",
        "value": "0"
    },
    {
        "name": "Toa Taua",
        "value": "0"
    },
    {
        "name": "La'Mical Perine",
        "value": "0.0"
    },
    {
        "name": "A.J. Dillon",
        "value": "0"
    },
    {
        "name": "DJ Thomas-Jones",
        "value": "0"
    },
    {
        "name": "Anthony Tyus III",
        "value": "0"
    },
    {
        "name": "Kye Robichaux",
        "value": "0"
    },
    {
        "name": "Jalen White",
        "value": "0"
    },
    {
        "name": "Salvon Ahmed",
        "value": "0"
    },
    {
        "name": "Kayron Lynch-Adams",
        "value": "0"
    },
    {
        "name": "Jacardia Wright",
        "value": "0"
    },
    {
        "name": "Brock Lampe",
        "value": "0"
    },
    {
        "name": "Tre Stewart",
        "value": "0"
    },
    {
        "name": "Josh Williams",
        "value": "0"
    },
    {
        "name": "Jaret Patterson",
        "value": "0"
    },
    {
        "name": "Demetric Felton Jr.",
        "value": "0"
    },
    {
        "name": "Zonovan Knight",
        "value": "0"
    },
    {
        "name": "Troy Hairston II",
        "value": "0.0"
    },
    {
        "name": "Ian Wheeler",
        "value": "0"
    },
    {
        "name": "Dante Miller",
        "value": "0.0"
    },
    {
        "name": "Evan Hull",
        "value": "0"
    },
    {
        "name": "Colson Yankoff",
        "value": "0.0"
    },
    {
        "name": "Nay'Quan Wright",
        "value": "0"
    },
    {
        "name": "Jarquez Hunter",
        "value": "0"
    },
    {
        "name": "Velus Jones Jr.",
        "value": "0.0"
    },
    {
        "name": "Malik Davis",
        "value": "0"
    },
    {
        "name": "Jaydon Blue",
        "value": "0"
    },
    {
        "name": "Jabari Small",
        "value": "0.0"
    },
    {
        "name": "Israel Abanikanda",
        "value": "0"
    },
    {
        "name": "Raheim Sanders",
        "value": "0"
    },
    {
        "name": "Frank Gore Jr.",
        "value": "0"
    },
    {
        "name": "Jawhar Jordan",
        "value": "0"
    },
    {
        "name": "Damien Martinez",
        "value": "0"
    },
    {
        "name": "Emani Bailey",
        "value": "0"
    },
    {
        "name": "Owen Wright",
        "value": "0"
    },
    {
        "name": "Zavier Scott",
        "value": "0"
    },
    {
        "name": "Brady Russell",
        "value": "0.0"
    },
    {
        "name": "Ollie Gordon II",
        "value": "0"
    },
    {
        "name": "Ashton Jeanty",
        "value": "0"
    },
    {
        "name": "Ben VanSumeren",
        "value": "0.0"
    },
    {
        "name": "Omarion Hampton",
        "value": "0"
    },
    {
        "name": "Lew Nichols III",
        "value": "0"
    },
    {
        "name": "Trevor Etienne",
        "value": "0"
    },
    {
        "name": "Quinshon Judkins",
        "value": "0"
    },
    {
        "name": "Jacob Saylors",
        "value": "0"
    },
    {
        "name": "Jordan Waters",
        "value": "0"
    },
    {
        "name": "Carlos Washington Jr.",
        "value": "0"
    },
    {
        "name": "Kazmeir Allen",
        "value": "0.0"
    },
    {
        "name": "Scott Matlock",
        "value": "0.0"
    },
    {
        "name": "Elijah Dotson",
        "value": "0"
    },
    {
        "name": "Jashaun Corbin",
        "value": "0"
    },
    {
        "name": "Marcus Yarns",
        "value": "0"
    },
    {
        "name": "Bhayshul Tuten",
        "value": "0"
    },
    {
        "name": "Jordan James",
        "value": "0"
    },
    {
        "name": "Kendall Milton",
        "value": "0.0"
    },
    {
        "name": "Jacory Croskey-Merritt",
        "value": "0"
    },
    {
        "name": "Lawrance Toafili",
        "value": "0"
    },
    {
        "name": "LeQuint Allen Jr.",
        "value": "0"
    },
    {
        "name": "Phil Mafah",
        "value": "0"
    },
    {
        "name": "D.J. Williams",
        "value": "0.0"
    },
    {
        "name": "Nate Noel",
        "value": "0"
    },
    {
        "name": "Donovan Edwards",
        "value": "0"
    },
    {
        "name": "RJ Harvey",
        "value": "0"
    },
    {
        "name": "Kaleb Johnson",
        "value": "0"
    },
    {
        "name": "Cam Skattebo",
        "value": "0"
    },
    {
        "name": "Brashard Smith",
        "value": "0"
    },
    {
        "name": "Corey Kiner",
        "value": "0"
    },
    {
        "name": "Kyle Monangai",
        "value": "0"
    },
    {
        "name": "Keilan Robinson",
        "value": "0.0"
    },
    {
        "name": "Elijah Mitchell",
        "value": "0"
    },
    {
        "name": "Javian Hawkins",
        "value": "0"
    },
    {
        "name": "Chris Tyree",
        "value": "0"
    },
    {
        "name": "Adam Prentice",
        "value": "0.0"
    },
    {
        "name": "Devin Neal",
        "value": "0"
    },
    {
        "name": "Gary Brightwell",
        "value": "0.0"
    },
    {
        "name": "Avery Williams",
        "value": "0.0"
    },
    {
        "name": "TreVeyon Henderson",
        "value": "0"
    },
    {
        "name": "Kalel Mullings",
        "value": "0"
    },
    {
        "name": "DJ Giddens",
        "value": "0"
    },
    {
        "name": "Ulysses Bentley IV",
        "value": "0"
    },
    {
        "name": "Marcus Major Jr.",
        "value": "0"
    },
    {
        "name": "Dylan Sampson",
        "value": "0"
    },
    {
        "name": "Ja'Quinden Jackson",
        "value": "0"
    },
    {
        "name": "Keaontay Ingram",
        "value": "0.0"
    },
    {
        "name": "Shane Bannon",
        "value": "0"
    },
    {
        "name": "Jay Finley",
        "value": "0"
    },
    {
        "name": "Willie Carter",
        "value": "0"
    },
    {
        "name": "Kenny Irons",
        "value": "0"
    },
    {
        "name": "Chad Simpson",
        "value": "0"
    },
    {
        "name": "Anthony Alridge",
        "value": "0"
    },
    {
        "name": "Dantrell Savage",
        "value": "0"
    },
    {
        "name": "Xavier Omon",
        "value": "0"
    },
    {
        "name": "Garrett Mills",
        "value": "0"
    },
    {
        "name": "Madison Hedgecock",
        "value": "0"
    },
    {
        "name": "Samkon Gado",
        "value": "0"
    },
    {
        "name": "John Kelly Jr.",
        "value": "0.0"
    },
    {
        "name": "Nyheim Miller-Hines",
        "value": "0.0"
    },
    {
        "name": "Taquan Mizzell",
        "value": "0"
    },
    {
        "name": "Trayveon Williams",
        "value": "0.0"
    },
    {
        "name": "Mike Weber",
        "value": "0"
    },
    {
        "name": "Andrew Beck",
        "value": "0.0"
    },
    {
        "name": "Khari Blasingame",
        "value": "0.0"
    },
    {
        "name": "Jakob Johnson",
        "value": "0.0"
    },
    {
        "name": "Brennan Clay",
        "value": "0"
    },
    {
        "name": "Tim Flanders",
        "value": "0"
    },
    {
        "name": "Dylan Laube",
        "value": "-2.0"
    }
]
const lastYearWrs=[
    {
        "name": "Ja'Marr Chase",
        "value": "403.0"
    },
    {
        "name": "Justin Jefferson",
        "value": "317.5"
    },
    {
        "name": "Amon-Ra St. Brown",
        "value": "316.2"
    },
    {
        "name": "Brian Thomas Jr.",
        "value": "284.0"
    },
    {
        "name": "Drake London",
        "value": "280.8"
    },
    {
        "name": "Malik Nabers",
        "value": "273.6"
    },
    {
        "name": "Terry McLaurin",
        "value": "267.8"
    },
    {
        "name": "CeeDee Lamb",
        "value": "263.4"
    },
    {
        "name": "Jaxon Smith-Njigba",
        "value": "253.0"
    },
    {
        "name": "Garrett Wilson",
        "value": "251.9"
    },
    {
        "name": "Davante Adams",
        "value": "241.3"
    },
    {
        "name": "Ladd McConkey",
        "value": "240.9"
    },
    {
        "name": "Jerry Jeudy",
        "value": "240.9"
    },
    {
        "name": "Mike Evans",
        "value": "240.4"
    },
    {
        "name": "Courtland Sutton",
        "value": "240.3"
    },
    {
        "name": "DJ Moore",
        "value": "238.1"
    },
    {
        "name": "Tee Higgins",
        "value": "222.1"
    },
    {
        "name": "Tyreek Hill",
        "value": "218.2"
    },
    {
        "name": "Jakobi Meyers",
        "value": "218.0"
    },
    {
        "name": "A.J. Brown",
        "value": "216.9"
    },
    {
        "name": "Jordan Addison",
        "value": "212.5"
    },
    {
        "name": "Jameson Williams",
        "value": "212.2"
    },
    {
        "name": "Nico Collins",
        "value": "210.6"
    },
    {
        "name": "Jauan Jennings",
        "value": "210.5"
    },
    {
        "name": "Zay Flowers",
        "value": "209.5"
    },
    {
        "name": "Puka Nacua",
        "value": "206.6"
    },
    {
        "name": "DeVonta Smith",
        "value": "199.4"
    },
    {
        "name": "Calvin Ridley",
        "value": "199.2"
    },
    {
        "name": "Jayden Reed",
        "value": "197.0"
    },
    {
        "name": "Marvin Harrison Jr.",
        "value": "196.5"
    },
    {
        "name": "Darnell Mooney",
        "value": "193.2"
    },
    {
        "name": "DK Metcalf",
        "value": "191.2"
    },
    {
        "name": "Xavier Worthy",
        "value": "187.2"
    },
    {
        "name": "Keenan Allen",
        "value": "185.4"
    },
    {
        "name": "Josh Downs",
        "value": "183.5"
    },
    {
        "name": "Wan'Dale Robinson",
        "value": "182.7"
    },
    {
        "name": "Khalil Shakir",
        "value": "182.5"
    },
    {
        "name": "Cooper Kupp",
        "value": "175.0"
    },
    {
        "name": "Quentin Johnston",
        "value": "174.7"
    },
    {
        "name": "Rashod Bateman",
        "value": "174.6"
    },
    {
        "name": "Michael Pittman Jr.",
        "value": "165.8"
    },
    {
        "name": "George Pickens",
        "value": "164.4"
    },
    {
        "name": "Alec Pierce",
        "value": "161.4"
    },
    {
        "name": "Deebo Samuel Sr.",
        "value": "153.6"
    },
    {
        "name": "Jalen Tolbert",
        "value": "152.0"
    },
    {
        "name": "Jaylen Waddle",
        "value": "149.6"
    },
    {
        "name": "DeMario Douglas",
        "value": "147.7"
    },
    {
        "name": "DeAndre Hopkins",
        "value": "147.0"
    },
    {
        "name": "Rome Odunze",
        "value": "144.9"
    },
    {
        "name": "Ray-Ray McCloud III",
        "value": "140.5"
    },
    {
        "name": "Tank Dell",
        "value": "140.0"
    },
    {
        "name": "Adam Thielen",
        "value": "139.5"
    },
    {
        "name": "Chris Godwin",
        "value": "137.8"
    },
    {
        "name": "Nick Westbrook-Ikhine",
        "value": "135.7"
    },
    {
        "name": "Jalen McMillan",
        "value": "135.4"
    },
    {
        "name": "Romeo Doubs",
        "value": "132.1"
    },
    {
        "name": "Marvin Mims Jr.",
        "value": "129.5"
    },
    {
        "name": "Tre Tucker",
        "value": "129.3"
    },
    {
        "name": "Allen Lazard",
        "value": "126.0"
    },
    {
        "name": "Xavier Legette",
        "value": "125.1"
    },
    {
        "name": "Michael Wilson",
        "value": "124.5"
    },
    {
        "name": "Demarcus Robinson",
        "value": "123.5"
    },
    {
        "name": "Amari Cooper",
        "value": "122.7"
    },
    {
        "name": "Kayshon Boutte",
        "value": "121.9"
    },
    {
        "name": "Stefon Diggs",
        "value": "121.9"
    },
    {
        "name": "Tyler Lockett",
        "value": "121.0"
    },
    {
        "name": "Elijah Moore",
        "value": "120.9"
    },
    {
        "name": "Andrei Iosivas",
        "value": "119.9"
    },
    {
        "name": "Calvin Austin III",
        "value": "118.8"
    },
    {
        "name": "Olamide Zaccheaus",
        "value": "112.4"
    },
    {
        "name": "Keon Coleman",
        "value": "111.5"
    },
    {
        "name": "Dontayvion Wicks",
        "value": "110.5"
    },
    {
        "name": "Darius Slayton",
        "value": "110.0"
    },
    {
        "name": "Joshua Palmer",
        "value": "107.4"
    },
    {
        "name": "Devaughn Vele",
        "value": "106.5"
    },
    {
        "name": "Christian Watson",
        "value": "105.3"
    },
    {
        "name": "KaVontae Turpin",
        "value": "104.2"
    },
    {
        "name": "Jalen Nailor",
        "value": "103.0"
    },
    {
        "name": "Tutu Atwell",
        "value": "98.9"
    },
    {
        "name": "Mack Hollins",
        "value": "98.8"
    },
    {
        "name": "Parker Washington",
        "value": "97.0"
    },
    {
        "name": "Ricky Pearsall",
        "value": "93.5"
    },
    {
        "name": "Jalen Coker",
        "value": "92.6"
    },
    {
        "name": "Tim Patrick",
        "value": "92.4"
    },
    {
        "name": "Greg Dortch",
        "value": "90.3"
    },
    {
        "name": "Diontae Johnson",
        "value": "89.1"
    },
    {
        "name": "Noah Brown",
        "value": "86.3"
    },
    {
        "name": "David Moore",
        "value": "85.1"
    },
    {
        "name": "Marquez Valdes-Scantling",
        "value": "84.5"
    },
    {
        "name": "Cedric Tillman",
        "value": "80.4"
    },
    {
        "name": "Sterling Shepard",
        "value": "80.3"
    },
    {
        "name": "Rashid Shaheed",
        "value": "79.8"
    },
    {
        "name": "Tyler Boyd",
        "value": "78.3"
    },
    {
        "name": "Chris Olave",
        "value": "76.7"
    },
    {
        "name": "Christian Kirk",
        "value": "70.9"
    },
    {
        "name": "Brandin Cooks",
        "value": "69.6"
    },
    {
        "name": "Dyami Brown",
        "value": "67.4"
    },
    {
        "name": "Troy Franklin",
        "value": "67.1"
    },
    {
        "name": "Kendrick Bourne",
        "value": "65.1"
    },
    {
        "name": "Rashee Rice",
        "value": "64.9"
    },
    {
        "name": "Lil'Jordan Humphrey",
        "value": "64.3"
    },
    {
        "name": "Curtis Samuel",
        "value": "63.7"
    },
    {
        "name": "Van Jefferson",
        "value": "63.6"
    },
    {
        "name": "Justin Watson",
        "value": "62.9"
    },
    {
        "name": "Brandon Aiyuk",
        "value": "62.4"
    },
    {
        "name": "Tyler Johnson",
        "value": "61.1"
    },
    {
        "name": "Mike Williams",
        "value": "56.8"
    },
    {
        "name": "Kalif Raymond",
        "value": "56.5"
    },
    {
        "name": "John Metchie III",
        "value": "55.4"
    },
    {
        "name": "Malik Washington",
        "value": "54.8"
    },
    {
        "name": "Gabe Davis",
        "value": "53.9"
    },
    {
        "name": "Adonai Mitchell",
        "value": "53.8"
    },
    {
        "name": "JuJu Smith-Schuster",
        "value": "53.1"
    },
    {
        "name": "Jordan Whittington",
        "value": "52.5"
    },
    {
        "name": "Cedrick Wilson Jr.",
        "value": "49.9"
    },
    {
        "name": "Nelson Agholor",
        "value": "49.1"
    },
    {
        "name": "DJ Turner",
        "value": "47.1"
    },
    {
        "name": "Jahan Dotson",
        "value": "41.9"
    },
    {
        "name": "Derius Davis",
        "value": "40.1"
    },
    {
        "name": "Josh Reynolds",
        "value": "38.4"
    },
    {
        "name": "Robert Woods",
        "value": "38.3"
    },
    {
        "name": "Ryan Miller",
        "value": "36.8"
    },
    {
        "name": "Tylan Wallace",
        "value": "36.3"
    },
    {
        "name": "Jalen Brooks",
        "value": "35.7"
    },
    {
        "name": "Trey Palmer",
        "value": "35.2"
    },
    {
        "name": "Luke McCaffrey",
        "value": "34.8"
    },
    {
        "name": "Mecole Hardman Jr.",
        "value": "33.2"
    },
    {
        "name": "Ja'Lynn Polk",
        "value": "32.7"
    },
    {
        "name": "Jonathan Mingo",
        "value": "32.2"
    },
    {
        "name": "KhaDarel Hodge",
        "value": "32.1"
    },
    {
        "name": "Dante Pettis",
        "value": "32.0"
    },
    {
        "name": "Malik Heath",
        "value": "31.7"
    },
    {
        "name": "Jake Bobo",
        "value": "29.7"
    },
    {
        "name": "Kevin Austin Jr.",
        "value": "27.0"
    },
    {
        "name": "Bub Means",
        "value": "26.8"
    },
    {
        "name": "Jamison Crowder",
        "value": "26.2"
    },
    {
        "name": "Mason Tipton",
        "value": "23.9"
    },
    {
        "name": "Xavier Hutchinson",
        "value": "23.7"
    },
    {
        "name": "Bo Melton",
        "value": "22.5"
    },
    {
        "name": "Trent Sherfield Sr.",
        "value": "22.3"
    },
    {
        "name": "Rakim Jarrett",
        "value": "21.4"
    },
    {
        "name": "Devin Duvernay",
        "value": "19.2"
    },
    {
        "name": "Ashton Dulin",
        "value": "19.2"
    },
    {
        "name": "K.J. Osborn",
        "value": "18.7"
    },
    {
        "name": "Ryan Flournoy",
        "value": "18.2"
    },
    {
        "name": "Marquise Brown",
        "value": "18.1"
    },
    {
        "name": "Ainias Smith",
        "value": "17.7"
    },
    {
        "name": "Simi Fehoko",
        "value": "16.6"
    },
    {
        "name": "Zay Jones",
        "value": "16.4"
    },
    {
        "name": "Bryce Oliver",
        "value": "15.5"
    },
    {
        "name": "Parris Campbell",
        "value": "15.0"
    },
    {
        "name": "Johnny Wilson",
        "value": "14.8"
    },
    {
        "name": "Jermaine Burton",
        "value": "14.7"
    },
    {
        "name": "Jalen Reagor",
        "value": "14.7"
    },
    {
        "name": "Odell Beckham Jr.",
        "value": "14.5"
    },
    {
        "name": "Xavier Gipson",
        "value": "14.4"
    },
    {
        "name": "Jalin Hyatt",
        "value": "14.2"
    },
    {
        "name": "DeAndre Carter",
        "value": "14.2"
    },
    {
        "name": "Brandon Powell",
        "value": "14.1"
    },
    {
        "name": "Tyrell Shavers",
        "value": "13.9"
    },
    {
        "name": "Chris Conley",
        "value": "13.6"
    },
    {
        "name": "River Cracraft",
        "value": "13.6"
    },
    {
        "name": "Michael Woods II",
        "value": "13.5"
    },
    {
        "name": "DJ Chark Jr.",
        "value": "13.1"
    },
    {
        "name": "Tay Martin",
        "value": "11.9"
    },
    {
        "name": "Ben Skowronek",
        "value": "11.9"
    },
    {
        "name": "Scotty Miller",
        "value": "11.9"
    },
    {
        "name": "Laviska Shenault Jr.",
        "value": "10.7"
    },
    {
        "name": "Jacob Cowing",
        "value": "10.7"
    },
    {
        "name": "Britain Covey",
        "value": "10.4"
    },
    {
        "name": "Kristian Wilkerson",
        "value": "9.8"
    },
    {
        "name": "Devontez Walker",
        "value": "9.1"
    },
    {
        "name": "Tyquan Thornton",
        "value": "8.7"
    },
    {
        "name": "Treylon Burks",
        "value": "7.5"
    },
    {
        "name": "Dee Eskridge",
        "value": "7.4"
    },
    {
        "name": "Terrace Marshall Jr.",
        "value": "7.1"
    },
    {
        "name": "Tim Jones",
        "value": "7.1"
    },
    {
        "name": "Nikko Remigio",
        "value": "6.8"
    },
    {
        "name": "Dan Chisena",
        "value": "6.7"
    },
    {
        "name": "Deven Thompkins",
        "value": "6.7"
    },
    {
        "name": "Cody White",
        "value": "6.4"
    },
    {
        "name": "Xavier Smith",
        "value": "6.2"
    },
    {
        "name": "Alex Bachman",
        "value": "6.1"
    },
    {
        "name": "Allen Robinson II",
        "value": "6.0"
    },
    {
        "name": "Ihmir Smith-Marsette",
        "value": "6.0"
    },
    {
        "name": "David Bell",
        "value": "5.7"
    },
    {
        "name": "Charlie Jones",
        "value": "5.5"
    },
    {
        "name": "Malachi Corley",
        "value": "5.2"
    },
    {
        "name": "Jamari Thrash",
        "value": "5.2"
    },
    {
        "name": "Trenton Irwin",
        "value": "4.5"
    },
    {
        "name": "Ronnie Bell",
        "value": "4.2"
    },
    {
        "name": "Austin Trammell",
        "value": "4.0"
    },
    {
        "name": "Mason Kinsey",
        "value": "3.7"
    },
    {
        "name": "Anthony Gould",
        "value": "3.3"
    },
    {
        "name": "Isaiah Hodgins",
        "value": "3.2"
    },
    {
        "name": "Grant DuBose",
        "value": "3.1"
    },
    {
        "name": "James Proche II",
        "value": "3.1"
    },
    {
        "name": "Chris Blair",
        "value": "2.7"
    },
    {
        "name": "Isaiah Williams",
        "value": "2.6"
    },
    {
        "name": "Anthony Miller",
        "value": "2.6"
    },
    {
        "name": "Casey Washington",
        "value": "2.4"
    },
    {
        "name": "Javon Baker",
        "value": "2.2"
    },
    {
        "name": "Trent Taylor",
        "value": "2.1"
    },
    {
        "name": "Brandon Johnson",
        "value": "1.9"
    },
    {
        "name": "Kendric Pryor",
        "value": "1.9"
    },
    {
        "name": "Ramel Keyton",
        "value": "1.7"
    },
    {
        "name": "John Ross",
        "value": "1.6"
    },
    {
        "name": "Jaelon Darden",
        "value": "1.6"
    },
    {
        "name": "Collin Johnson",
        "value": "1.6"
    },
    {
        "name": "Tyler Scott",
        "value": "1.5"
    },
    {
        "name": "Robbie Chosen",
        "value": "1.5"
    },
    {
        "name": "Kameron Johnson",
        "value": "1.1"
    },
    {
        "name": "Velus Jones Jr.",
        "value": "0.9"
    },
    {
        "name": "Brycen Tremayne",
        "value": "0.8"
    },
    {
        "name": "Quintez Cephus",
        "value": "0"
    },
    {
        "name": "Emeka Egbuka",
        "value": "0"
    },
    {
        "name": "Chris Tyree",
        "value": "0"
    },
    {
        "name": "Daniel Jackson",
        "value": "0"
    },
    {
        "name": "Cornelius Johnson",
        "value": "0"
    },
    {
        "name": "AJ Henning",
        "value": "0"
    },
    {
        "name": "Tom Kennedy",
        "value": "0.0"
    },
    {
        "name": "D.J. Montgomery",
        "value": "0"
    },
    {
        "name": "Jalen Guyton",
        "value": "0.0"
    },
    {
        "name": "Deonte Harty",
        "value": "0.0"
    },
    {
        "name": "Mario Williams",
        "value": "0"
    },
    {
        "name": "Ja'Corey Brooks",
        "value": "0"
    },
    {
        "name": "KJ Hamler",
        "value": "0.0"
    },
    {
        "name": "Donovan Peoples-Jones",
        "value": "0"
    },
    {
        "name": "Traeshon Holden",
        "value": "0"
    },
    {
        "name": "Malik Cunningham",
        "value": "0"
    },
    {
        "name": "Gunner Olszewski",
        "value": "0"
    },
    {
        "name": "Arian Smith",
        "value": "0"
    },
    {
        "name": "Beaux Collins",
        "value": "0"
    },
    {
        "name": "Tarik Black",
        "value": "0"
    },
    {
        "name": "Scotty Washington",
        "value": "0"
    },
    {
        "name": "Rondale Moore",
        "value": "0"
    },
    {
        "name": "Justyn Ross",
        "value": "0.0"
    },
    {
        "name": "Seth Williams",
        "value": "0.0"
    },
    {
        "name": "Dez Fitzpatrick",
        "value": "0.0"
    },
    {
        "name": "Andre Baccellia",
        "value": "0"
    },
    {
        "name": "Quez Watkins",
        "value": "0"
    },
    {
        "name": "Lawrence Cager",
        "value": "0"
    },
    {
        "name": "Trishton Jackson",
        "value": "0"
    },
    {
        "name": "JaQuae Jackson",
        "value": "0"
    },
    {
        "name": "Julian Hicks",
        "value": "0"
    },
    {
        "name": "Terique Owens",
        "value": "0"
    },
    {
        "name": "Drake Stoops",
        "value": "0"
    },
    {
        "name": "Xavier Johnson",
        "value": "0"
    },
    {
        "name": "Jeshaun Jones",
        "value": "0"
    },
    {
        "name": "Jaylen Johnson",
        "value": "0.0"
    },
    {
        "name": "John Jackson III",
        "value": "0"
    },
    {
        "name": "John Jiles",
        "value": "0"
    },
    {
        "name": "Luther Burden III",
        "value": "0"
    },
    {
        "name": "Elic Ayomanor",
        "value": "0"
    },
    {
        "name": "Xavier Restrepo",
        "value": "0"
    },
    {
        "name": "Kobe Hudson",
        "value": "0"
    },
    {
        "name": "Cole Burgess",
        "value": "0"
    },
    {
        "name": "Qadir Ismail",
        "value": "0"
    },
    {
        "name": "Jayden Higgins",
        "value": "0"
    },
    {
        "name": "Travis Hunter",
        "value": "0"
    },
    {
        "name": "Dominic Lovett",
        "value": "0"
    },
    {
        "name": "Dorian Singer",
        "value": "0"
    },
    {
        "name": "Matthew Golden",
        "value": "0"
    },
    {
        "name": "Isaiah Neyor",
        "value": "0"
    },
    {
        "name": "Tory Horton",
        "value": "0"
    },
    {
        "name": "Tejhaun Palmer",
        "value": "0"
    },
    {
        "name": "Joshua Cephus",
        "value": "0.0"
    },
    {
        "name": "John Rhys Plumlee",
        "value": "0"
    },
    {
        "name": "Tahj Washington",
        "value": "0"
    },
    {
        "name": "Andrew Armstrong",
        "value": "0"
    },
    {
        "name": "Ajou Ajou",
        "value": "0"
    },
    {
        "name": "Dayton Wade",
        "value": "0"
    },
    {
        "name": "Chase Cota",
        "value": "0"
    },
    {
        "name": "Elijhah Badger",
        "value": "0"
    },
    {
        "name": "Roman Wilson",
        "value": "0.0"
    },
    {
        "name": "Brenden Rice",
        "value": "0.0"
    },
    {
        "name": "Tre' Harris",
        "value": "0"
    },
    {
        "name": "Jalen Royals",
        "value": "0"
    },
    {
        "name": "Da'Quan Felton",
        "value": "0"
    },
    {
        "name": "Nate McCollum",
        "value": "0"
    },
    {
        "name": "Tyler Kahmann",
        "value": "0"
    },
    {
        "name": "Blayne Taylor",
        "value": "0"
    },
    {
        "name": "Silas Bolden",
        "value": "0"
    },
    {
        "name": "Quincy Skinner Jr.",
        "value": "0"
    },
    {
        "name": "Dalen Cambre",
        "value": "0"
    },
    {
        "name": "Jordan Bly",
        "value": "0"
    },
    {
        "name": "Chandler Brayboy",
        "value": "0"
    },
    {
        "name": "Landon Parker",
        "value": "0"
    },
    {
        "name": "Eli Pancol",
        "value": "0"
    },
    {
        "name": "Cam Camper",
        "value": "0"
    },
    {
        "name": "Quentin Skinner",
        "value": "0"
    },
    {
        "name": "Jackson Meeks",
        "value": "0"
    },
    {
        "name": "Jakobie Keeney-James",
        "value": "0"
    },
    {
        "name": "Dontae Fleming",
        "value": "0"
    },
    {
        "name": "Robert Lewis",
        "value": "0"
    },
    {
        "name": "Coleman Owen",
        "value": "0"
    },
    {
        "name": "Jaylen Jones",
        "value": "0"
    },
    {
        "name": "Hal Presley",
        "value": "0"
    },
    {
        "name": "Tommy Mellott",
        "value": "0"
    },
    {
        "name": "Junior Bergen",
        "value": "0"
    },
    {
        "name": "JP Richardson",
        "value": "0"
    },
    {
        "name": "Rashod Owens",
        "value": "0"
    },
    {
        "name": "Jordan Moore",
        "value": "0"
    },
    {
        "name": "Mac Dalena",
        "value": "0"
    },
    {
        "name": "Jamoi Mayes",
        "value": "0"
    },
    {
        "name": "Stephen Gosnell",
        "value": "0"
    },
    {
        "name": "Joaquin Davis",
        "value": "0"
    },
    {
        "name": "Jerjuan Newton",
        "value": "0"
    },
    {
        "name": "Courtney Jackson",
        "value": "0"
    },
    {
        "name": "Bryson Green",
        "value": "0"
    },
    {
        "name": "Luke Grimm",
        "value": "0"
    },
    {
        "name": "Ke'Shawn Williams",
        "value": "0"
    },
    {
        "name": "Tru Edwards",
        "value": "0"
    },
    {
        "name": "Jordan Watkins",
        "value": "0"
    },
    {
        "name": "Cade McDonald",
        "value": "0"
    },
    {
        "name": "TJ Sheffield",
        "value": "0"
    },
    {
        "name": "Ketron Jackson Jr.",
        "value": "0"
    },
    {
        "name": "Key'Shawn Smith",
        "value": "0"
    },
    {
        "name": "Dalevon Campbell",
        "value": "0"
    },
    {
        "name": "Kyrese Rowan",
        "value": "0"
    },
    {
        "name": "Ja'seem Reed",
        "value": "0"
    },
    {
        "name": "Mitch Van Vooren",
        "value": "0"
    },
    {
        "name": "Ife Adeyi",
        "value": "0"
    },
    {
        "name": "Luke Floriea",
        "value": "0"
    },
    {
        "name": "Jimmy Holiday",
        "value": "0"
    },
    {
        "name": "Brennan Presley",
        "value": "0"
    },
    {
        "name": "Jahdae Walker",
        "value": "0"
    },
    {
        "name": "Jahmal Banks",
        "value": "0"
    },
    {
        "name": "Xavier Guillory",
        "value": "0"
    },
    {
        "name": "Moochie Dixon",
        "value": "0"
    },
    {
        "name": "Tyrone Broden",
        "value": "0"
    },
    {
        "name": "Darius Lassiter",
        "value": "0"
    },
    {
        "name": "Myles Price",
        "value": "0"
    },
    {
        "name": "Gage Larvadain",
        "value": "0"
    },
    {
        "name": "Kisean Johnson",
        "value": "0"
    },
    {
        "name": "Jeremiah Webb",
        "value": "0"
    },
    {
        "name": "Dymere Miller",
        "value": "0"
    },
    {
        "name": "Taylor Morin",
        "value": "0"
    },
    {
        "name": "Darius Cooper",
        "value": "0"
    },
    {
        "name": "Giles Jackson",
        "value": "0"
    },
    {
        "name": "Kyle Williams",
        "value": "0"
    },
    {
        "name": "Josh Kelly",
        "value": "0"
    },
    {
        "name": "TJ Moore",
        "value": "0"
    },
    {
        "name": "Antwane Wells Jr.",
        "value": "0"
    },
    {
        "name": "Jaylin Noel",
        "value": "0"
    },
    {
        "name": "Savion Williams",
        "value": "0"
    },
    {
        "name": "Tez Johnson",
        "value": "0"
    },
    {
        "name": "Tai Felton",
        "value": "0"
    },
    {
        "name": "Ricky White III",
        "value": "0"
    },
    {
        "name": "Pat Bryant",
        "value": "0"
    },
    {
        "name": "Theo Wease Jr.",
        "value": "0"
    },
    {
        "name": "Jack Bech",
        "value": "0"
    },
    {
        "name": "Will Sheppard",
        "value": "0"
    },
    {
        "name": "Nick Nash",
        "value": "0"
    },
    {
        "name": "Dont'e Thornton Jr.",
        "value": "0"
    },
    {
        "name": "Jimmy Horn Jr.",
        "value": "0"
    },
    {
        "name": "Chimere Dike",
        "value": "0"
    },
    {
        "name": "Jamaal Pritchett",
        "value": "0"
    },
    {
        "name": "LaJohntay Wester",
        "value": "0"
    },
    {
        "name": "Traeshin Holden",
        "value": "0"
    },
    {
        "name": "Konata Mumpfield",
        "value": "0"
    },
    {
        "name": "Sam Brown Jr.",
        "value": "0"
    },
    {
        "name": "Jacolby George",
        "value": "0"
    },
    {
        "name": "Jacksin Meeks",
        "value": "0"
    },
    {
        "name": "Jaylin Lane",
        "value": "0"
    },
    {
        "name": "Efton Chism III",
        "value": "0"
    },
    {
        "name": "Roc Taylor",
        "value": "0"
    },
    {
        "name": "Monaray Baldwin",
        "value": "0"
    },
    {
        "name": "Garrett Greene",
        "value": "0"
    },
    {
        "name": "Isaac TeSlaa",
        "value": "0"
    },
    {
        "name": "Braylon Sanders",
        "value": "0"
    },
    {
        "name": "Johnny Johnson III",
        "value": "0"
    },
    {
        "name": "Jacoby Jones",
        "value": "0"
    },
    {
        "name": "A.T. Perry",
        "value": "0"
    },
    {
        "name": "Jalen Virgil",
        "value": "0.0"
    },
    {
        "name": "Montrell Washington",
        "value": "0.0"
    },
    {
        "name": "Dareke Young",
        "value": "0.0"
    },
    {
        "name": "Mitchell Tinsley",
        "value": "0"
    },
    {
        "name": "KeAndre Lambert-Smith",
        "value": "0"
    },
    {
        "name": "Brandon Smith",
        "value": "0.0"
    },
    {
        "name": "Michael Strachan",
        "value": "0"
    },
    {
        "name": "Kawaan Baker",
        "value": "0"
    },
    {
        "name": "Avery Williams",
        "value": "0.0"
    },
    {
        "name": "Jacob Harris",
        "value": "0"
    },
    {
        "name": "Skyy Moore",
        "value": "0.0"
    },
    {
        "name": "Samori Toure",
        "value": "0"
    },
    {
        "name": "Xavier Weaver",
        "value": "0.0"
    },
    {
        "name": "Justin Shorter",
        "value": "0.0"
    },
    {
        "name": "Michael Bandy",
        "value": "0"
    },
    {
        "name": "Erik Ezukanma",
        "value": "0.0"
    },
    {
        "name": "Lucky Jackson",
        "value": "0"
    },
    {
        "name": "Kazmeir Allen",
        "value": "0.0"
    },
    {
        "name": "Ontaria Wilson",
        "value": "0"
    },
    {
        "name": "Elijah Cooks",
        "value": "0.0"
    },
    {
        "name": "Thayer Thomas",
        "value": "0"
    },
    {
        "name": "Jared Wayne",
        "value": "0.0"
    },
    {
        "name": "Kaden Prather",
        "value": "0"
    },
    {
        "name": "Tetairoa McMillan",
        "value": "0"
    },
    {
        "name": "Matt Landers",
        "value": "0"
    },
    {
        "name": "Dylan Drummond",
        "value": "0"
    },
    {
        "name": "John Stephens Jr.",
        "value": "0"
    },
    {
        "name": "Shedrick Jackson",
        "value": "0"
    },
    {
        "name": "Zavier Scott",
        "value": "0"
    },
    {
        "name": "Jason Brownlee",
        "value": "0"
    },
    {
        "name": "T.J. Luther",
        "value": "0"
    },
    {
        "name": "Jalen Cropper",
        "value": "0.0"
    },
    {
        "name": "Dennis Houston",
        "value": "0"
    },
    {
        "name": "Kaden Davis",
        "value": "0.0"
    },
    {
        "name": "Tyreik McAllister",
        "value": "0.0"
    },
    {
        "name": "Lance McCutcheon",
        "value": "0"
    },
    {
        "name": "Irvin Charles",
        "value": "0.0"
    },
    {
        "name": "Jesse Matthews",
        "value": "0"
    },
    {
        "name": "Maurice Alexander",
        "value": "0.0"
    },
    {
        "name": "Bryce Ford-Wheaton",
        "value": "0.0"
    },
    {
        "name": "Jordan Matthews",
        "value": "0.0"
    },
    {
        "name": "Patrick Edwards",
        "value": "0"
    },
    {
        "name": "Malik Taylor",
        "value": "0"
    },
    {
        "name": "Kenny McKinley",
        "value": "0"
    },
    {
        "name": "Nate Hughes",
        "value": "0"
    },
    {
        "name": "Mike Furrey",
        "value": "0"
    },
    {
        "name": "Marko Mitchell",
        "value": "0"
    },
    {
        "name": "Maurice Purify",
        "value": "0"
    },
    {
        "name": "Chris Henry",
        "value": "0"
    },
    {
        "name": "Bobby Wade",
        "value": "0"
    },
    {
        "name": "Demario Ballard",
        "value": "0"
    },
    {
        "name": "Rod Harper",
        "value": "0"
    },
    {
        "name": "Sam Giguere",
        "value": "0"
    },
    {
        "name": "Michael Gallup",
        "value": "0"
    },
    {
        "name": "Deon Cain",
        "value": "0"
    },
    {
        "name": "Russell Gage Jr.",
        "value": "0"
    },
    {
        "name": "Braxton Berrios",
        "value": "0.0"
    },
    {
        "name": "Equanimeous St. Brown",
        "value": "0.0"
    },
    {
        "name": "Jamal Agnew",
        "value": "0"
    },
    {
        "name": "Zach Pascal",
        "value": "0.0"
    },
    {
        "name": "Justin Hardee Sr.",
        "value": "0.0"
    },
    {
        "name": "Cody Thompson",
        "value": "0.0"
    },
    {
        "name": "Hunter Renfrow",
        "value": "0"
    },
    {
        "name": "David Sills",
        "value": "0"
    },
    {
        "name": "Miles Boykin",
        "value": "0"
    },
    {
        "name": "Quinton Bell",
        "value": "0.0"
    },
    {
        "name": "Keith Kirkwood",
        "value": "0"
    },
    {
        "name": "Phillip Dorsett II",
        "value": "0"
    },
    {
        "name": "Alex Erickson",
        "value": "0.0"
    },
    {
        "name": "Chris Moore",
        "value": "0"
    },
    {
        "name": "Laquon Treadwell",
        "value": "0.0"
    },
    {
        "name": "Jaden Smith",
        "value": "0"
    },
    {
        "name": "Jermaine Jackson",
        "value": "-0.1"
    },
    {
        "name": "Steven Sims Jr.",
        "value": "-2.0"
    },
    {
        "name": "Kadarius Toney",
        "value": "-2.4"
    },
    {
        "name": "Jha'Quan Jackson",
        "value": "-2.7"
    },
    {
        "name": "Dee Williams",
        "value": "-6.0"
    }
];
const lastYearTE = [
    {
        "name": "Brock Bowers",
        "value": "262.7"
    },
    {
        "name": "Trey McBride",
        "value": "249.8"
    },
    {
        "name": "George Kittle",
        "value": "236.6"
    },
    {
        "name": "Jonnu Smith",
        "value": "222.3"
    },
    {
        "name": "Travis Kelce",
        "value": "195.4"
    },
    {
        "name": "Mark Andrews",
        "value": "188.8"
    },
    {
        "name": "Zach Ertz",
        "value": "177.4"
    },
    {
        "name": "Sam LaPorta",
        "value": "174.6"
    },
    {
        "name": "Pat Freiermuth",
        "value": "168.3"
    },
    {
        "name": "Tucker Kraft",
        "value": "163.3"
    },
    {
        "name": "David Njoku",
        "value": "148.5"
    },
    {
        "name": "Hunter Henry",
        "value": "145.4"
    },
    {
        "name": "Mike Gesicki",
        "value": "141.5"
    },
    {
        "name": "Cade Otton",
        "value": "140.6"
    },
    {
        "name": "Kyle Pitts Sr.",
        "value": "131.2"
    },
    {
        "name": "Isaiah Likely",
        "value": "123.7"
    },
    {
        "name": "Juwan Johnson",
        "value": "122.8"
    },
    {
        "name": "Tyler Conklin",
        "value": "121.9"
    },
    {
        "name": "Cole Kmet",
        "value": "120.4"
    },
    {
        "name": "Dalton Schultz",
        "value": "118.2"
    },
    {
        "name": "Chig Okonkwo",
        "value": "113.6"
    },
    {
        "name": "Noah Gray",
        "value": "113.3"
    },
    {
        "name": "Will Dissly",
        "value": "110.1"
    },
    {
        "name": "Austin Hooper",
        "value": "108.6"
    },
    {
        "name": "Jake Ferguson",
        "value": "104.4"
    },
    {
        "name": "Noah Fant",
        "value": "104.0"
    },
    {
        "name": "Dallas Goedert",
        "value": "103.6"
    },
    {
        "name": "Taysom Hill",
        "value": "103.3"
    },
    {
        "name": "Foster Moreau",
        "value": "103.3"
    },
    {
        "name": "Dalton Kincaid",
        "value": "100.8"
    },
    {
        "name": "Brenton Strange",
        "value": "91.1"
    },
    {
        "name": "Jordan Akins",
        "value": "91.0"
    },
    {
        "name": "Evan Engram",
        "value": "89.5"
    },
    {
        "name": "T.J. Hockenson",
        "value": "86.5"
    },
    {
        "name": "AJ Barner",
        "value": "78.5"
    },
    {
        "name": "Ja'Tavion Sanders",
        "value": "73.2"
    },
    {
        "name": "Theo Johnson",
        "value": "68.1"
    },
    {
        "name": "Josh Oliver",
        "value": "65.8"
    },
    {
        "name": "Colby Parkinson",
        "value": "65.4"
    },
    {
        "name": "Josh Whyle",
        "value": "60.8"
    },
    {
        "name": "Grant Calcaterra",
        "value": "59.8"
    },
    {
        "name": "Dawson Knox",
        "value": "59.1"
    },
    {
        "name": "Luke Schoonmaker",
        "value": "57.1"
    },
    {
        "name": "Tommy Tremble",
        "value": "56.4"
    },
    {
        "name": "Elijah Higgins",
        "value": "49.2"
    },
    {
        "name": "Nick Vannett",
        "value": "48.5"
    },
    {
        "name": "Johnny Mundt",
        "value": "45.2"
    },
    {
        "name": "Darnell Washington",
        "value": "45.0"
    },
    {
        "name": "Adam Trautman",
        "value": "43.8"
    },
    {
        "name": "Nate Adkins",
        "value": "43.5"
    },
    {
        "name": "Tanner Hudson",
        "value": "38.5"
    },
    {
        "name": "Michael Mayer",
        "value": "36.6"
    },
    {
        "name": "Drew Sample",
        "value": "36.5"
    },
    {
        "name": "Erick All Jr.",
        "value": "35.8"
    },
    {
        "name": "Brock Wright",
        "value": "35.0"
    },
    {
        "name": "Stone Smartt",
        "value": "34.8"
    },
    {
        "name": "Payne Durham",
        "value": "34.5"
    },
    {
        "name": "Cade Stover",
        "value": "34.3"
    },
    {
        "name": "Lucas Krull",
        "value": "34.2"
    },
    {
        "name": "Mo Alie-Cox",
        "value": "32.7"
    },
    {
        "name": "Kylen Granson",
        "value": "32.2"
    },
    {
        "name": "Jeremy Ruckert",
        "value": "28.5"
    },
    {
        "name": "Charlie Kolar",
        "value": "28.3"
    },
    {
        "name": "Eric Saubert",
        "value": "26.7"
    },
    {
        "name": "Tyler Higbee",
        "value": "26.6"
    },
    {
        "name": "Daniel Bellinger",
        "value": "26.5"
    },
    {
        "name": "Drew Ogletree",
        "value": "25.9"
    },
    {
        "name": "Julian Hill",
        "value": "22.0"
    },
    {
        "name": "Luke Farrell",
        "value": "18.7"
    },
    {
        "name": "Brevyn Spann-Ford",
        "value": "17.8"
    },
    {
        "name": "Harrison Bryant",
        "value": "17.6"
    },
    {
        "name": "Blake Whiteheart",
        "value": "17.1"
    },
    {
        "name": "Connor Heyward",
        "value": "16.0"
    },
    {
        "name": "MyCole Pruitt",
        "value": "16.0"
    },
    {
        "name": "Kenny Yeboah",
        "value": "15.7"
    },
    {
        "name": "Hayden Hurst",
        "value": "15.3"
    },
    {
        "name": "Quintin Morris",
        "value": "14.6"
    },
    {
        "name": "John Bates",
        "value": "14.4"
    },
    {
        "name": "Durham Smythe",
        "value": "14.3"
    },
    {
        "name": "Ben Sinnott",
        "value": "13.8"
    },
    {
        "name": "Devin Culp",
        "value": "13.8"
    },
    {
        "name": "Hunter Long",
        "value": "13.0"
    },
    {
        "name": "Pharaoh Brown",
        "value": "12.5"
    },
    {
        "name": "Chris Manhertz",
        "value": "12.0"
    },
    {
        "name": "Gerald Everett",
        "value": "11.6"
    },
    {
        "name": "Charlie Woerner",
        "value": "11.6"
    },
    {
        "name": "Luke Musgrave",
        "value": "11.5"
    },
    {
        "name": "Tucker Fisk",
        "value": "10.9"
    },
    {
        "name": "Peyton Hendershot",
        "value": "10.1"
    },
    {
        "name": "Davis Allen",
        "value": "9.9"
    },
    {
        "name": "Tip Reiman",
        "value": "9.7"
    },
    {
        "name": "Ben Sims",
        "value": "8.2"
    },
    {
        "name": "Cam Grandy",
        "value": "7.8"
    },
    {
        "name": "Greg Dulcich",
        "value": "7.8"
    },
    {
        "name": "E.J. Jenkins",
        "value": "7.7"
    },
    {
        "name": "Will Mallory",
        "value": "6.9"
    },
    {
        "name": "Dallin Holker",
        "value": "5.1"
    },
    {
        "name": "Tanner Conner",
        "value": "4.6"
    },
    {
        "name": "Josiah Deguara",
        "value": "4.4"
    },
    {
        "name": "Jaheim Bell",
        "value": "4.0"
    },
    {
        "name": "Ian Thomas",
        "value": "3.7"
    },
    {
        "name": "Shane Zylstra",
        "value": "3.2"
    },
    {
        "name": "Jack Stoll",
        "value": "3.0"
    },
    {
        "name": "Eric Tomlinson",
        "value": "2.9"
    },
    {
        "name": "Brevin Jordan",
        "value": "2.7"
    },
    {
        "name": "Geoff Swaim",
        "value": "1.7"
    },
    {
        "name": "Jared Wiley",
        "value": "1.7"
    },
    {
        "name": "John Samuel Shenker",
        "value": "1.7"
    },
    {
        "name": "David Martin-Robinson",
        "value": "1.6"
    },
    {
        "name": "Zach Davidson",
        "value": "1.5"
    },
    {
        "name": "Ross Dwelley",
        "value": "1.5"
    },
    {
        "name": "Jody Fortson Jr.",
        "value": "1.5"
    },
    {
        "name": "John FitzPatrick",
        "value": "1.2"
    },
    {
        "name": "Marcedes Lewis",
        "value": "1.2"
    },
    {
        "name": "Matt Sokol",
        "value": "0"
    },
    {
        "name": "Matt Orzech",
        "value": "0.0"
    },
    {
        "name": "Dominique Dafney",
        "value": "0"
    },
    {
        "name": "Mitchell Fraboni",
        "value": "0.0"
    },
    {
        "name": "Dalton Keene",
        "value": "0"
    },
    {
        "name": "Feleipe Franks",
        "value": "0.0"
    },
    {
        "name": "Stephen Sullivan",
        "value": "0.0"
    },
    {
        "name": "Lawrence Cager",
        "value": "0"
    },
    {
        "name": "Tyler Mabry",
        "value": "0"
    },
    {
        "name": "Sean McKeon",
        "value": "0"
    },
    {
        "name": "Giovanni Ricci",
        "value": "0"
    },
    {
        "name": "Scotty Washington",
        "value": "0"
    },
    {
        "name": "Mitchell Wilcox",
        "value": "0"
    },
    {
        "name": "Chris Myarick",
        "value": "0"
    },
    {
        "name": "Parker Hesse",
        "value": "0.0"
    },
    {
        "name": "Tanner McLachlan",
        "value": "0.0"
    },
    {
        "name": "Tyler Warren",
        "value": "0"
    },
    {
        "name": "Jack Westover",
        "value": "0.0"
    },
    {
        "name": "Neal Johnson",
        "value": "0"
    },
    {
        "name": "Thomas Yassmin",
        "value": "0"
    },
    {
        "name": "Mason Pline",
        "value": "0"
    },
    {
        "name": "Brenden Bates",
        "value": "0.0"
    },
    {
        "name": "Treyton Welch",
        "value": "0"
    },
    {
        "name": "Steven Stilianos",
        "value": "0"
    },
    {
        "name": "Colson Yankoff",
        "value": "0.0"
    },
    {
        "name": "Messiah Swinson",
        "value": "0"
    },
    {
        "name": "Shawn Bowman",
        "value": "0"
    },
    {
        "name": "Brady Russell",
        "value": "0.0"
    },
    {
        "name": "Johnny Lumpkin",
        "value": "0"
    },
    {
        "name": "Joel Wilson",
        "value": "0"
    },
    {
        "name": "Travis Vokolek",
        "value": "0.0"
    },
    {
        "name": "Colston Loveland",
        "value": "0"
    },
    {
        "name": "Bryson Nesbit",
        "value": "0"
    },
    {
        "name": "Mason Taylor",
        "value": "0"
    },
    {
        "name": "Caden Prieskorn",
        "value": "0"
    },
    {
        "name": "Gavin Bartholomew",
        "value": "0"
    },
    {
        "name": "Oronde Gadsden II",
        "value": "0"
    },
    {
        "name": "Tanner Taula",
        "value": "0"
    },
    {
        "name": "John Stephens Jr.",
        "value": "0"
    },
    {
        "name": "Princeton Fant",
        "value": "0.0"
    },
    {
        "name": "Jordan Murray",
        "value": "0"
    },
    {
        "name": "JJ Galbreath",
        "value": "0"
    },
    {
        "name": "DJ Thomas-Jones",
        "value": "0"
    },
    {
        "name": "Bryce Pierre",
        "value": "0"
    },
    {
        "name": "John Copenhaver",
        "value": "0"
    },
    {
        "name": "Patrick Herbert",
        "value": "0"
    },
    {
        "name": "Tyler Neville",
        "value": "0"
    },
    {
        "name": "Stevo Klotz",
        "value": "0"
    },
    {
        "name": "Anthony Torres",
        "value": "0"
    },
    {
        "name": "Oscar Cardenas",
        "value": "0"
    },
    {
        "name": "Caleb Lohner",
        "value": "0"
    },
    {
        "name": "Marshall Lang",
        "value": "0"
    },
    {
        "name": "Robbie Ouzts",
        "value": "0"
    },
    {
        "name": "Mitch Van Vooren",
        "value": "0"
    },
    {
        "name": "Drake Dabney",
        "value": "0"
    },
    {
        "name": "Maximilian Mang",
        "value": "0"
    },
    {
        "name": "Nick Kallerup",
        "value": "0"
    },
    {
        "name": "Jermaine Terry II",
        "value": "0"
    },
    {
        "name": "Ben Yurosek",
        "value": "0"
    },
    {
        "name": "Tre Watson",
        "value": "0"
    },
    {
        "name": "Zach Horton",
        "value": "0"
    },
    {
        "name": "Carter Runyon",
        "value": "0"
    },
    {
        "name": "Geor'Quarius Spivey",
        "value": "0"
    },
    {
        "name": "Keleki Latu",
        "value": "0"
    },
    {
        "name": "CJ Dippre",
        "value": "0"
    },
    {
        "name": "Mitchell Evans",
        "value": "0"
    },
    {
        "name": "Gunnar Helm",
        "value": "0"
    },
    {
        "name": "Harold Fannin Jr.",
        "value": "0"
    },
    {
        "name": "Hayden Rucci",
        "value": "0"
    },
    {
        "name": "Qadir Ismail",
        "value": "0"
    },
    {
        "name": "Jackson Hawes",
        "value": "0"
    },
    {
        "name": "Gee Scott Jr.",
        "value": "0"
    },
    {
        "name": "Rivaldo Fairweather",
        "value": "0"
    },
    {
        "name": "Joshua Simon",
        "value": "0"
    },
    {
        "name": "Brayden Willis",
        "value": "0.0"
    },
    {
        "name": "Sal Cannella",
        "value": "0"
    },
    {
        "name": "Jelani Woods",
        "value": "0"
    },
    {
        "name": "Cole Turner",
        "value": "0"
    },
    {
        "name": "Michael Jacobson",
        "value": "0"
    },
    {
        "name": "Thomas Fidone II",
        "value": "0"
    },
    {
        "name": "Elijah Arroyo",
        "value": "0"
    },
    {
        "name": "Luke Lachey",
        "value": "0"
    },
    {
        "name": "Jake Briningstool",
        "value": "0"
    },
    {
        "name": "Jalin Conyers",
        "value": "0"
    },
    {
        "name": "Jacob Harris",
        "value": "0"
    },
    {
        "name": "Mark Redman",
        "value": "0"
    },
    {
        "name": "James Mitchell",
        "value": "0"
    },
    {
        "name": "Terrance Ferguson",
        "value": "0"
    },
    {
        "name": "Baylor Cupp",
        "value": "0.0"
    },
    {
        "name": "Moliki Matavao",
        "value": "0"
    },
    {
        "name": "Justin Shorter",
        "value": "0.0"
    },
    {
        "name": "Cole Fotheringham",
        "value": "0"
    },
    {
        "name": "Zaire Mitchell-Paden",
        "value": "0"
    },
    {
        "name": "Rodney Williams",
        "value": "0.0"
    },
    {
        "name": "Jake Tonges",
        "value": "0.0"
    },
    {
        "name": "Zack Kuntz",
        "value": "0.0"
    },
    {
        "name": "Thomas Odukoya",
        "value": "0.0"
    },
    {
        "name": "Cameron Latu",
        "value": "0"
    },
    {
        "name": "Nick Muse",
        "value": "0.0"
    },
    {
        "name": "Teagan Quitoriano",
        "value": "0.0"
    },
    {
        "name": "Nikola Kalinic",
        "value": "0"
    },
    {
        "name": "Leroy Watson IV",
        "value": "0.0"
    },
    {
        "name": "Ko Kieft",
        "value": "0.0"
    },
    {
        "name": "Donald Parham Jr.",
        "value": "0"
    },
    {
        "name": "Drake Dunsmore",
        "value": "0"
    },
    {
        "name": "Dominique Curry",
        "value": "0"
    },
    {
        "name": "Jordan Matthews",
        "value": "0.0"
    },
    {
        "name": "Derek Fine",
        "value": "0"
    },
    {
        "name": "J.P. Foschi",
        "value": "0"
    },
    {
        "name": "Joey Haynos",
        "value": "0"
    },
    {
        "name": "Darnell Dinkins",
        "value": "0"
    },
    {
        "name": "Brad Cottam",
        "value": "0"
    },
    {
        "name": "Marquez Branson",
        "value": "0"
    },
    {
        "name": "James Dearth",
        "value": "0"
    },
    {
        "name": "Keith Zinger",
        "value": "0"
    },
    {
        "name": "Justin Snow",
        "value": "0"
    },
    {
        "name": "Anthony Firkser",
        "value": "0.0"
    },
    {
        "name": "Robert Tonyan",
        "value": "0"
    },
    {
        "name": "Albert Okwuegbunam Jr.",
        "value": "0"
    },
    {
        "name": "Stephen Carlson",
        "value": "0"
    },
    {
        "name": "Andrew Beck",
        "value": "0.0"
    },
    {
        "name": "Irv Smith Jr.",
        "value": "0.0"
    },
    {
        "name": "Tyree Jackson",
        "value": "0"
    },
    {
        "name": "Darren Waller",
        "value": "0"
    },
    {
        "name": "C.J. Uzomah",
        "value": "0.0"
    },
    {
        "name": "Zach Wood",
        "value": "0.0"
    },
    {
        "name": "Andrew DePaola",
        "value": "0.0"
    },
    {
        "name": "Patrick Scales",
        "value": "0.0"
    },
    {
        "name": "Tyler Ott",
        "value": "0"
    },
    {
        "name": "James Winchester",
        "value": "0.0"
    },
    {
        "name": "Thomas Gordon",
        "value": "0"
    }
];
const lastYearKickers = [
    {
        "name": "Brandon Aubrey",
        "value": "192.0"
    },
    {
        "name": "Chris Boswell",
        "value": "191.0"
    },
    {
        "name": "Cameron Dicker",
        "value": "179.0"
    },
    {
        "name": "Ka'imi Fairbairn",
        "value": "172.0"
    },
    {
        "name": "Jason Sanders",
        "value": "166.0"
    },
    {
        "name": "Chase McLaughlin",
        "value": "164.0"
    },
    {
        "name": "Jake Bates",
        "value": "161.0"
    },
    {
        "name": "Wil Lutz",
        "value": "160.0"
    },
    {
        "name": "Tyler Bass",
        "value": "146.0"
    },
    {
        "name": "Daniel Carlson",
        "value": "145.0"
    },
    {
        "name": "Justin Tucker",
        "value": "143.0"
    },
    {
        "name": "Jake Elliott",
        "value": "141.0"
    },
    {
        "name": "Jason Myers",
        "value": "140.0"
    },
    {
        "name": "Matt Gay",
        "value": "139.0"
    },
    {
        "name": "Joshua Karty",
        "value": "135.0"
    },
    {
        "name": "Blake Grupe",
        "value": "131.0"
    },
    {
        "name": "Will Reichard",
        "value": "131.0"
    },
    {
        "name": "Cam Little",
        "value": "126.0"
    },
    {
        "name": "Chad Ryland",
        "value": "125.0"
    },
    {
        "name": "Younghoe Koo",
        "value": "120.0"
    },
    {
        "name": "Joey Slye",
        "value": "120.0"
    },
    {
        "name": "Jake Moody",
        "value": "118.0"
    },
    {
        "name": "Austin Seibert",
        "value": "115.0"
    },
    {
        "name": "Cairo Santos",
        "value": "109.0"
    },
    {
        "name": "Nick Folk",
        "value": "108.0"
    },
    {
        "name": "Eddy Pineiro",
        "value": "107.0"
    },
    {
        "name": "Harrison Butker",
        "value": "100.0"
    },
    {
        "name": "Brandon McManus",
        "value": "99.0"
    },
    {
        "name": "Evan McPherson",
        "value": "94.0"
    },
    {
        "name": "Dustin Hopkins",
        "value": "84.0"
    },
    {
        "name": "Greg Joseph",
        "value": "66.0"
    },
    {
        "name": "Anders Carlson",
        "value": "62.0"
    },
    {
        "name": "Brayden Narveson",
        "value": "59.0"
    },
    {
        "name": "Matthew Wright",
        "value": "56.0"
    },
    {
        "name": "Graham Gano",
        "value": "50.0"
    },
    {
        "name": "Cade York",
        "value": "46.0"
    },
    {
        "name": "Parker Romo",
        "value": "46.0"
    },
    {
        "name": "Greg Zuerlein",
        "value": "41.0"
    },
    {
        "name": "Zane Gonzalez",
        "value": "38.0"
    },
    {
        "name": "Matt Prater",
        "value": "33.0"
    },
    {
        "name": "Riley Patterson",
        "value": "30.0"
    },
    {
        "name": "Spencer Shrader",
        "value": "26.0"
    },
    {
        "name": "Jude McAtamney",
        "value": "4.0"
    },
    {
        "name": "Ben Sauls",
        "value": "0"
    },
    {
        "name": "Maddux Trujillo",
        "value": "0"
    },
    {
        "name": "Ryan Coe",
        "value": "0"
    },
    {
        "name": "Jonathan Kim",
        "value": "0"
    },
    {
        "name": "Tyler Loop",
        "value": "0"
    },
    {
        "name": "Caden Davis",
        "value": "0"
    },
    {
        "name": "Lenny Krieg",
        "value": "0"
    },
    {
        "name": "Andy Borregales",
        "value": "0"
    },
    {
        "name": "Ryan Fitzgerald",
        "value": "0"
    },
    {
        "name": "Charlie Smyth",
        "value": "0"
    },
    {
        "name": "Jack Browning",
        "value": "0.0"
    },
    {
        "name": "Andre Szmyt",
        "value": "0"
    },
    {
        "name": "Harrison Mevis",
        "value": "0"
    },
    {
        "name": "Zac Derr",
        "value": "0"
    },
    {
        "name": "Steven Weatherford",
        "value": "0"
    },
    {
        "name": "Ricky Schmit",
        "value": "0"
    },
    {
        "name": "Piotr Czech",
        "value": "0"
    },
    {
        "name": "Jason Reda",
        "value": "0"
    },
    {
        "name": "Garrett Rivas",
        "value": "0"
    },
    {
        "name": "Carlos Martinez",
        "value": "0"
    },
    {
        "name": "Andrew Wellock",
        "value": "0"
    },
    {
        "name": "Parker Douglass",
        "value": "0"
    },
    {
        "name": "Mark Hickok",
        "value": "0"
    },
    {
        "name": "MacKenzie Hoambrecker",
        "value": "0"
    },
    {
        "name": "Andrew Jacas",
        "value": "0"
    },
    {
        "name": "Garrett Lindholm",
        "value": "0"
    },
    {
        "name": "Kai Forbath",
        "value": "0"
    },
    {
        "name": "Connor Hughes",
        "value": "0"
    },
    {
        "name": "Saverio Rocca",
        "value": "0"
    },
    {
        "name": "Mark McNamee",
        "value": "0"
    }
];
const lastYearDefense = [
    {
        "name": "Denver Broncos",
        "value": "179.0"
    },
    {
        "name": "Minnesota Vikings",
        "value": "162.0"
    },
    {
        "name": "Green Bay Packers",
        "value": "148.0"
    },
    {
        "name": "Pittsburgh Steelers",
        "value": "146.0"
    },
    {
        "name": "Houston Texans",
        "value": "139.0"
    },
    {
        "name": "Seattle Seahawks",
        "value": "136.0"
    },
    {
        "name": "Philadelphia Eagles",
        "value": "135.0"
    },
    {
        "name": "Buffalo Bills",
        "value": "133.0"
    },
    {
        "name": "Los Angeles Chargers",
        "value": "128.0"
    },
    {
        "name": "Detroit Lions",
        "value": "123.0"
    },
    {
        "name": "Chicago Bears",
        "value": "121.0"
    },
    {
        "name": "Baltimore Ravens",
        "value": "120.0"
    },
    {
        "name": "Los Angeles Rams",
        "value": "118.0"
    },
    {
        "name": "Dallas Cowboys",
        "value": "111.0"
    },
    {
        "name": "Kansas City Chiefs",
        "value": "106.0"
    },
    {
        "name": "Tampa Bay Buccaneers",
        "value": "104.0"
    },
    {
        "name": "Cincinnati Bengals",
        "value": "104.0"
    },
    {
        "name": "Arizona Cardinals",
        "value": "101.0"
    },
    {
        "name": "New Orleans Saints",
        "value": "98.0"
    },
    {
        "name": "Atlanta Falcons",
        "value": "97.0"
    },
    {
        "name": "New York Jets",
        "value": "95.0"
    },
    {
        "name": "New York Giants",
        "value": "91.0"
    },
    {
        "name": "Indianapolis Colts",
        "value": "91.0"
    },
    {
        "name": "Washington Commanders",
        "value": "90.0"
    },
    {
        "name": "San Francisco 49ers",
        "value": "84.0"
    },
    {
        "name": "Miami Dolphins",
        "value": "84.0"
    },
    {
        "name": "Cleveland Browns",
        "value": "81.0"
    },
    {
        "name": "Tennessee Titans",
        "value": "72.0"
    },
    {
        "name": "Las Vegas Raiders",
        "value": "71.0"
    },
    {
        "name": "Jacksonville Jaguars",
        "value": "71.0"
    },
    {
        "name": "New England Patriots",
        "value": "63.0"
    },
    {
        "name": "Carolina Panthers",
        "value": "41.0"
    }
];

matches.forEach(match => {
    const [fullMatch, overallRank, position, positionRank, playerName, team, spend, byeWeek] = match;
    const playerInfo = {
        overallRank: parseInt(overallRank),
        position: position,
        positionRank: parseInt(positionRank),
        playerName: playerName.trim(),
        team: team,
        spend: parseInt(spend),
        byeWeek: parseInt(byeWeek),
        fantasyPoints: 0, // Default value, can be updated later
    }
    switch (position) {
        case 'WR':
            playerInfo.fantasyPoints = lastYearWrs.find(wr => wr.name === playerName.trim())?.value || 0;
            break;
        case 'RB':
            playerInfo.fantasyPoints = lastYearRbs.find(rb => rb.name === playerName.trim())?.value || 0;
            break;
        case 'TE':
            playerInfo.fantasyPoints = lastYearTE.find(te => te.name === playerName.trim())?.value || 0;
            break;
        case 'QB':
            playerInfo.fantasyPoints = lastYearQbs.find(qb => qb.name === playerName.trim())?.value || 0;
            break;
        case 'DST':
            playerInfo.fantasyPoints = lastYearDefense.find(def => def.name.includes(playerName.trim()))?.value || 0;
            break;
        case 'K':
            playerInfo.fantasyPoints = lastYearKickers.find(kicker => kicker.name === playerName.trim())?.value || 0;
            break;
        default:
            console.warn(`Unknown position: ${position} for player ${playerName}`);
            return; // Skip unknown positions
    }
    players.push(playerInfo);
});
export default players;