const routes = require("express").Router();

const provinceRoutes = require("./province");
const cityRoutes = require("./city");
const districtRoutes = require("./district");
const wardRoutes = require("./ward");

routes.use("/province", provinceRoutes);
routes.use("/city", cityRoutes);
routes.use("/district", districtRoutes);
routes.use("/ward", wardRoutes);

module.exports = routes;
