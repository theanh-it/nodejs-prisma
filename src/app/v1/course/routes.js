const route = require("express").Router();
const controller = require("@app/v1/course/CourseController");

route.get("/", controller.getAll);
route.get("/:id", controller.getSingle);
route.post("/", controller.create);
route.post("/:id", controller.update);
route.delete("/:id", controller.delete);
route.use("/level", require("@app/v1/course/level/routes"));

module.exports = route;
