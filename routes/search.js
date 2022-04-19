const express = require("express");
const path = require("path");
const Post = require("../model/post");
const router = express.Router();
const searchController = require('../controllers/search');

router.get("/search", searchController.searchpost);
router.get("/search:title", async (req,res)=>{
    const title = req.params.title;
    let data = await Post.find({title: title});

    if (data) {
        let msg = {
            blogs: data
        }
        let dataToSend = await JSON.stringify(msg);
        res.send(dataToSend)
    }else{
        let msg = {
            blogs: "NO BLOGS FOUND"
        }
        let dataToSend = await JSON.stringify(msg);
        res.send(dataToSend)
    }
});
module.exports = router;

