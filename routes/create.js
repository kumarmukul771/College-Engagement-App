const express = require("express");
const path = require("path");
const router = express.Router();
const createController = require("../controllers/createController")

router.get("/create-post", createController.getInputForm);

router.post("/create-post", createController.createPost);

// router.get("/create-post-new", (req,res)=>{
//     console.log(req.query)
//     res.send("hii");
// });

module.exports = router
