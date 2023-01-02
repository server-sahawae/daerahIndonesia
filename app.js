if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const ErrorHandler = require("./middlewares/ErrorHandler");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: true, limit: 10485760 }));
app.use(express.json());

app.use(routes);
app.use(ErrorHandler);
app.listen(port, () => {
  console.log(`gloabalAccess listening on port ${port}`);
});
