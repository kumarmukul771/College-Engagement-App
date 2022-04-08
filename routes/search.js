const express = require("express");
const path = require("path");
const search = require('../controllers/search');
const router = express.Router();

router.get("/search", search.searchpost);

module.exports = router;
