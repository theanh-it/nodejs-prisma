const CourseV1Route = require("@app/v1/course/routes");
const controller = require("@app/v1/course/level/LevelController");

module.exports = class LevelCourseV1Route extends CourseV1Route {
  controller = controller;

  constructor(dir = "") {
    super("/level" + dir);
  }
};
