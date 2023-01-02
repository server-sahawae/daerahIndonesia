const Controller = require("../controller/province");

const routes = require("express").Router();

routes.get("/", Controller.getProvinces);
routes.get("/:id/cities", Controller.getCitiesByProvinceId);
routes.get("/:id", Controller.getProvinceById);

module.exports = routes;
