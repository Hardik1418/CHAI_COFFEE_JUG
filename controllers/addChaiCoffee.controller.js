const AddChaiCoffee = require("../service/addChaiCoffeeForm.service");
const GetchaiCoffeeAndBill = require("../service/chaiCoffee.service");

async function chaiCoffee(req, res) {
  try {
    const totalChai = await GetchaiCoffeeAndBill.getTotalChai();

    const totalCoffee = await GetchaiCoffeeAndBill.getTotalCoffee();

    const totalBill = await GetchaiCoffeeAndBill.getTotalBill();

    return res.render("chaiCoffee", { totalChai, totalCoffee, totalBill });
  } catch (error) {
    console.error("Error retrieving bills:", error);
    return res.status(500).send({
      message: "An error occurred while retrieving bills.",
    });
  }
}

function addchaiCoffeeForm(req, res) {
  return res.render("addChaiCoffeeForm");
}

async function addchaiCoffeeFormData(req, res) {
  try {
    const { chai, coffee, session, date } = req.body;

    const totalamount = chai * 10 + coffee * 15;
    console.log("totalamount:", totalamount);

    const chaiCoffeeDetails = {
      chaiqty: chai,
      coffeeqty: coffee,
      session: session,
      date: date,
      totalamount: totalamount,
    };

    const result = await AddChaiCoffee.addChaiCoffeeData(chaiCoffeeDetails);

    if (!result) {
      return res.status(500).send({
        message: "Failed to process data.",
      });
    }

    return res.redirect("/chaiCoffee");
  } catch (error) {
    console.error("Error while processing data:", error);
    return res.status(500).send({
      message: "An error occurred while processing your request.",
    });
  }
}

module.exports = {
  addchaiCoffeeForm,
  addchaiCoffeeFormData,
  chaiCoffee,
};
