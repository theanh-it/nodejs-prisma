const V1Route = require("@app/v1/routes");
const controller = require("@app/v1/user/UserController");

module.exports = class UserV1Route extends V1Route {
  controller = controller;

  constructor(dir = "") {
    super("/user" + dir);
  }
};
