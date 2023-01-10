require("module-alias/register");
require("dotenv").config();
const os = require("os");
process.env.UV_THREADPOOL_SIZE = os.cpus().length;

const express = require("express");
const expressFileupload = require("express-fileupload");
const cors = require("@src/cors");
const AppRoute = require("@app/routes");

const port = process.env.PORT || 3000;
const app = express();
const appRoute = new AppRoute();

app.use(cors);
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressFileupload());
app.use("/", appRoute.getRoutes());

app.listen(port, () => {
  console.log("server running: http://localhost:" + port);
});
