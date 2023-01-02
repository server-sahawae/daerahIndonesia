const { Ward } = require("../models/index");
const fs = require("fs");

module.exports = class Controller {
  static async getWards(req, res, next) {
    try {
      const data = await Ward.findAll({
        attributes: ["id", "name", "DistrictId"],
        order: [["name", "ASC"]],
      });

      // fs.writeFileSync("./data/districts.json", JSON.stringify(data, null, 2));
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getWardsById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Ward.findOne({
        where: { id },
        attributes: ["id", "name", "DistrictId"],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
