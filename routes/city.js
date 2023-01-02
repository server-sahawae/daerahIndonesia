const Controller = require("../controller/city");

const routes = require("express").Router();

routes.get("/", Controller.getCities);
routes.get("/:id/districts", Controller.getDistrictsByCityId);
routes.get("/:id", Controller.getCityById);

module.exports = routes;
