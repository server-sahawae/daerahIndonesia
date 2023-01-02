const { District, Ward } = require("../models/index");
const fs = require("fs");

module.exports = class Controller {
  static async getDistricts(req, res, next) {
    try {
      const data = await District.findAll({
        attributes: ["id", "name", "CityId"],
        order: [["name", "ASC"]],
      });

      // fs.writeFileSync("./data/districts.json", JSON.stringify(data, null, 2));
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getWardsByDistrictId(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Ward.findAll({
        where: { DistrictId: id },
        attributes: ["id", "name", "DistrictId"],
        order: [["name", "ASC"]],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getDistrictById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await District.findOne({
        where: { id },
        attributes: ["id", "name", "CityId"],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
