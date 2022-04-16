

const Post = require("../model/post");

exports.getInputForm =(req, res) => {
    res.render("create-post.ejs");
}

exports.createPost = async (req, res) => {
    let postData = new Post({
        title: req.body.title,
        content: req.body.content,
        type: "Blog",
        author: "Mukul",
        date: new Date(),
        upvote: 0
    })

    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            type: "Blog",
            author: "Mukul",
            date: new Date(),
            upvote: 0
        })
        res.redirect("/blog");
        
    } catch (err) {
        console.log(err)
    }
}