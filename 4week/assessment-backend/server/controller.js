const database = require("./db.js");

const { fortunes } = database;

module.exports = {
    pageInit: (_req, res) => {
        res.status(200).send(fortunes);
    },

    postFortune: (req, res) => {
        const fortune = req.body.fortune.toLowerCase();
        if (!fortune) {
            return res.status(400).send("Please provide a fortune.");
        }
        if (fortunes.includes(fortune)) {
            return res.status(400).send("That fortune already exists.");
        }
        fortunes.push(fortune);
        res.status(200).send(fortunes);
    },

    deleteFortune: (req, res) => {
        const { fortune } = req.body;
        if (!fortune) {
            return res.status(400).send("Please provide a fortune.");
        }
        const index = fortunes.indexOf(fortune);
        if (index !== -1) {
            fortunes.splice(index, 1);
            return res.status(200).send(fortunes);
        }
        res.status(404).send("Fortune not found.");
    },

    changeFortune: (req, res) => {
        const { oldFortune, newFortune } = req.body;
        if (!oldFortune || !newFortune) {
            return res
                .status(400)
                .send("Please provide both oldFortune and newFortune.");
        }
        if (oldFortune === newFortune) {
            return res.status(400).send("Please update the old fortune.");
        }
        const index = fortunes.indexOf(oldFortune);
        if (index !== -1) {
            fortunes[index] = newFortune;
            return res.status(200).send(fortunes);
        }
        res.status(404).send("Fortune not found.");
    },

    getFortune: (_req, res) => {
        if (fortunes.length > 0) {
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            const randomFortune = fortunes[randomIndex];
            return res.status(200).send(randomFortune);
        }
        res.status(200).send("You ain't got no fortunes!");
    },
};
