const Post = require("../model/post");

exports.getAllBlogs = async (req, res) => {
    try { 
        const blogs = await Post.find({type:"Educative Blog"});
        
        res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotices = async (req, res) => {
    try { 
        const notices = await Post.find({type:"Notice"});
        
        res.render("notice.ejs", {notices});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllInterviewExperiences = async (req, res) => {
    try { 
        const blogs = await Post.find({type:"Interview Experience"});
        
        res.render("interview.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllUserBlogs = async (req, res) => {
    try { 
        
        const blogs = await Post.find({author:req.session.user.username});
        
        res.render("profile.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};