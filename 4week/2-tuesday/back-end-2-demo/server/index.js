const express = require("express");
const cors = require("cors");



const app = express();

app.use(express.json());
app.use(cors());

const {getMovies} = require('./controller.js')



app.put("/api/movies/:id", (req, res) => {

    const { id } = req.params;
    const { type } = req.body;

    if (id && type) {

        for (let i = 0; i < movies.length; i++) {

            if (movies[i].id === +id) {

                if (type === "plus" && movies[i].rating < 5) {
                    movies[i].rating++;
                } else if (type === "minus" && movies[i].rating > 1) {
                    movies[i].rating--;
                }

                res.status(200).send(movies);
                return;
            }


        } res.status(400).send("O no");
    } else {
        res.status(400).send("uh, oh.");
    }
});



app.delete("/api/movies/:id", (req, res) => {
    const { id } = req.params;

    if (id) {

        for (let i = 0; i < movies.length; i++) {

            if (movies[i].id === +id) {
                
                movies.splice(i, 1);
                res.status(200).send(movies);
                return;
            
            }
        }
        res.status(400).send("Invalid ID");
    } else {
        res.status(400).send("Provide ID")
    }
});

app.listen(4004, () => console.log(`Server is listening on port 4004`));
