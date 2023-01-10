const app = {
  "http://localhost:3000": true,
};

module.exports = (request, response, next) => {
  const origin = request.header("Origin");
  const debug = process.env.DEBUG == "true" ? true : false;

  if (!debug && !app[origin])
    return response
      .json({
        status: 403,
        message: "Permission denied",
      })
      .status(403);

  response.header("Access-Control-Allow-Origin", origin);
  response.header("Access-Control-Allow-Methods", "*");
  response.header("Access-Control-Allow-Headers", "*");
  return next();
};
