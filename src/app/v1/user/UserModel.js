const Model = require("@base/Model");

class UserModel extends Model {
  constructor() {
    super("user");
  }
}

module.exports = new UserModel();
