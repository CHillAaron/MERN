const ChangeMeController = require("../controllers/controller.controllers");

module.exports = app => {
    app.get("/api/ChangeMe", ChangeMeController.findAll);
    app.post("/api/ChangeMe/create", ChangeMeController.create);
    app.get("/api/ChangeMe/:id", ChangeMeController.findOne);
    app.delete("/api/ChangeMe/destroy/:id", ChangeMeController.deleteOne);
    app.put("/api/ChangeMe/update/:id", ChangeMeController.update);
}