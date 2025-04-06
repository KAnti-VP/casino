import Database from "better-sqlite3";
import players from './players.js'
import games from './games.js'
import plays from "./plays.js"

export const db = new Database("./data/database.sqlite");
db.pragma('foreign_keys = ON');

// db.prepare(`DROP TABLE IF EXISTS plays`).run();
// db.prepare(`DROP TABLE IF EXISTS players`).run();
// db.prepare(`DROP TABLE IF EXISTS games`).run();

db.prepare(
	`CREATE TABLE IF NOT EXISTS players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name STRING,
  email STRING,
  amount INTEGER
  )`
).run();


db.prepare(
	`CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  game STRING
  )`
).run();

db.prepare(
	`CREATE TABLE IF NOT EXISTS plays (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  playerId INTEGER,
  gameId INTEGER,
  amount INTEGER,
  FOREIGN KEY (playerId) REFERENCES players(id) ON DELETE CASCADE,
  FOREIGN KEY (gameId) REFERENCES games(id) ON DELETE CASCADE
  )`
).run();

// for (const game of games) {
//   db.prepare(`INSERT INTO games (game) VALUES (?);`).run(game);
// }

// for (const p of players) {
//   db.prepare(`INSERT INTO players (name, email, amount) VALUES (?, ?, ?);`).run(p.name, p.email, +p.amount);
// }

// for (const bet of plays) {
//   db.prepare(`INSERT INTO plays (playerId, gameId, amount) VALUES (?, ?, ?);`).run(+bet.playerId, +bet.gameId, +bet.amount);
// }

export const playersCount = () => db.prepare(`SELECT COUNT (*) AS count from players;`).get();

export const playersAmountAtLeast = (amount) => db.prepare(`SELECT * FROM players WHERE amount >= ?;`).all(amount);

export const sortedPlays = () => db.prepare(`SELECT g.game AS game, SUM(p.amount) AS sum
  FROM plays p JOIN games g ON p.gameId = g.id GROUP BY p.gameId ORDER BY sum DESC;;`).all();

export const playerGames = (playerId) => db.prepare(`SELECT g.game AS game FROM plays p 
  JOIN games g ON p.gameId = g.id WHERE p.playerId = ? GROUP BY p.gameId;`).all(playerId);

export const deletePlayer = (playerId) => db.prepare(`DELETE FROM players WHERE id = ?;`).run(playerId);
