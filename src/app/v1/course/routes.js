const V1Route = require("@app/v1/routes");
const controller = require("@app/v1/course/CourseController");

module.exports = class CourseV1Route extends V1Route {
  controller = controller;

  constructor(dir = "") {
    super("/course" + dir);
  }
};
