const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jscodeController,
  scifyimageController,
} = require("../controller/geminiaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/jscode", jscodeController);
router.post("/scifyimage", scifyimageController);

module.exports = router;
