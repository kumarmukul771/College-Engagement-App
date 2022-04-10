const express = require("express");
const { route } = require("express/lib/application");
const authController = require("../controllers/authController")

const router = express.Router();

router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.get("/logout", authController.logout)

router.post("/signup", authController.postSignUp);
router.post("/login",authController.postLogin)


module.exports = router;
