const express = require("express");
const homeRouter = require("./routes/home.route");
const chaiCoffeeRouter = require("./routes/chaiCoffee.route");
const waterJugRouter = require("./routes/addWaterJug.route");
const billRouter = require("./routes/bill.route");
const billWaterJugRouter = require("./routes/waterJugBill.route");
const connectDB = require("./db/dbconfig");
const path = require("path");
const app = express();
const PORT = 2222;

connectDB;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/chaiCoffee", chaiCoffeeRouter);
app.use("/getBillChaiCoffee", billRouter);
app.use("/waterJug", waterJugRouter);
app.use("/getBillWaterJug", billWaterJugRouter);

app.listen(PORT, () => {
  console.log(`Server is started on PORT: http://localhost:${PORT}`);
});
