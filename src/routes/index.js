const path = require("path")
const express = require("express");
const router = express.Router();

router.use("/", express.static(path.join(__dirname, "../../documentation")))

module.exports = router