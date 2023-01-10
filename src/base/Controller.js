module.exports = class Controller {
  constructor(model) {
    this.model = model;
    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getSingle = this.getSingle.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  send(response, { data = "", message = "success", status = 200 }) {
    return response
      .json({
        status,
        message,
        data,
      })
      .status(status);
  }
  sendError(response, { data = "", message = "error", status = 400 }) {
    console.log(data);
    return response
      .json({
        status,
        message,
        data: process.env.DEBUG ? data : "error",
      })
      .status(status);
  }
  create(request, response) {
    this.model
      .create({ data: request.body })
      .then((result) => this.send(response, { data: result }))
      .catch((error) => this.sendError(response, { data: error }));
  }
  getAll(request, response) {
    this.model
      .findMany()
      .then((result) => this.send(response, { data: result }))
      .catch((error) => this.sendError(response, { data: error }));
  }
  getSingle(request, response) {
    const where = {};
    where[this.model.primarkey] = request.params.id;
    this.model
      .findFirst({ where })
      .then((result) => this.send(response, { data: result }))
      .catch((error) => this.sendError(response, { data: error }));
  }
  update(request, response) {
    const where = {};
    where[this.model.primarkey] = request.params.id;
    this.model
      .update({ where })
      .then((result) => this.send(response, { data: result }))
      .catch((error) => this.sendError(response, { data: error }));
  }
  delete(request, response) {
    const where = {};
    where[this.model.primarkey] = request.params.id;
    this.model
      .delete({ where })
      .then((result) => this.send(response, { data: result }))
      .catch((error) => this.sendError(response, { data: error }));
  }
};
