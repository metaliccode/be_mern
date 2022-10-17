const express = require("express");
const contactController = require("../controllers/contactController");

const router = express.Router();

router.post("/", contactController.store);
router.get("/", contactController.getAll);
router.get("/:id", contactController.getById);
router.put("/:id", contactController.update);
router.delete("/:id", contactController.destroyData);

module.exports = router;
