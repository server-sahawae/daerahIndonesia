const {
  APLICATION_INVALID,
  USER_INVALID,
  JWT_INVALID,
  UNAUTHORIZED,
  JWT_EXPIRED,
  EMAIL_DUPLICATE,
  USERNAME_DUPLICATE,
  INPUT_EMAIL_PHONE_USERNAME,
  PHONE_DUPLICATE,
  IDNUMBER_DUPLICATE,
} = require("../constants/ErrorKeys");

module.exports = function ErrorHandler(err, req, res, next) {
  switch (err.name) {
    case APLICATION_INVALID:
      data = {
        code: 404,
        name: APLICATION_INVALID,
        message: "Application not found.",
      };
      break;
    case USER_INVALID:
      data = {
        code: 400,
        name: USER_INVALID,
        message: "username/password invalid",
      };
      break;
    case JWT_INVALID:
      data = {
        code: 400,
        name: JWT_INVALID,
        message: "Your token is invalid.",
      };
      break;
    case UNAUTHORIZED:
      data = {
        code: 401,
        name: UNAUTHORIZED,
        message: "You have no autorization",
      };
      break;
    case JWT_EXPIRED:
      data = {
        code: 401,
        name: UNAUTHORIZED,
        message: "Your session has been expired",
      };
      break;
    case EMAIL_DUPLICATE:
      data = {
        code: 400,
        name: EMAIL_DUPLICATE,
        message: "This email is already used",
      };
      break;
    case USERNAME_DUPLICATE:
      data = {
        code: 400,
        name: USERNAME_DUPLICATE,
        message: "This username is already used",
      };
      break;
    case PHONE_DUPLICATE:
      data = {
        code: 400,
        name: PHONE_DUPLICATE,
        message: "This phone number is already used",
      };
      break;
    case IDNUMBER_DUPLICATE:
      data = {
        code: 400,
        name: IDNUMBER_DUPLICATE,
        message: "This ID Number number is already used",
      };
      break;
    case INPUT_EMAIL_PHONE_USERNAME:
      data = {
        code: 400,
        name: INPUT_EMAIL_PHONE_USERNAME,
        message:
          "Please input at least email,username, ID Number or phone number",
      };
      break;

    default:
      data = {
        code: 500,
        name: "ISE",
        message: "INTERNAL SERVER ERROR",
      };
      break;
  }
  res.status(data.code).json({ message: data.message });
};
