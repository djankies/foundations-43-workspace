const database = require("./db.js");

const { fortunes } = database;
console.log(fortunes);

module.exports = {
    getCompliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!",
            "Cool shirt!",
            "Your Javascript skills are stellar.",
        ];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        if (fortunes.length > 0) {
            let randomIndex = Math.floor(Math.random() * fortunes.length);
            let randomFortune = fortunes[randomIndex];
            res.status(200).send(randomFortune);
            console.log("randomFortune:", randomFortune);
        } else if (fortunes.length === 0) {
            res.status(200).send("You ain't got no fortunes!");
        } else {
            console.log(fortunes);
            res.status(500).send("Sorry, something went wrong on our end.");
        }
    },
    postFortune: (req, res) => {
        const { fortune } = req.body;
        fortunes.push(fortune);
        console.log(fortune);
        res.status(200).send(fortunes);
    },
    pageInit: (req, res) => {
        res.status(200).send(fortunes);
    },
    deleteFortune: (req, res) => {
        const { fortune } = req.body;
        console.log("deletefortune:", fortune);
        let index = fortunes.indexOf(fortune);
        console.log("index:", index);
        if (index !== -1) {
            fortunes.splice(index, 1);
            res.status(200).send(fortunes);
        } else {
            res.status(404).send("Fortune not found.");
            console.log('Fortune not found.');
            
        }
    },
};
