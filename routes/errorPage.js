const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/errorPage", (req,res)=>{
    res.render("errorPage");
});


module.exports = router;