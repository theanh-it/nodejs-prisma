const Model = require("@base/Model");

class CourseModel extends Model {
  constructor() {
    super("course");
  }
}

module.exports = new CourseModel();
