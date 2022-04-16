const express = require("express");
const path = require("path");
const router = express.Router();
const searchController = require('../controllers/search');

router.get("/search", searchController.searchpost);

module.exports = router;

