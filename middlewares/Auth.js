const {
  APLICATION_INVALID,
  UNAUTHORIZED,
  USER_INVALID,
  APPLICATION_INVALID,
} = require("../constants/ErrorKeys");
const { verifyToken } = require("../helpers/jwt");
const { CompanyUsers, Application } = require("../models");

async function CheckAccessCompany(req, res, next) {
  try {
    console.log("masuk");
    const { access_token } = req.headers;
    const data = verifyToken(access_token);
    if (!data.CompanyId || !data.ApplicationId)
      throw { name: APPLICATION_INVALID };
    req.access = data;
    next();
  } catch (error) {
    next(error);
  }
}

async function CheckAccessUserAdmin(req, res, next) {
  try {
    console.log("masuk admin check");
    const { access_token } = req.headers;
    const data = verifyToken(access_token);
    if (data.role != "admin") throw { name: UNAUTHORIZED };
    req.access = data;
    next();
  } catch (error) {
    next(error);
  }
}

async function CheckAccessUserGlobalAccessAdmin(req, res, next) {
  try {
    console.log("masuk admin 2 check");
    const { access_token } = req.headers;
    const data = verifyToken(access_token);
    console.log(data.ApplicationId != "4ea7e682-9016-421b-94c0-73d2e12df422");
    if (
      data.role != "admin" ||
      data.CompanyId != "13258b2f-703f-11ed-b8fb-f07959612163" ||
      data.ApplicationId != "4ea7e682-9016-421b-94c0-73d2e12df422"
    )
      throw { name: UNAUTHORIZED };
    req.access = data;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  CheckAccessCompany,
  CheckAccessUserAdmin,
  CheckAccessUserGlobalAccessAdmin,
};
