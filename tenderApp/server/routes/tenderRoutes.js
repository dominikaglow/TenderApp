const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message: "Get all tenders"});
});

router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get tender ${req.params.id}`});
});

router.route("/").post((req, res) => {
    res.status(200).json({message: "Create tender"});
});

module.exports = router;