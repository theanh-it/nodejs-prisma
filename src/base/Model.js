const prisma = require("@base/prisma");

module.exports = class Model {
  table;
  primarkey;

  constructor(table, primarkey = "id") {
    this.table = table;
    this.primarkey = primarkey;
    for (let key in prisma[table]) this[key] = prisma[table][key];
  }
};
