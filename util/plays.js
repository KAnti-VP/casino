const text = `9;8;4800
18;6;2300
5;1;1400
16;1;3900
8;5;1000
12;2;3100
11;2;3400
3;1;4800
9;5;3900
6;3;1200
15;4;4400
10;1;3800
3;7;1500
9;4;1400
1;4;1800
6;6;1700
10;2;4100
5;2;3100
9;5;4700
18;5;900
4;4;800
2;6;3700
16;2;3300
16;4;3200
6;1;2600
7;6;1600
16;5;3600
20;5;3900
16;7;900
19;4;4200`
const playsArr = text.split('\n')
const plays = []
for (const row of playsArr) {
  const [playerId, gameId, amount] = row.split(';')
  plays.push({playerId, gameId, amount})
}
export default plays