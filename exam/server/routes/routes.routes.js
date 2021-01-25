const shelterController = require("../controllers/controller.controllers");

module.exports = app => {
    app.get("/api/shelter", shelterController.findAll);
    app.post("/api/shelter/create", shelterController.create);
    app.get("/api/shelter/:id", shelterController.findOne);
    app.delete("/api/shelter/destroy/:id", shelterController.deleteOne);
    app.put("/api/shelter/update/:id", shelterController.update);
}