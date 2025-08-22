const express = require("express");
const router = express.Router();
const bloodController = require("../Controllers/BloodController");

router.post("/insert", bloodController.blood_create_post);

module.exports = router;

