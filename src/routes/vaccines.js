const router = require("express").Router();
const controller = require("../controllers/vaccinesController");

router.post("/", controller.createVaccine)
router.get("/", controller.getAllVaccines)

module.exports = router