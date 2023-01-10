const Route = require("@base/Route");

module.exports = class AppRoute extends Route {
  constructor(dir = "") {
    super("src/app/" + dir);
  }
};
