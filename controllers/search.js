exports.searchpost = (req, res) => {
    res.render("search",{isLoggedIn: req.session.isLoggedIn});
};