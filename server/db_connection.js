const mongoose = require("mongoose");
const { DB_URI } = require("./config.json");
mongoose
  .connect(DB_URI)
  .then(console.log("DB connected!"))
  .catch((err) => console.log(err.message));
// mongoose.connect(DB_URI,{}, (err) => {
//   if (err) console.log(err.message);
//   else console.log("Connected to DB!");
// });
