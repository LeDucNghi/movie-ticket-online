const express = require("express");
const { signup, signin, getAllUser } = require("../controllers/authController");
const router = express.Router();

// SIGN UP
router.post("/signup", signup);

// SIGN IN
router.post("/signin", signin);

// GET USER LIST
router.get("/getall", getAllUser);

module.exports = router;
