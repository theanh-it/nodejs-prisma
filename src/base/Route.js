const { readdirSync, existsSync } = require("fs");

module.exports = class Route {
  path = "src/app";
  route;
  controller = null;

  constructor(path) {
    this.path += path;
  }
  getDirectories() {
    return readdirSync(this.path, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  }
  createRoutes() {
    this.route.get("/", this.controller.getAll);
    this.route.get("/:id", this.controller.getSingle);
    this.route.post("/", this.controller.create);
    this.route.post("/:id", this.controller.update);
    this.route.delete("/:id", this.controller.delete);
  }
  useRoutes(routes) {
    routes.forEach((prop) => {
      const path = `${this.path}/${prop}/routes.js`
        .split("/")
        .filter((e) => e != "")
        .join("/");
      if (existsSync(path)) {
        const RouteChild = require("@" + path);
        const routeChild = new RouteChild();
        this.route.use(`/${prop}`, routeChild.getRoutes());
      }
    });
    if (this.controller) this.createRoutes();
    return this.route;
  }
  getRoutes() {
    this.route = require("express").Router();
    const routes = this.getDirectories();
    return this.useRoutes(routes);
  }
};
