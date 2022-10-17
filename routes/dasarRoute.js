const express = require("express");
const dasarController = require("../controllers/dasarController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ msg: "Dasar Page" });
});

router.get("/hello", dasarController.hello);
router.get("/about", dasarController.about);

module.exports = router;
