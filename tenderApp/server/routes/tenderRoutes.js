const express = require("express");
const router = express.Router();
const {getTenders, getTender, createTender} = require("../controllers/tenderController");

router.route("/").get(getTenders).post(createTender);

router.route("/:id").get(getTender);

module.exports = router;