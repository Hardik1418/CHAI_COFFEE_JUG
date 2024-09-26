const GetchaiCoffeeAndBill = require("../service/chaiCoffee.service");

function homePage(req, res) {
  return res.render("homePage");
}

module.exports = {
  homePage,
};
