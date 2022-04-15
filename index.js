const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require("express-session")
const MongoDBStore = require("connect-mongodb-session")(session);
const {flash} = require("express-flash-message")
const csrf = require("csurf");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const createRoutes = require("./routes/create");
const searchRoutes = require("./routes/search");
const errorRoutes = require("./routes/errorPage")
const req = require("express/lib/request");
const MONGODB_URI = "mongodb://localhost:27017/collegeApp"


const store = new MongoDBStore({uri: MONGODB_URI, collection: 'sessions'})

let csrfProtection = csrf()
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(session({secret: "my secret", resave: false, saveUninitialized: false, store: store}));

app.use(flash({sessionKeyName: 'flashMessage'}));

app.use(csrfProtection);
app.use(authRoutes);
app.use(createRoutes);
app.use(postRoutes);
app.use(searchRoutes);
app.use(errorRoutes);
app.get("/", (req, res) => { // const isLoggedIn = req.get('Cookie').split(";")[1].trim().split("=")[1] == 'True';
    const isLoggedIn = req.session.isLoggedIn;
    console.log(req.session.user)
    const {username} = req.session.user;
    res.render("home.ejs", {isLoggedIn,username});
});

// app.use((req,res)=>{
//     req.session.isLoggedIn;
//     req.session.user;
//     req.csrfToken();
// })

app.listen(3000, () => {
    console.log("Listening at 3000");
});

mongoose.connect(MONGODB_URI, () => {
    console.log("connected to db");
})