// import the package
const express = require("express");
const cors = require("cors");

const app = express();

//setup middleware
app.use(express.json());
app.use(cors());

const inventory = [
    "greeting card",
    "wagon",
    "computer",
    "table",
    "chair",
    "milk",
    "sailboat",
    "conditioner",
    "rusty nail",
    "desk",
];

app.get("/api/hello", (req, res) => {
    res.send("Hello!");
});

app.get("/api/inventory", (req, res) => {
    if (req.query.item) {
        const filtered = inventory.filter((item) =>
            item.toLowerCase().includes(req.query.item.toLowerCase())
        );
        res.status(200).send(filtered);
    } else {
        res.status(200).send(inventory);
    }
});

app.get("/api/inventory/:id", (req, res) => {
    let item = inventory[req.params.id];
    res.status(200).send(item);
});

// assign port to
app.listen(5050, () => console.log("Server is listening at 5050"));
