const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controller/authcontroller");

//router object
const router = express.Router();

//register
router.post("/register", registerController);
//login
router.post("/login", loginController);
//logout
router.post("/logout", logoutController);

module.exports = router;
