const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, postFortune, pageInit, deleteFortune, changeFortune} = require('./controller')

app.get("/", pageInit);
app.get("/api/fortune", getFortune)
app.post("/api/fortune", postFortune)
app.delete("/api/fortune", deleteFortune)
app.put("/api/fortune", changeFortune)

app.listen(4000, () => console.log("Server running on 4000"));
