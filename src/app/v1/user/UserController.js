const Controller = require("@src/base/Controller");
const model = require("@app/v1/user/UserModel");

class UserController extends Controller {
  constructor() {
    super(model);
  }
}

module.exports = new UserController();
