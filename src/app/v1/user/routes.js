const route = require("express").Router();
const controller = require("@app/v1/user/UserController");

route.get("/", controller.getAll);
route.get("/:id", controller.getSingle);
route.post("/", controller.create);
route.post("/:id", controller.update);
route.delete("/:id", controller.delete);

module.exports = route;
