const { Province, City } = require("../models/index");
const fs = require("fs");

module.exports = class Controller {
  static async getProvinces(req, res, next) {
    try {
      const data = await Province.findAll({
        attributes: ["id", "name"],
        order: [["name", "ASC"]],
      });

      // fs.writeFileSync("./data/province.json", JSON.stringify(data, null, 2));
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getCitiesByProvinceId(req, res, next) {
    try {
      const { id } = req.params;
      const data = await City.findAll({
        where: { ProvinceId: id },
        attributes: ["id", "name", "ProvinceId"],
        order: [["name", "ASC"]],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getProvinceById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await Province.findOne({
        where: { id },
        attributes: ["id", "name"],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
