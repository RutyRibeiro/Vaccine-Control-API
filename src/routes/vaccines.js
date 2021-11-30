const router = require("express").Router();
const controller = require("../controllers/vaccinesController");

router.post("/", controller.createVaccine)


module.exports = router