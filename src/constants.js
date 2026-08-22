import espnPlayerIds from './espnPlayerIds.js';

const data = `
1. (RB1)	Jahmyr Gibbs, DET	$57	6
2. (RB2)	Bijan Robinson, ATL	$56	11
3. (WR1)	Ja'Marr Chase, CIN	$56	6
4. (WR2)	Puka Nacua, LAR	$55	11
5. (WR3)	Jaxon Smith-Njigba, SEA	$54	11
6. (RB3)	Christian McCaffrey, SF	$53	8
7. (RB4)	Jonathan Taylor, IND	$52	13
8. (WR4)	Amon-Ra St. Brown, DET	$52	6
9. (WR5)	CeeDee Lamb, DAL	$51	14
10. (RB5)	De'Von Achane, MIA	$50	6
11. (WR6)	Justin Jefferson, MIN	$48	6
12. (RB6)	James Cook III, BUF	$46	7
13. (RB7)	Ashton Jeanty, LV	$45	13
14. (WR7)	Drake London, ATL	$43	11
15. (RB8)	Jeremiyah Love, ARI	$42	14
16. (WR8)	Rashee Rice, KC	$40	5
17. (TE1)	Trey McBride, ARI	$38	14
18. (RB9)	Saquon Barkley, PHI	$37	10
19. (RB10)	Derrick Henry, BAL	$36	13
20. (RB11)	Chase Brown, CIN	$35	6
21. (RB12)	Kenneth Walker III, KC	$34	5
22. (RB13)	Omarion Hampton, LAC	$33	7
23. (RB14)	Breece Hall, NYJ	$32	13
24. (TE2)	Brock Bowers, LV	$32	13
25. (WR9)	Nico Collins, HOU	$31	8
26. (WR10)	Chris Olave, NO	$30	8
27. (WR11)	Garrett Wilson, NYJ	$30	13
28. (WR12)	A.J. Brown, NE	$29	11
29. (WR13)	Malik Nabers, NYG	$28	8
30. (RB15)	Josh Jacobs, GB	$27	11
31. (RB16)	Javonte Williams, DAL	$26	14
32. (WR14)	George Pickens, DAL	$25	14
33. (WR15)	Tetairoa McMillan, CAR	$24	5
34. (WR16)	Zay Flowers, BAL	$23	13
35. (WR17)	DeVonta Smith, PHI	$22	10
36. (QB1)	Josh Allen, BUF	$22	7
37. (RB17)	Travis Etienne Jr., NO	$22	8
38. (RB18)	Kyren Williams, LAR	$21	11
39. (RB19)	Quinshon Judkins, CLE	$21	11
40. (RB20)	Cam Skattebo, NYG	$20	8
41. (RB21)	Bucky Irving, TB	$19	10
42. (WR18)	Emeka Egbuka, TB	$19	10
43. (WR19)	Davante Adams, LAR	$18	11
44. (WR20)	Ladd McConkey, LAC	$17	7
45. (WR21)	Terry McLaurin, WAS	$17	7
46. (WR22)	Tee Higgins, CIN	$15	6
47. (WR23)	Jaylen Waddle, DEN	$15	10
48. (WR24)	Rome Odunze, CHI	$14	10
49. (TE3)	Colston Loveland, CHI	$13	10
50. (TE4)	Tyler Warren, IND	$13	13
51. (WR25)	Jameson Williams, DET	$12	6
52. (WR26)	DJ Moore, BUF	$11	7
53. (WR27)	Luther Burden III, CHI	$11	10
54. (WR28)	Carnell Tate, TEN	$10	9
55. (QB2)	Jayden Daniels, WAS	$10	7
56. (QB3)	Lamar Jackson, BAL	$10	13
57. (QB4)	Drake Maye, NE	$10	11
58. (QB5)	Jalen Hurts, PHI	$9	10
59. (RB22)	Bhayshul Tuten, JAC	$9	7
60. (RB23)	D'Andre Swift, CHI	$9	10
61. (RB24)	David Montgomery, HOU	$8	8
62. (RB25)	Jadarian Price, SEA	$8	11
63. (RB26)	TreVeyon Henderson, NE	$8	11
64. (RB27)	Rhamondre Stevenson, NE	$7	11
65. (WR29)	Courtland Sutton, DEN	$7	10
66. (WR30)	Michael Pittman Jr., PIT	$7	9
67. (WR31)	Marvin Harrison Jr., ARI	$7	14
68. (WR32)	DK Metcalf, PIT	$6	9
69. (WR33)	Parker Washington, JAC	$6	7
70. (WR34)	Alec Pierce, IND	$6	13
71. (TE5)	Kyle Pitts Sr., ATL	$6	11
72. (TE6)	Harold Fannin Jr., CLE	$6	11
73. (TE7)	Sam LaPorta, DET	$6	6
74. (QB6)	Joe Burrow, CIN	$5	6
75. (QB7)	Jaxson Dart, NYG	$5	8
76. (WR35)	Mike Evans, SF	$5	8
77. (WR36)	Christian Watson, GB	$5	11
78. (WR37)	Matthew Golden, GB	$4	11
79. (WR38)	Michael Wilson, ARI	$4	14
80. (WR39)	Brian Thomas Jr., JAC	$4	7
81. (WR40)	Jakobi Meyers, JAC	$4	7
82. (QB8)	Trevor Lawrence, JAC	$4	7
83. (QB9)	Dak Prescott, DAL	$4	14
84. (QB10)	Bo Nix, DEN	$4	10
85. (QB11)	Brock Purdy, SF	$4	8
86. (QB12)	Matthew Stafford, LAR	$4	11
87. (QB13)	Caleb Williams, CHI	$3	10
88. (WR41)	Wan'Dale Robinson, TEN	$3	9
89. (WR42)	Jordan Addison, MIN	$3	6
90. (WR43)	Khalil Shakir, BUF	$3	7
91. (WR44)	Jayden Reed, GB	$3	11
92. (WR45)	Xavier Worthy, KC	$3	5
93. (QB14)	Justin Herbert, LAC	$3	7
94. (QB15)	Patrick Mahomes, KC	$3	5
95. (RB28)	Jaylen Warren, PIT	$3	9
96. (RB29)	Rico Dowdle, PIT	$2	9
97. (RB30)	Tony Pollard, TEN	$2	9
98. (RB31)	Kenny Gainwell, TB	$2	10
99. (RB32)	Jonathon Brooks, CAR	$2	5
100. (RB33)	Chuba Hubbard, CAR	$2	5
101. (TE8)	Tucker Kraft, GB	$2	11
102. (TE9)	George Kittle, SF	$2	8
103. (TE10)	Dallas Goedert, PHI	$2	10
104. (TE11)	Travis Kelce, KC	$2	5
105. (RB34)	J.K. Dobbins, DEN	$2	10
106. (RB35)	Kyle Monangai, CHI	$2	10
107. (RB36)	Jacory Croskey-Merritt, WAS	$2	7
108. (RB37)	Rachaad White, WAS	$2	7
109. (TE12)	Jake Ferguson, DAL	$2	14
110. (TE13)	Mark Andrews, BAL	$2	13
111. (TE14)	T.J. Hockenson, MIN	$2	6
112. (WR46)	Quentin Johnston, LAC	$2	7
113. (WR47)	Josh Downs, IND	$2	13
114. (WR48)	Deebo Samuel Sr., SF	$2	8
115. (RB38)	Aaron Jones Sr., MIN	$2	6
116. (TE15)	Isaiah Likely, NYG	$2	8
117. (TE16)	Dalton Kincaid, BUF	$2	7
118. (TE17)	Kenyon Sadiq, NYJ	$2	13
119. (TE18)	Hunter Henry, NE	$2	11
120. (RB39)	Jordan Mason, MIN	$2	6
121. (RB40)	Blake Corum, LAR	$1	11
122. (RB41)	RJ Harvey, DEN	$1	10
123. (RB42)	Woody Marks, HOU	$1	8
124. (WR49)	Stefon Diggs, WAS	$1	7
125. (WR50)	Makai Lemon, PHI	$1	10
126. (WR51)	KC Concepcion, CLE	$1	11
127. (WR52)	Chris Godwin Jr., TB	$1	10
128. (WR53)	Romeo Doubs, NE	$1	11
129. (WR54)	De'Zhaun Stribling, SF	$1	8
130. (WR55)	Tank Dell, HOU	$1	8
131. (WR56)	Jalen Coker, CAR	$1	5
132. (WR57)	Rashid Shaheed, SEA	$1	11
133. (QB16)	Kyler Murray, MIN	$1	6
134. (QB17)	Tyler Shough, NO	$1	8
135. (QB18)	Jared Goff, DET	$1	6
136. (QB19)	Daniel Jones, IND	$1	13
137. (RB43)	Zach Charbonnet, SEA	$1	11
138. (RB44)	Alvin Kamara, NO	$1	8
139. (RB45)	Tyjae Spears, TEN	$1	9
140. (RB46)	Chris Rodriguez Jr., JAC	$1	7
141. (RB47)	Brian Robinson Jr., ATL	$1	11
142. (RB48)	Tyler Allgeier, ARI	$1	14
143. (WR58)	Denzel Boston, CLE	$1	11
144. (WR59)	Jerry Jeudy, CLE	$1	11
145. (WR60)	Jalen McMillan, TB	$1	10
146. (WR61)	Calvin Ridley, TEN	$1	9
147. (WR62)	Caleb Douglas, MIA	$1	6
148. (WR63)	Adonai Mitchell, NYJ	$1	13
149. (QB20)	Baker Mayfield, TB	$1	10
150. (QB21)	Malik Willis, MIA	$1	6
151. (WR64)	Travis Hunter, JAC	$1	7
152. (WR65)	Jordyn Tyson, NO	$1	8
153. (WR66)	Tre Tucker, LV	$1	13
154. (RB49)	Keaton Mitchell, LAC	$1	7
155. (RB50)	Isiah Pacheco, DET	$1	6
156. (RB51)	Jonah Coleman, DEN	$1	10
157. (RB52)	Tank Bigsby, PHI	$1	10
158. (RB53)	Ray Davis, BUF	$1	7
159. (TE19)	Terrance Ferguson, LAR	$1	11
160. (TE20)	Juwan Johnson, NO	$1	8
161. (WR67)	Jalen Nailor, LV	$0	13
162. (WR68)	Keenan Allen, IND	$0	13
163. (WR69)	Rashod Bateman, BAL	$0	13
164. (WR70)	Dontayvion Wicks, PHI	$0	10
165. (WR71)	Jaylin Noel, HOU	$0	8
166. (RB54)	Dylan Sampson, CLE	$0	11
167. (RB55)	Mike Washington Jr., LV	$0	13
168. (RB56)	Tyrone Tracy Jr., NYG	$0	8
169. (DST1)	Texans D/ST, HOU	$0	8
170. (DST2)	Broncos D/ST, DEN	$0	10
171. (DST3)	Steelers D/ST, PIT	$0	9
172. (DST4)	Seahawks D/ST, SEA	$0	11
173. (DST5)	Rams D/ST, LAR	$0	11
174. (DST6)	Ravens D/ST, BAL	$0	13
175. (DST7)	Eagles D/ST, PHI	$0	10
176. (DST8)	Browns D/ST, CLE	$0	11
177. (DST9)	Patriots D/ST, NE	$0	11
178. (DST10)	Lions D/ST, DET	$0	6
179. (DST11)	Chiefs D/ST, KC	$0	5
180. (DST12)	Chargers D/ST, LAC	$0	7
181. (K1)	Brandon Aubrey, DAL	$0	14
182. (K2)	Cameron Dicker, LAC	$0	7
183. (K3)	Jason Myers, SEA	$0	11
184. (K4)	Harrison Mevis, LAR	$0	11
185. (K5)	Ka'imi Fairbairn, HOU	$0	8
186. (K6)	Eddy Pineiro, SF	$0	8
187. (K7)	Harrison Butker, KC	$0	5
188. (K8)	Cam Little, JAC	$0	7
189. (K9)	Jake Bates, DET	$0	6
190. (K10)	Tyler Loop, BAL	$0	13
191. (K11)	Cairo Santos, CHI	$0	10
192. (K12)	Will Reichard, MIN	$0	6
193. (RB57)	Braelon Allen, NYJ	$0	13
194. (TE21)	Brenton Strange, JAC	$0	7
195. (RB58)	Justice Hill, BAL	$0	13
196. (RB59)	MarShawn Lloyd, GB	$0	11
197. (WR72)	Ja'Kobi Lane, BAL	$0	13
198. (QB22)	Jordan Love, GB	$0	11
199. (QB23)	C.J. Stroud, HOU	$0	8
200. (QB24)	Sam Darnold, SEA	$0	11
201. (WR73)	Devaughn Vele, NO	$0	8
202. (WR74)	Germie Bernard, PIT	$0	9
203. (WR75)	Jauan Jennings, MIN	$0	6
204. (WR76)	Tre Harris, LAC	$0	7
205. (WR77)	Ryan Flournoy, DAL	$0	14
206. (TE22)	Pat Freiermuth, PIT	$0	9
207. (TE23)	Dalton Schultz, HOU	$0	8
208. (WR78)	Zachariah Branch, ATL	$0	11
209. (WR79)	Omar Cooper Jr., NYJ	$0	13
210. (WR80)	Kayshon Boutte, NE	$0	11
211. (WR81)	Malik Washington, MIA	$0	6
212. (RB60)	Jordan James, SF	$0	8
213. (RB61)	Kaelon Black, SF	$0	8
214. (RB62)	Kimani Vidal, LAC	$0	7
215. (TE24)	Gunnar Helm, TEN	$0	9
216. (TE25)	Chig Okonkwo, WAS	$0	7
217. (TE26)	AJ Barner, SEA	$0	11
218. (QB25)	Bryce Young, CAR	$0	5
219. (QB26)	Cam Ward, TEN	$0	9
220. (QB27)	Jacoby Brissett, ARI	$0	14
221. (RB63)	Jaylen Wright, MIA	$0	6
222. (RB64)	Ollie Gordon II, MIA	$0	6
223. (RB65)	Samaje Perine, CIN	$0	6
224. (WR82)	Cooper Kupp, SEA	$0	11
225. (RB66)	Ty Johnson, BUF	$0	7
226. (RB67)	Isaiah Davis, NYJ	$0	13
227. (WR83)	Xavier Legette, CAR	$0	5
228. (WR84)	Jahan Dotson, ATL	$0	11
229. (WR85)	Darius Slayton, NYG	$0	8
230. (WR86)	Jalen Tolbert, MIA	$0	6
231. (WR87)	Chris Bell, MIA	$0	6
232. (WR88)	Antonio Williams, WAS	$0	7
233. (WR89)	Tyquan Thornton, KC	$0	5
234. (WR90)	Keon Coleman, BUF	$0	7
235. (DST13)	Buccaneers D/ST, TB	$0	10
236. (DST14)	Packers D/ST, GB	$0	11
237. (K13)	Chris Boswell, PIT	$0	9
238. (K14)	Chase McLaughlin, TB	$0	10
239. (RB68)	Jaydon Blue, DAL	$0	14
240. (RB69)	Kaytron Allen, WAS	$0	7
241. (RB70)	Nicholas Singleton, TEN	$0	9
242. (RB71)	Demond Claiborne, MIN	$0	6
243. (RB72)	Adam Randall, BAL	$0	13
244. (RB73)	Emmett Johnson, KC	$0	5
245. (RB74)	LeQuint Allen, JAC	$0	7
246. (RB75)	George Holani, SEA	$0	11
247. (RB76)	Sean Tucker, TB	$0	10
248. (RB77)	James Conner, ARI	$0	14
249. (RB78)	Emari Demercado, KC	$0	5
250. (RB79)	Chris Brooks, GB	$0	11
251. (RB80)	DJ Giddens, IND	$0	13
252. (WR91)	Isaac TeSlaa, DET	$0	6
253. (WR92)	Pat Bryant, DEN	$0	10
254. (DST15)	Jaguars D/ST, JAC	$0	7
255. (DST16)	Colts D/ST, IND	$0	13
256. (K15)	Evan McPherson, CIN	$0	6
257. (K16)	Nick Folk, ATL	$0	11
258. (TE27)	Greg Dulcich, MIA	$0	6
259. (TE28)	Darren Waller, CAR	$0	5
260. (TE29)	Cade Otton, TB	$0	10
261. (WR93)	Marvin Mims Jr., DEN	$0	10
262. (WR94)	KaVontae Turpin, DAL	$0	14
263. (WR95)	Xavier Hutchinson, HOU	$0	8
264. (WR96)	Jack Bech, LV	$0	13
265. (RB81)	Emanuel Wilson, SEA	$0	11
266. (RB82)	Will Shipley, PHI	$0	10
267. (QB28)	Geno Smith, NYJ	$0	13
268. (QB29)	Fernando Mendoza, LV	$0	13
269. (QB30)	Aaron Rodgers, PIT	$0	9
270. (QB31)	Deshaun Watson, CLE	$0	11
271. (WR97)	Tory Horton, SEA	$0	11
272. (WR98)	Ted Hurst, TB	$0	10
273. (WR99)	Darnell Mooney, NYG	$0	8
274. (WR100)	DeMario Douglas, NE	$0	11
275. (WR101)	Savion Williams, GB	$0	11
276. (RB83)	Phil Mafah, DAL	$0	14
277. (RB84)	Najee Harris, NYG	$0	8
278. (RB85)	Tahj Brooks, CIN	$0	6
279. (RB86)	Trevor Etienne, CAR	$0	5
280. (RB87)	Seth McGowan, IND	$0	13
281. (RB88)	Kendre Miller, NO	$0	8
282. (RB89)	Jawhar Jordan, HOU	$0	8
283. (RB90)	Kaleb Johnson, PIT	$0	9
284. (WR102)	Malachi Fields, NYG	$0	8
285. (DST17)	Bengals D/ST, CIN	$0	6
286. (DST18)	Bears D/ST, CHI	$0	10
287. (K17)	Trey Smack, GB	$0	11
288. (K18)	Jake Elliott, PHI	$0	10
289. (TE30)	Evan Engram, DEN	$0	10
290. (TE31)	David Njoku, LAC	$0	7
291. (TE32)	Oronde Gadsden, LAC	$0	7
292. (TE33)	Mike Gesicki, CIN	$0	6
293. (TE34)	Michael Mayer, LV	$0	13
294. (WR103)	Andrei Iosivas, CIN	$0	6
295. (WR104)	Tutu Atwell, MIA	$0	6
296. (QB32)	Tua Tagovailoa, ATL	$0	11
297. (DST19)	49ers D/ST, SF	$0	8
298. (DST20)	Jets D/ST, NYJ	$0	13
299. (DST21)	Saints D/ST, NO	$0	8
300. (DST22)	Vikings D/ST, MIN	$0	6`;
const regex = /(\d+)\.\s*\(([A-Z]+)(\d+)\)\s+([^,]+),\s+([A-Z]+)\s+\$(\d+)\s+(\d+)/g;
const matches = [...data.matchAll(regex)];
const players = [];



const lastYearQbs = [
    {
        "name": "Josh Allen",
        "value": "364.6"
    },
    {
        "name": "Drake Maye",
        "value": "352.0"
    },
    {
        "name": "Matthew Stafford",
        "value": "350.4"
    },
    {
        "name": "Trevor Lawrence",
        "value": "338.2"
    },
    {
        "name": "Caleb Williams",
        "value": "318.7"
    },
    {
        "name": "Dak Prescott",
        "value": "313.8"
    },
    {
        "name": "Bo Nix",
        "value": "304.8"
    },
    {
        "name": "Jalen Hurts",
        "value": "299.1"
    },
    {
        "name": "Jared Goff",
        "value": "297.1"
    },
    {
        "name": "Justin Herbert",
        "value": "286.9"
    },
    {
        "name": "Patrick Mahomes",
        "value": "285.7"
    },
    {
        "name": "Baker Mayfield",
        "value": "271.9"
    },
    {
        "name": "Jaxson Dart",
        "value": "241.6"
    },
    {
        "name": "Sam Darnold",
        "value": "235.4"
    },
    {
        "name": "Jordan Love",
        "value": "235.1"
    },
    {
        "name": "Jacoby Brissett",
        "value": "227.4"
    },
    {
        "name": "Aaron Rodgers",
        "value": "227.1"
    },
    {
        "name": "Daniel Jones",
        "value": "226.4"
    },
    {
        "name": "Bryce Young",
        "value": "218.0"
    },
    {
        "name": "Lamar Jackson",
        "value": "214.9"
    },
    {
        "name": "C.J. Stroud",
        "value": "208.5"
    },
    {
        "name": "Cam Ward",
        "value": "186.7"
    },
    {
        "name": "Brock Purdy",
        "value": "177.4"
    },
    {
        "name": "Geno Smith",
        "value": "173.9"
    },
    {
        "name": "Tua Tagovailoa",
        "value": "160.7"
    },
    {
        "name": "Tyler Shough",
        "value": "158.0"
    },
    {
        "name": "Joe Flacco",
        "value": "146.7"
    },
    {
        "name": "Justin Fields",
        "value": "142.7"
    },
    {
        "name": "Joe Burrow",
        "value": "134.5"
    },
    {
        "name": "Mac Jones",
        "value": "130.0"
    },
    {
        "name": "Marcus Mariota",
        "value": "125.5"
    },
    {
        "name": "J.J. McCarthy",
        "value": "125.4"
    },
    {
        "name": "Michael Penix",
        "value": "120.3"
    },
    {
        "name": "Jayden Daniels",
        "value": "114.3"
    },
    {
        "name": "Kirk Cousins",
        "value": "103.5"
    },
    {
        "name": "Spencer Rattler",
        "value": "99.1"
    },
    {
        "name": "Shedeur Sanders",
        "value": "84.9"
    },
    {
        "name": "Kyler Murray",
        "value": "77.8"
    },
    {
        "name": "Carson Wentz",
        "value": "70.3"
    },
    {
        "name": "Dillon Gabriel",
        "value": "70.1"
    },
    {
        "name": "Davis Mills",
        "value": "68.6"
    },
    {
        "name": "Tyrod Taylor",
        "value": "59.5"
    },
    {
        "name": "Malik Willis",
        "value": "51.2"
    },
    {
        "name": "Russell Wilson",
        "value": "49.8"
    },
    {
        "name": "Jake Browning",
        "value": "48.7"
    },
    {
        "name": "Jameis Winston",
        "value": "43.3"
    },
    {
        "name": "Tyler Huntley",
        "value": "40.1"
    },
    {
        "name": "Quinn Ewers",
        "value": "33.2"
    },
    {
        "name": "Philip Rivers",
        "value": "31.7"
    },
    {
        "name": "Mitchell Trubisky",
        "value": "31.1"
    },
    {
        "name": "Riley Leonard",
        "value": "29.0"
    },
    {
        "name": "Brady Cook",
        "value": "28.5"
    },
    {
        "name": "Josh Johnson",
        "value": "24.4"
    },
    {
        "name": "Mason Rudolph",
        "value": "15.0"
    },
    {
        "name": "Tanner McKee",
        "value": "13.8"
    },
    {
        "name": "Trey Lance",
        "value": "13.5"
    },
    {
        "name": "Chris Oladokun",
        "value": "11.2"
    },
    {
        "name": "Joe Milton",
        "value": "10.3"
    },
    {
        "name": "Andy Dalton",
        "value": "9.5"
    },
    {
        "name": "Kenny Pickett",
        "value": "7.7"
    },
    {
        "name": "Aidan O'Connell",
        "value": "4.8"
    },
    {
        "name": "Max Brosmer",
        "value": "4.2"
    },
    {
        "name": "Shane Buechele",
        "value": "3.9"
    },
    {
        "name": "Teddy Bridgewater",
        "value": "2.9"
    },
    {
        "name": "Tyson Bagent",
        "value": "2.6"
    },
    {
        "name": "Joshua Dobbs",
        "value": "2.1"
    }
]
const lastYearRbs = [
    {
        "name": "Christian McCaffrey",
        "value": "416.6"
    },
    {
        "name": "Bijan Robinson",
        "value": "370.8"
    },
    {
        "name": "Jahmyr Gibbs",
        "value": "366.9"
    },
    {
        "name": "Jonathan Taylor",
        "value": "362.3"
    },
    {
        "name": "De'Von Achane",
        "value": "322.8"
    },
    {
        "name": "James Cook",
        "value": "302.2"
    },
    {
        "name": "Chase Brown",
        "value": "282.6"
    },
    {
        "name": "Derrick Henry",
        "value": "279.5"
    },
    {
        "name": "Kyren Williams",
        "value": "263.3"
    },
    {
        "name": "Travis Etienne",
        "value": "253.9"
    },
    {
        "name": "Ashton Jeanty",
        "value": "245.1"
    },
    {
        "name": "Javonte Williams",
        "value": "242.8"
    },
    {
        "name": "Josh Jacobs",
        "value": "237.1"
    },
    {
        "name": "Saquon Barkley",
        "value": "232.3"
    },
    {
        "name": "D'Andre Swift",
        "value": "228.6"
    },
    {
        "name": "Kenneth Gainwell",
        "value": "221.3"
    },
    {
        "name": "Jaylen Warren",
        "value": "217.1"
    },
    {
        "name": "Rico Dowdle",
        "value": "216.3"
    },
    {
        "name": "Breece Hall",
        "value": "207.7"
    },
    {
        "name": "RJ Harvey",
        "value": "206.6"
    },
    {
        "name": "TreVeyon Henderson",
        "value": "206.2"
    },
    {
        "name": "Kenneth Walker III",
        "value": "191.9"
    },
    {
        "name": "Tony Pollard",
        "value": "185.8"
    },
    {
        "name": "Zach Charbonnet",
        "value": "181.4"
    },
    {
        "name": "Rhamondre Stevenson",
        "value": "178.8"
    },
    {
        "name": "Quinshon Judkins",
        "value": "169.8"
    },
    {
        "name": "David Montgomery",
        "value": "166.9"
    },
    {
        "name": "Tyrone Tracy Jr.",
        "value": "160.8"
    },
    {
        "name": "Woody Marks",
        "value": "151.1"
    },
    {
        "name": "Kyle Monangai",
        "value": "146.7"
    },
    {
        "name": "Kareem Hunt",
        "value": "145.4"
    },
    {
        "name": "Rachaad White",
        "value": "143.0"
    },
    {
        "name": "Jacory Croskey-Merritt",
        "value": "140.3"
    },
    {
        "name": "Bucky Irving",
        "value": "138.5"
    },
    {
        "name": "Omarion Hampton",
        "value": "135.7"
    },
    {
        "name": "Jordan Mason",
        "value": "128.9"
    },
    {
        "name": "Cam Skattebo",
        "value": "127.7"
    },
    {
        "name": "Chuba Hubbard",
        "value": "125.4"
    },
    {
        "name": "Tyler Allgeier",
        "value": "123.0"
    },
    {
        "name": "Blake Corum",
        "value": "122.2"
    },
    {
        "name": "Aaron Jones",
        "value": "118.7"
    },
    {
        "name": "Kimani Vidal",
        "value": "117.9"
    },
    {
        "name": "J.K. Dobbins",
        "value": "115.9"
    },
    {
        "name": "Tyjae Spears",
        "value": "111.7"
    },
    {
        "name": "Devin Singletary",
        "value": "108.8"
    },
    {
        "name": "Alvin Kamara",
        "value": "100.7"
    },
    {
        "name": "Ty Johnson",
        "value": "100.3"
    },
    {
        "name": "Michael Carter",
        "value": "99.0"
    },
    {
        "name": "Emanuel Wilson",
        "value": "94.5"
    },
    {
        "name": "Zonovan Knight",
        "value": "92.9"
    },
    {
        "name": "Chris Rodriguez",
        "value": "92.0"
    },
    {
        "name": "Sean Tucker",
        "value": "91.4"
    },
    {
        "name": "Bhayshul Tuten",
        "value": "88.6"
    },
    {
        "name": "Nick Chubb",
        "value": "88.3"
    },
    {
        "name": "Dylan Sampson",
        "value": "87.6"
    },
    {
        "name": "Isiah Pacheco",
        "value": "87.3"
    },
    {
        "name": "Samaje Perine",
        "value": "77.9"
    },
    {
        "name": "Jeremy McNichols",
        "value": "72.7"
    },
    {
        "name": "Isaiah Davis",
        "value": "71.2"
    },
    {
        "name": "Justice Hill",
        "value": "65.2"
    },
    {
        "name": "Ray Davis",
        "value": "64.1"
    },
    {
        "name": "Brashard Smith",
        "value": "63.3"
    },
    {
        "name": "Brian Robinson Jr.",
        "value": "62.5"
    },
    {
        "name": "Devin Neal",
        "value": "60.0"
    },
    {
        "name": "Emari Demercado",
        "value": "58.3"
    },
    {
        "name": "Keaton Mitchell",
        "value": "55.4"
    },
    {
        "name": "Ollie Gordon",
        "value": "54.1"
    },
    {
        "name": "Tank Bigsby",
        "value": "53.8"
    },
    {
        "name": "Jaylen Wright",
        "value": "48.2"
    },
    {
        "name": "Audric Estime",
        "value": "48.1"
    },
    {
        "name": "Jerome Ford",
        "value": "43.6"
    },
    {
        "name": "Malik Davis",
        "value": "40.6"
    },
    {
        "name": "Zavier Scott",
        "value": "39.2"
    },
    {
        "name": "Hunter Luepke",
        "value": "37.0"
    },
    {
        "name": "Ameer Abdullah",
        "value": "35.9"
    },
    {
        "name": "Trey Benson",
        "value": "35.4"
    },
    {
        "name": "Tyler Badie",
        "value": "35.4"
    },
    {
        "name": "Kendre Miller",
        "value": "33.3"
    },
    {
        "name": "James Conner",
        "value": "33.3"
    },
    {
        "name": "Chris Brooks",
        "value": "32.7"
    },
    {
        "name": "Jaleel McLaughlin",
        "value": "31.4"
    },
    {
        "name": "Jawhar Jordan",
        "value": "29.7"
    },
    {
        "name": "Raheem Mostert",
        "value": "29.4"
    },
    {
        "name": "Miles Sanders",
        "value": "26.7"
    },
    {
        "name": "Jaret Patterson",
        "value": "25.7"
    },
    {
        "name": "LeQuint Allen",
        "value": "24.8"
    },
    {
        "name": "Rasheen Ali",
        "value": "24.2"
    },
    {
        "name": "Dare Ogunbowale",
        "value": "24.1"
    },
    {
        "name": "Antonio Gibson",
        "value": "23.2"
    },
    {
        "name": "Jaydon Blue",
        "value": "20.4"
    },
    {
        "name": "Raheim Sanders",
        "value": "20.3"
    },
    {
        "name": "Will Shipley",
        "value": "17.5"
    },
    {
        "name": "Trayveon Williams",
        "value": "17.1"
    },
    {
        "name": "Braelon Allen",
        "value": "15.3"
    },
    {
        "name": "Terrell Jennings",
        "value": "15.2"
    },
    {
        "name": "George Holani",
        "value": "14.8"
    },
    {
        "name": "Austin Ekeler",
        "value": "13.1"
    },
    {
        "name": "Trevor Etienne",
        "value": "11.7"
    },
    {
        "name": "Najee Harris",
        "value": "11.6"
    },
    {
        "name": "Kene Nwangwu",
        "value": "10.9"
    },
    {
        "name": "Phil Mafah",
        "value": "10.9"
    },
    {
        "name": "Hassan Haskins",
        "value": "10.0"
    },
    {
        "name": "Brittain Brown",
        "value": "9.7"
    },
    {
        "name": "DJ Giddens",
        "value": "9.6"
    },
    {
        "name": "Zamir White",
        "value": "9.6"
    },
    {
        "name": "Corey Kiner",
        "value": "9.3"
    },
    {
        "name": "AJ Dillon",
        "value": "9.1"
    },
    {
        "name": "Kaleb Johnson",
        "value": "8.8"
    },
    {
        "name": "Ty Chandler",
        "value": "8.8"
    },
    {
        "name": "British Brooks",
        "value": "7.8"
    },
    {
        "name": "Cam Akers",
        "value": "7.2"
    },
    {
        "name": "Khalil Herbert",
        "value": "6.6"
    },
    {
        "name": "Tahj Brooks",
        "value": "6.4"
    },
    {
        "name": "Evan Hull",
        "value": "6.4"
    },
    {
        "name": "Tyler Goodson",
        "value": "5.2"
    },
    {
        "name": "Ronnie Rivers",
        "value": "4.6"
    },
    {
        "name": "Clyde Edwards-Helaire",
        "value": "4.2"
    },
    {
        "name": "Nathan Carter",
        "value": "4.0"
    },
    {
        "name": "Julius Chestnut",
        "value": "4.0"
    },
    {
        "name": "Dameon Pierce",
        "value": "3.6"
    },
    {
        "name": "D'Ernest Johnson",
        "value": "2.5"
    },
    {
        "name": "DeeJay Dallas",
        "value": "2.1"
    },
    {
        "name": "Roschon Johnson",
        "value": "1.7"
    }
]
const lastYearWrs = [
    {
        "name": "Puka Nacua",
        "value": "375.0"
    },
    {
        "name": "Jaxon Smith-Njigba",
        "value": "359.9"
    },
    {
        "name": "Amon-Ra St. Brown",
        "value": "324.0"
    },
    {
        "name": "Ja'Marr Chase",
        "value": "313.6"
    },
    {
        "name": "George Pickens",
        "value": "291.9"
    },
    {
        "name": "Chris Olave",
        "value": "268.0"
    },
    {
        "name": "Zay Flowers",
        "value": "243.3"
    },
    {
        "name": "Nico Collins",
        "value": "226.2"
    },
    {
        "name": "Davante Adams",
        "value": "222.9"
    },
    {
        "name": "Michael Wilson",
        "value": "220.6"
    },
    {
        "name": "A.J. Brown",
        "value": "220.3"
    },
    {
        "name": "Jameson Williams",
        "value": "219.9"
    },
    {
        "name": "Courtland Sutton",
        "value": "219.7"
    },
    {
        "name": "Wan'Dale Robinson",
        "value": "217.9"
    },
    {
        "name": "Tee Higgins",
        "value": "211.6"
    },
    {
        "name": "Tetairoa McMillan",
        "value": "211.4"
    },
    {
        "name": "Stefon Diggs",
        "value": "210.3"
    },
    {
        "name": "Michael Pittman Jr.",
        "value": "202.4"
    },
    {
        "name": "Drake London",
        "value": "201.9"
    },
    {
        "name": "DeVonta Smith",
        "value": "201.8"
    },
    {
        "name": "Justin Jefferson",
        "value": "201.5"
    },
    {
        "name": "CeeDee Lamb",
        "value": "200.9"
    },
    {
        "name": "Emeka Egbuka",
        "value": "195.7"
    },
    {
        "name": "Jaylen Waddle",
        "value": "194.1"
    },
    {
        "name": "Deebo Samuel",
        "value": "188.2"
    },
    {
        "name": "D.K. Metcalf",
        "value": "187.2"
    },
    {
        "name": "Parker Washington",
        "value": "184.7"
    },
    {
        "name": "Alec Pierce",
        "value": "183.3"
    },
    {
        "name": "Keenan Allen",
        "value": "182.7"
    },
    {
        "name": "Ladd McConkey",
        "value": "180.9"
    },
    {
        "name": "Troy Franklin",
        "value": "177.1"
    },
    {
        "name": "Jakobi Meyers",
        "value": "175.8"
    },
    {
        "name": "Jauan Jennings",
        "value": "173.3"
    },
    {
        "name": "Quentin Johnston",
        "value": "171.2"
    },
    {
        "name": "D.J. Moore",
        "value": "170.2"
    },
    {
        "name": "Khalil Shakir",
        "value": "166.4"
    },
    {
        "name": "Romeo Doubs",
        "value": "165.4"
    },
    {
        "name": "Tre Tucker",
        "value": "161.7"
    },
    {
        "name": "Rashid Shaheed",
        "value": "156.6"
    },
    {
        "name": "Rashee Rice",
        "value": "150.1"
    },
    {
        "name": "Rome Odunze",
        "value": "146.1"
    },
    {
        "name": "Brian Thomas",
        "value": "138.8"
    },
    {
        "name": "Marquise Brown",
        "value": "137.7"
    },
    {
        "name": "Josh Downs",
        "value": "136.4"
    },
    {
        "name": "Jordan Addison",
        "value": "135.1"
    },
    {
        "name": "Christian Watson",
        "value": "132.4"
    },
    {
        "name": "Jayden Higgins",
        "value": "129.5"
    },
    {
        "name": "Luther Burden",
        "value": "127.9"
    },
    {
        "name": "Marvin Harrison Jr.",
        "value": "127.8"
    },
    {
        "name": "Chimere Dike",
        "value": "126.1"
    },
    {
        "name": "Kayshon Boutte",
        "value": "124.1"
    },
    {
        "name": "Jerry Jeudy",
        "value": "120.7"
    },
    {
        "name": "Malik Washington",
        "value": "116.7"
    },
    {
        "name": "Elic Ayomanor",
        "value": "116.5"
    },
    {
        "name": "Cooper Kupp",
        "value": "116.3"
    },
    {
        "name": "Terry McLaurin",
        "value": "114.2"
    },
    {
        "name": "Ryan Flournoy",
        "value": "114.0"
    },
    {
        "name": "Mack Hollins",
        "value": "113.4"
    },
    {
        "name": "Xavier Worthy",
        "value": "109.9"
    },
    {
        "name": "Keon Coleman",
        "value": "102.4"
    },
    {
        "name": "Jalen Nailor",
        "value": "100.7"
    },
    {
        "name": "Garrett Wilson",
        "value": "99.5"
    },
    {
        "name": "Darius Slayton",
        "value": "98.8"
    },
    {
        "name": "Xavier Hutchinson",
        "value": "98.0"
    },
    {
        "name": "DeMario Douglas",
        "value": "95.8"
    },
    {
        "name": "Marvin Mims",
        "value": "93.0"
    },
    {
        "name": "Tez Johnson",
        "value": "92.4"
    },
    {
        "name": "Kendrick Bourne",
        "value": "92.1"
    },
    {
        "name": "Jalen Coker",
        "value": "90.4"
    },
    {
        "name": "Andrei Iosivas",
        "value": "89.9"
    },
    {
        "name": "Xavier Legette",
        "value": "89.3"
    },
    {
        "name": "Ricky Pearsall",
        "value": "88.6"
    },
    {
        "name": "Adonai Mitchell",
        "value": "87.9"
    },
    {
        "name": "Calvin Austin III",
        "value": "86.2"
    },
    {
        "name": "Mike Evans",
        "value": "84.8"
    },
    {
        "name": "Olamide Zaccheaus",
        "value": "84.8"
    },
    {
        "name": "KaVontae Turpin",
        "value": "84.5"
    },
    {
        "name": "Chris Godwin",
        "value": "83.0"
    },
    {
        "name": "Darnell Mooney",
        "value": "82.3"
    },
    {
        "name": "Sterling Shepard",
        "value": "82.0"
    },
    {
        "name": "Tyquan Thornton",
        "value": "80.8"
    },
    {
        "name": "Isaac TeSlaa",
        "value": "75.9"
    },
    {
        "name": "Dontayvion Wicks",
        "value": "75.8"
    },
    {
        "name": "Greg Dortch",
        "value": "75.1"
    },
    {
        "name": "Pat Bryant",
        "value": "74.8"
    },
    {
        "name": "JuJu Smith-Schuster",
        "value": "73.5"
    },
    {
        "name": "Tyler Lockett",
        "value": "73.1"
    },
    {
        "name": "John Metchie",
        "value": "71.9"
    },
    {
        "name": "Matthew Golden",
        "value": "70.0"
    },
    {
        "name": "Van Jefferson",
        "value": "70.0"
    },
    {
        "name": "Tre Harris",
        "value": "69.4"
    },
    {
        "name": "Jaylin Noel",
        "value": "68.4"
    },
    {
        "name": "DeAndre Hopkins",
        "value": "67.0"
    },
    {
        "name": "Kalif Raymond",
        "value": "66.8"
    },
    {
        "name": "Devaughn Vele",
        "value": "66.3"
    },
    {
        "name": "Tory Horton",
        "value": "65.1"
    },
    {
        "name": "Travis Hunter",
        "value": "63.8"
    },
    {
        "name": "Cedric Tillman",
        "value": "60.0"
    },
    {
        "name": "Isaiah Williams",
        "value": "58.7"
    },
    {
        "name": "Demarcus Robinson",
        "value": "58.2"
    },
    {
        "name": "Christian Kirk",
        "value": "57.9"
    },
    {
        "name": "Malik Nabers",
        "value": "57.1"
    },
    {
        "name": "Rashod Bateman",
        "value": "55.4"
    },
    {
        "name": "Isaiah Bond",
        "value": "54.7"
    },
    {
        "name": "Tyreek Hill",
        "value": "53.5"
    },
    {
        "name": "Josh Palmer",
        "value": "52.3"
    },
    {
        "name": "Brandin Cooks",
        "value": "51.9"
    },
    {
        "name": "Tim Patrick",
        "value": "51.7"
    },
    {
        "name": "Luke McCaffrey",
        "value": "51.3"
    },
    {
        "name": "Jahan Dotson",
        "value": "50.2"
    },
    {
        "name": "Dyami Brown",
        "value": "49.7"
    },
    {
        "name": "Kyle Williams",
        "value": "49.2"
    },
    {
        "name": "Jaylin Lane",
        "value": "49.2"
    },
    {
        "name": "David Sills V",
        "value": "49.1"
    },
    {
        "name": "Jayden Reed",
        "value": "48.5"
    },
    {
        "name": "Xavier Smith",
        "value": "48.3"
    },
    {
        "name": "Calvin Ridley",
        "value": "47.3"
    },
    {
        "name": "Jalen Tolbert",
        "value": "46.3"
    },
    {
        "name": "Tyrell Shavers",
        "value": "45.5"
    },
    {
        "name": "Jack Bech",
        "value": "42.4"
    },
    {
        "name": "Adam Thielen",
        "value": "39.6"
    },
    {
        "name": "Chris Moore",
        "value": "38.6"
    },
    {
        "name": "Roman Wilson",
        "value": "38.6"
    },
    {
        "name": "Tyler Johnson",
        "value": "37.7"
    },
    {
        "name": "Devontez Walker",
        "value": "37.6"
    },
    {
        "name": "Jordan Whittington",
        "value": "36.3"
    },
    {
        "name": "Hunter Renfrow",
        "value": "35.9"
    },
    {
        "name": "Lil'Jordan Humphrey",
        "value": "34.6"
    },
    {
        "name": "Gunner Olszewski",
        "value": "33.8"
    },
    {
        "name": "Kevin Austin",
        "value": "33.0"
    },
    {
        "name": "Marquez Valdes-Scantling",
        "value": "32.0"
    },
    {
        "name": "Mitchell Tinsley",
        "value": "31.6"
    },
    {
        "name": "Malachi Corley",
        "value": "31.6"
    },
    {
        "name": "Tutu Atwell",
        "value": "31.2"
    },
    {
        "name": "Gabe Davis",
        "value": "30.9"
    },
    {
        "name": "Zay Jones",
        "value": "30.3"
    },
    {
        "name": "Brycen Tremayne",
        "value": "30.0"
    },
    {
        "name": "Jalen McMillan",
        "value": "29.9"
    },
    {
        "name": "Treylon Burks",
        "value": "29.0"
    },
    {
        "name": "Jimmy Horn",
        "value": "28.7"
    },
    {
        "name": "Elijah Moore",
        "value": "28.6"
    },
    {
        "name": "Isaiah Hodgins",
        "value": "27.5"
    },
    {
        "name": "Jahdae Walker",
        "value": "26.7"
    },
    {
        "name": "Theo Wease",
        "value": "25.9"
    },
    {
        "name": "Savion Williams",
        "value": "25.5"
    },
    {
        "name": "Konata Mumpfield",
        "value": "25.2"
    },
    {
        "name": "Dont'e Thornton",
        "value": "23.5"
    },
    {
        "name": "Josh Reynolds",
        "value": "23.1"
    },
    {
        "name": "Allen Lazard",
        "value": "23.0"
    },
    {
        "name": "Curtis Samuel",
        "value": "21.1"
    },
    {
        "name": "Jamari Thrash",
        "value": "20.7"
    },
    {
        "name": "Mason Tipton",
        "value": "20.4"
    },
    {
        "name": "Ashton Dulin",
        "value": "20.0"
    },
    {
        "name": "Nick Westbrook-Ikhine",
        "value": "19.9"
    },
    {
        "name": "Dante Pettis",
        "value": "19.7"
    },
    {
        "name": "Darius Cooper",
        "value": "18.2"
    },
    {
        "name": "Cody White",
        "value": "18.0"
    },
    {
        "name": "Kameron Johnson",
        "value": "17.7"
    },
    {
        "name": "Ben Skowronek",
        "value": "16.9"
    },
    {
        "name": "Efton Chism",
        "value": "16.5"
    },
    {
        "name": "KeAndre Lambert-Smith",
        "value": "16.1"
    },
    {
        "name": "Shedrick Jackson",
        "value": "15.9"
    },
    {
        "name": "Casey Washington",
        "value": "15.4"
    },
    {
        "name": "Scotty Miller",
        "value": "15.2"
    },
    {
        "name": "Skyy Moore",
        "value": "14.8"
    },
    {
        "name": "Malik Heath",
        "value": "14.6"
    },
    {
        "name": "Tylan Wallace",
        "value": "14.5"
    },
    {
        "name": "Ray-Ray McCloud",
        "value": "13.9"
    },
    {
        "name": "Xavier Weaver",
        "value": "13.7"
    },
    {
        "name": "Arian Smith",
        "value": "13.5"
    },
    {
        "name": "Noah Brown",
        "value": "13.3"
    },
    {
        "name": "Michael Bandy",
        "value": "13.0"
    },
    {
        "name": "James Proche",
        "value": "12.5"
    },
    {
        "name": "Gage Larvadain",
        "value": "12.4"
    },
    {
        "name": "Ryan Miller",
        "value": "11.4"
    },
    {
        "name": "Dylan Drummond",
        "value": "11.2"
    },
    {
        "name": "Ronnie Bell",
        "value": "10.3"
    },
    {
        "name": "Robbie Chosen",
        "value": "10.3"
    },
    {
        "name": "Braxton Berrios",
        "value": "9.7"
    },
    {
        "name": "Cedrick Wilson Jr.",
        "value": "9.4"
    },
    {
        "name": "Jalin Hyatt",
        "value": "8.5"
    },
    {
        "name": "D'Wayne Eskridge",
        "value": "8.2"
    },
    {
        "name": "Austin Trammell",
        "value": "7.6"
    },
    {
        "name": "Tom Kennedy",
        "value": "7.6"
    },
    {
        "name": "Xavier Restrepo",
        "value": "7.1"
    },
    {
        "name": "Mason Kinsey",
        "value": "6.8"
    },
    {
        "name": "Dareke Young",
        "value": "6.8"
    },
    {
        "name": "Deven Thompkins",
        "value": "6.2"
    },
    {
        "name": "Jalen Brooks",
        "value": "6.1"
    },
    {
        "name": "KhaDarel Hodge",
        "value": "6.1"
    },
    {
        "name": "Charlie Jones",
        "value": "6.0"
    },
    {
        "name": "Justin Watson",
        "value": "6.0"
    },
    {
        "name": "Tai Felton",
        "value": "5.5"
    },
    {
        "name": "Devin Duvernay",
        "value": "4.6"
    },
    {
        "name": "Jordan Watkins",
        "value": "4.6"
    },
    {
        "name": "Beaux Collins",
        "value": "4.5"
    },
    {
        "name": "Nikko Remigio",
        "value": "4.2"
    },
    {
        "name": "Jake Bobo",
        "value": "4.0"
    },
    {
        "name": "Britain Covey",
        "value": "4.0"
    },
    {
        "name": "Jacoby Jones",
        "value": "3.5"
    },
    {
        "name": "Jonathan Mingo",
        "value": "3.5"
    },
    {
        "name": "Velus Jones Jr.",
        "value": "3.2"
    },
    {
        "name": "Elijah Moore",
        "value": "0.0"
    }
];
const lastYearTE = [
    {
        "name": "Trey McBride",
        "value": "315.9"
    },
    {
        "name": "Kyle Pitts",
        "value": "210.8"
    },
    {
        "name": "Travis Kelce",
        "value": "193.2"
    },
    {
        "name": "Tyler Warren",
        "value": "188.5"
    },
    {
        "name": "Jake Ferguson",
        "value": "188.1"
    },
    {
        "name": "Harold Fannin",
        "value": "186.4"
    },
    {
        "name": "Dallas Goedert",
        "value": "185.1"
    },
    {
        "name": "Juwan Johnson",
        "value": "179.9"
    },
    {
        "name": "Hunter Henry",
        "value": "178.8"
    },
    {
        "name": "Dalton Schultz",
        "value": "177.7"
    },
    {
        "name": "Brock Bowers",
        "value": "176.2"
    },
    {
        "name": "Colston Loveland",
        "value": "165.1"
    },
    {
        "name": "George Kittle",
        "value": "161.5"
    },
    {
        "name": "AJ Barner",
        "value": "147.3"
    },
    {
        "name": "Oronde Gadsden II",
        "value": "131.4"
    },
    {
        "name": "Mark Andrews",
        "value": "131.0"
    },
    {
        "name": "Colby Parkinson",
        "value": "129.8"
    },
    {
        "name": "Theo Johnson",
        "value": "127.8"
    },
    {
        "name": "Zach Ertz",
        "value": "126.4"
    },
    {
        "name": "Dalton Kincaid",
        "value": "126.1"
    },
    {
        "name": "Chig Okonkwo",
        "value": "124.0"
    },
    {
        "name": "Cade Otton",
        "value": "122.2"
    },
    {
        "name": "Brenton Strange",
        "value": "118.0"
    },
    {
        "name": "Tucker Kraft",
        "value": "117.2"
    },
    {
        "name": "Pat Freiermuth",
        "value": "113.6"
    },
    {
        "name": "T.J. Hockenson",
        "value": "112.8"
    },
    {
        "name": "Sam LaPorta",
        "value": "106.9"
    },
    {
        "name": "Dawson Knox",
        "value": "103.7"
    },
    {
        "name": "Evan Engram",
        "value": "102.8"
    },
    {
        "name": "Jake Tonges",
        "value": "93.3"
    },
    {
        "name": "Gunnar Helm",
        "value": "91.7"
    },
    {
        "name": "Mason Taylor",
        "value": "88.9"
    },
    {
        "name": "Darren Waller",
        "value": "88.7"
    },
    {
        "name": "David Njoku",
        "value": "86.3"
    },
    {
        "name": "Jonnu Smith",
        "value": "85.2"
    },
    {
        "name": "Cole Kmet",
        "value": "78.7"
    },
    {
        "name": "Noah Fant",
        "value": "74.8"
    },
    {
        "name": "Michael Mayer",
        "value": "73.8"
    },
    {
        "name": "Darnell Washington",
        "value": "73.4"
    },
    {
        "name": "Tyler Higbee",
        "value": "71.1"
    },
    {
        "name": "Mike Gesicki",
        "value": "70.7"
    },
    {
        "name": "Tommy Tremble",
        "value": "63.9"
    },
    {
        "name": "Davis Allen",
        "value": "62.8"
    },
    {
        "name": "Greg Dulcich",
        "value": "62.8"
    },
    {
        "name": "Isaiah Likely",
        "value": "61.7"
    },
    {
        "name": "Daniel Bellinger",
        "value": "59.6"
    },
    {
        "name": "Austin Hooper",
        "value": "59.3"
    },
    {
        "name": "Elijah Higgins",
        "value": "58.1"
    },
    {
        "name": "Josh Oliver",
        "value": "55.0"
    },
    {
        "name": "Ja'Tavion Sanders",
        "value": "54.0"
    },
    {
        "name": "Jackson Hawes",
        "value": "52.7"
    },
    {
        "name": "Terrance Ferguson",
        "value": "52.1"
    },
    {
        "name": "Luke Musgrave",
        "value": "49.2"
    },
    {
        "name": "Mitchell Evans",
        "value": "48.2"
    },
    {
        "name": "Tanner Hudson",
        "value": "47.8"
    },
    {
        "name": "Jeremy Ruckert",
        "value": "46.9"
    },
    {
        "name": "Adam Trautman",
        "value": "45.5"
    },
    {
        "name": "Taysom Hill",
        "value": "41.8"
    },
    {
        "name": "Noah Gray",
        "value": "38.8"
    },
    {
        "name": "Elijah Arroyo",
        "value": "36.9"
    },
    {
        "name": "Brock Wright",
        "value": "36.8"
    },
    {
        "name": "Charlie Kolar",
        "value": "36.2"
    },
    {
        "name": "Hunter Long",
        "value": "32.5"
    },
    {
        "name": "Drew Sample",
        "value": "31.9"
    },
    {
        "name": "Julian Hill",
        "value": "31.0"
    },
    {
        "name": "Mo Alie-Cox",
        "value": "30.7"
    },
    {
        "name": "Luke Farrell",
        "value": "29.5"
    },
    {
        "name": "Ben Sinnott",
        "value": "28.4"
    },
    {
        "name": "Connor Heyward",
        "value": "27.4"
    },
    {
        "name": "John Bates",
        "value": "27.3"
    },
    {
        "name": "Luke Schoonmaker",
        "value": "27.2"
    },
    {
        "name": "John FitzPatrick",
        "value": "25.2"
    },
    {
        "name": "Ian Thomas",
        "value": "24.4"
    },
    {
        "name": "Brevyn Spann-Ford",
        "value": "24.0"
    },
    {
        "name": "Grant Calcaterra",
        "value": "22.6"
    },
    {
        "name": "Will Dissly",
        "value": "20.7"
    },
    {
        "name": "Johnny Mundt",
        "value": "20.1"
    },
    {
        "name": "Cade Stover",
        "value": "19.9"
    },
    {
        "name": "Tanner Conner",
        "value": "18.1"
    },
    {
        "name": "Quintin Morris",
        "value": "17.5"
    },
    {
        "name": "Tyler Conklin",
        "value": "17.3"
    },
    {
        "name": "Nate Adkins",
        "value": "16.8"
    },
    {
        "name": "Jack Stoll",
        "value": "16.6"
    },
    {
        "name": "Josh Whyle",
        "value": "14.6"
    },
    {
        "name": "Anthony Firkser",
        "value": "13.3"
    },
    {
        "name": "David Martin-Robinson",
        "value": "13.0"
    },
    {
        "name": "Foster Moreau",
        "value": "12.9"
    },
    {
        "name": "Charlie Woerner",
        "value": "12.8"
    },
    {
        "name": "Andrew Ogletree",
        "value": "12.7"
    },
    {
        "name": "Stone Smartt",
        "value": "12.2"
    },
    {
        "name": "Josiah Deguara",
        "value": "11.1"
    },
    {
        "name": "Kylen Granson",
        "value": "11.0"
    },
    {
        "name": "Eric Saubert",
        "value": "9.1"
    },
    {
        "name": "Brenden Bates",
        "value": "8.8"
    },
    {
        "name": "Albert Okwuegbunam",
        "value": "8.6"
    },
    {
        "name": "Devin Culp",
        "value": "7.6"
    },
    {
        "name": "Keleki Latu",
        "value": "7.5"
    },
    {
        "name": "Durham Smythe",
        "value": "6.5"
    },
    {
        "name": "Ben Sims",
        "value": "6.0"
    },
    {
        "name": "James Mitchell",
        "value": "5.8"
    },
    {
        "name": "Tucker Fisk",
        "value": "3.9"
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

const normalizeName = (name) => name
    .replace(/[.'’]/g, '')
    .replace(/\s+(Jr|Sr|II|III|IV|V)\.?$/i, '')
    .trim()
    .toLowerCase();

const findByName = (list, name) => {
    const target = normalizeName(name);
    return list.find(entry => normalizeName(entry.name) === target);
};

const normalizedEspnIds = Object.entries(espnPlayerIds).reduce((acc, [name, id]) => {
    acc[normalizeName(name)] = id;
    return acc;
}, {});

const findEspnId = (name) => normalizedEspnIds[normalizeName(name)];

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
        espnId: findEspnId(playerName),
    }
    switch (position) {
        case 'WR':
            playerInfo.fantasyPoints = findByName(lastYearWrs, playerName)?.value || 0;
            break;
        case 'RB':
            playerInfo.fantasyPoints = findByName(lastYearRbs, playerName)?.value || 0;
            break;
        case 'TE':
            playerInfo.fantasyPoints = findByName(lastYearTE, playerName)?.value || 0;
            break;
        case 'QB':
            playerInfo.fantasyPoints = findByName(lastYearQbs, playerName)?.value || 0;
            break;
        case 'DST':
            playerInfo.fantasyPoints = lastYearDefense.find(def => def.name.includes(playerName.trim()))?.value || 0;
            break;
        case 'K':
            playerInfo.fantasyPoints = findByName(lastYearKickers, playerName)?.value || 0;
            break;
        default:
            console.warn(`Unknown position: ${position} for player ${playerName}`);
            return; // Skip unknown positions
    }
    players.push(playerInfo);
});
export default players;