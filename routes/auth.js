const express = require("express");
const { route } = require("express/lib/application");
const authController = require("../controllers/authController")

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignUp);

router.post("/signup", authController.postSignUp);
router.post("/login",authController.postLogin)

router.get("/logout", authController.logout)

module.exports = router;
