const Controller = require("@src/base/Controller");
const model = require("@app/v1/course/level/LevelModel");

class LevelController extends Controller {
  constructor() {
    super(model);
  }
}

module.exports = new LevelController();
