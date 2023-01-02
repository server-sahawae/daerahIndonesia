"use strict";
const fs = require("fs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const data = await JSON.parse(
      fs.readFileSync("./data/wards.json", "utf-8")
    );
    // console.log(data);
    await queryInterface.bulkInsert("Wards", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wards");
  },
};
