const express = require("express");
const router = express.Router();
const {
  addchaiCoffeeForm,
  addchaiCoffeeFormData,
  chaiCoffee,
} = require("../controllers/addChaiCoffee.controller");

router.get("/", chaiCoffee);
router.get("/addChaiCoffee", addchaiCoffeeForm);
router.post("/addChaiCoffee", addchaiCoffeeFormData);

module.exports = router;
