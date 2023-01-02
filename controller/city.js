const { City, District } = require("../models/index");
const fs = require("fs");

module.exports = class Controller {
  static async getCities(req, res, next) {
    try {
      const data = await City.findAll({
        attributes: ["id", "name", "ProvinceId"],
        order: [["name", "ASC"]],
      });

      // fs.writeFileSync("./data/city.json", JSON.stringify(data, null, 2));
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getDistrictsByCityId(req, res, next) {
    try {
      const { id } = req.params;
      const data = await District.findAll({
        where: { CityId: id },
        attributes: ["id", "name", "CityId"],
        order: [["name", "ASC"]],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getCityById(req, res, next) {
    try {
      const { id } = req.params;
      const data = await City.findOne({
        where: { id },
        attributes: ["id", "name", "ProvinceId"],
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
