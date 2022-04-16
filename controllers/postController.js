const Post = require("../model/post");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Post.find({});
        let blogs_eg = {
            blogs: blogs
        }
        let data = await JSON.stringify(blogs_eg)
        res.send(data);
        // res.render("blog.ejs", {blogs});
    } catch (err) {
        console.log(err);
    }
};

exports.getAllNotices = async (req, res) => {
    try {
        const notices = await Post.find({type: 'notice'});
        res.render("notice.ejs", {notices});
    } catch (err) {
        console.log(err);
    }
};
