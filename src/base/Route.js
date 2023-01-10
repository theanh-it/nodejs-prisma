const { readdirSync, existsSync } = require("fs");
const route = require("express").Router();

module.exports = class Route {
  path;
  route = route;
  routes;
  constroller;
  constructor(path) {
    this.path = path;
    const routes = this.getDirectories();
    console.log(routes);
    this.useRoutes(routes);
  }

  getDirectories() {
    return readdirSync(this.path, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  }

  createRoutes(controller) {
    this.route.get("/", controller.getAll);
    this.route.get("/:id", controller.getSingle);
    this.route.post("/", controller.create);
    this.route.post("/:id", controller.update);
    this.route.delete("/:id", controller.delete);
    return this.route;
  }
  useRoutes(routes) {
    routes.forEach((prop) => {
      const path = `${this.path}/${prop}/routes.js`
        .split("/")
        .filter((e) => e != "")
        .join("/");
      if (existsSync(path)) {
        const RouteChild = require("@src/app/routes");
        const route = new RouteChild();
        console.log(RouteChild);
        //route.use(`/${prop}`, routes);
      }
    });

    return route;
  }
};
