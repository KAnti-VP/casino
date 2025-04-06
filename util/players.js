const text = 
`1;Farkas Veres Imre;xtith@kovacs.biz;8000
2;Varga M. Károly;peterimre@hotmail.com;19200
3;Gulyás Klára Erzsébet;julianna62@sarkozi.hu;15900
4;Dr. Kiss Simon Rudolf;dsimon@faragi.org;17000
5;Dr. Balogh J. Krisztián;sorosz@hotmail.com;8600
6;Soós Molnár Mária;fnemeth@gmail.com;10600
7;Budai J. Dávid;zsanettpinter@torok.net;19700
8;Horváthné Dr. Horváth Teréz Katalin;szekelyminika@horvath.biz;11300
9;Dr. Tamás Lakatos Gréta;kiralyzoltan@gmail.com;17800
10;Dr. Tóth Lászlóné;vszabi@hotmail.com;8700
11;Dr. Fehér Gábor;kisskristif@kovacs.com;19000
12;Varga Nagy Mária;alex31@hegedus.org;13900
13;Dr. Kelemen József Sándor;mariatamas@gmail.com;11300
14;Némethné Dr. Molnár Terézia Zsófia;kszabi@kiss.com.hu;9800
15;L. Kerekes László;tamashajdu@hotmail.com;10500
16;J. Szücs Norbert;katalin72@hotmail.com;9200
17;Szabó Krisztián;nagyagnes@yahoo.com;18400
18;Dr. Farkas Annamária;farkasjulianna@hotmail.com;8700
19;Dr. Tóth E. Erzsébet;annaorban@szabi.hu;11300
20;Dr. Lakatos Diána;dantal@kovacs.com;16200`
const playersArr = text.split('\n')
const players = []
for (const row of playersArr) {
  const [id, name, email, amount] = row.split(';')
  players.push({id, name, email, amount})
}
export default players