const express = require("express")
const app = express()
const PORT = 5000
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
const post = require("./models/post")
const multer = require("multer")
const { MONGOURI } = require("./key")
const cors = require('cors');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const filenamearr = file.originalname.split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + filenamearr[filenamearr.length - 1]);
    }
})

const upload = multer({ storage: storage })

//var url = "mongodb://localhost:27017/react_instaclone";

//mongoose.connect(url, function (err) {
//console.log(err)
//});

mongoose.connect(MONGOURI)
mongoose.connection.on("connected", () => {
    console.log("connected to mongo")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.use(cors());

app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send({ message: "welcome to instaclone api server" });
})

app.get("/api/v1/posts", async (req, res) => {
    const posts = await post.find();
    res.send({
        posts
    })
})

app.post("/api/v1/post", upload.single("Image"), async function (req, res) {
    console.log(req.body, req.file)
    const { author, location, description } = req.body;
    const Image = req.file.path;
    const postt = await post.create({
        author, location, description, Image
    });
    res.send({
        postt
    })
})

app.listen(PORT, () => {
    console.log("server run in:", PORT)
})