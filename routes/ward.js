const Controller = require("../controller/ward");

const routes = require("express").Router();

routes.get("/", Controller.getWards);
routes.get("/:id", Controller.getWardsById);

module.exports = routes;
