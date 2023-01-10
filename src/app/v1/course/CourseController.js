const Controller = require("@src/base/Controller");
const model = require("@app/v1/course/CourseModel");

class CourseController extends Controller {
  constructor() {
    super(model);
  }
}

module.exports = new CourseController();
