require("./dbconnection");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const Teacher = require("./models/Teacher");
const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.get("/", async (req, res) => {
  const t = await Teacher.findById("6361501360cfaf021937d914");
  res.send(t);
});
app.use("/auth", require("./routes/auth"));
app.use("/purchase", require("./routes/purchases"));
app.use("/materials", require("./routes/materials"));
app.use("/withdrawal", require("./routes/withdrawals"));
app.listen(8000, () => console.log("Server running..."));
