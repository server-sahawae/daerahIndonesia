const Controller = require("../controller/district");

const routes = require("express").Router();

routes.get("/", Controller.getDistricts);
routes.get("/:id/wards", Controller.getWardsByDistrictId);
routes.get("/:id", Controller.getDistrictById);
module.exports = routes;
