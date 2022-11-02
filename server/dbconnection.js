const mongoose = require("mongoose");
const { DBURI } = require("./config.json");
mongoose
  .connect(DBURI)
  .then(console.log("DB connected!"))
  .catch((err) => console.log(err.message));
