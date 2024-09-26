const mongoose = require("mongoose");

const chaiCoffeeSchema = new mongoose.Schema(
  {
    chaiqty: {
      type: Number,
      required: true,
    },
    coffeeqty: {
      type: Number,
      required: true,
    },
    session: {
      type: String,
      required: true,
      maxlength: 20,
    },
    date: {
      type: Date,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },
  },
  {
    collection: "ChaiCoffee", 
  }
);

const AddChaiCoffee = mongoose.model("AddChaiCoffee", chaiCoffeeSchema);

module.exports = AddChaiCoffee;
