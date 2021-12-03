const router = require("express").Router();
const controller = require("../controllers/vaccinesController");

router.post("/", controller.createVaccine)
router.get("/", controller.getAllVaccines)
router.get("/:id", controller.getOneVaccine)
router.patch("/:id/vaccinated", controller.setVaccinated)
router.delete("/", controller.deleteAll)

module.exports = router