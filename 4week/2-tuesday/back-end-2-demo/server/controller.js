const movies = require("./db.json");
let globalID = 11;

module.exports = {
    getMovies: app.get("/api/movies", (req, res) => {
    res.status(200).send(movies)
},
createMovie: app.post("/api/movies", (req, res) => {
    console.log(req.body);
    const { title, rating, imageURL } = req.body;

    if (title && rating && imageURL) {
        let newMovie = {
            id: globalID,
            title: title,
            rating: +rating,
            imageURL: imageURL,
        };

        movies.push(newMovie);
        globalID++;

        res.status(200).send(movies);
    } else {
        res.status(400).send("you must do it right");
    }
}),





)
}