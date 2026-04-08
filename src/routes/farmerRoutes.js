const express = require("express");
const router = express.Router();
const { getFarmers } = require("../controllers/farmerController");

router.get("/", getFarmers);

module.exports = router;