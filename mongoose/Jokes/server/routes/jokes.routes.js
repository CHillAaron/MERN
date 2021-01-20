//api endpoints in this file. Simliar to urls.py in django
const JokesController = require("../controllers/jokes.controllers")

module.exports = app => {
    app.get("/api/jokes", JokesController.findAllJokes);
    app.post("/api/jokes/create", JokesController.createJoke);
    app.get("/api/jokes/:id", JokesController.findOneJoke);
    app.get("/api/jokes/delete/:id", JokesController.deleteOneJoke);
    app.put("/api/jokes/update/:id", JokesController.updateJoke);
}