const router = require("express").Router();
const controller = require("../controllers/vaccinesController");

router.post("/", controller.createVaccine)
router.get("/", controller.getAllVaccines)
router.get("/:id", controller.getOneVaccine)



module.exports = router