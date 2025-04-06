import express from "express";
import * as db from "./util/database.js";

const app = express();
app.use(express.json());

app.get("/api/players/number", (req, res) => {
	const players = db.playersCount();
	res.status(200).json({ "players count": players.count });
});

app.get("/api/players/amount/:amount", (req, res) => {
	const amount = req.params.amount;
	const players = db.playersAmountAtLeast(amount);
	res.status(200).json(players);
});

app.get("/api/games/sort", (req, res) => {
	const sortedplays = db.sortedPlays();
	res.status(200).json(sortedplays);
});

app.get("/api/games/player/:playerId", (req, res) => {
	const playerId = req.params.playerId;
	const games = db.playerGames(playerId);
	res.status(200).json(games);
});

app.delete("/api/players/:playerId", (req, res) => {
	const result = db.deletePlayer(+req.params.playerId);
	if (!result.changes) {
		return res.status(200).json({ message: "Delete faild" });
	}
	res.status(200).json({ message: "Delete success" });
});

app.listen(3000, () => {
	console.log("Server runs on port 3000");
});
