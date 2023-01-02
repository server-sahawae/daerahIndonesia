"use strict";
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("./data/districts.json", "utf-8"));
    // console.log(data);
    await queryInterface.bulkInsert("Districts", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Districts");
  },
};
