const AppRoute = require("@app/routes");

module.exports = class V1Route extends AppRoute {
  constructor(dir = "") {
    super("/v1" + dir);
  }
};
