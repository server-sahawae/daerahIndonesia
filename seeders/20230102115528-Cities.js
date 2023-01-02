"use strict";
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/cities.json", "utf-8"));
    await queryInterface.bulkInsert("Cities", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities");
  },
};
