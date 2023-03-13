import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";
import { PORT } from "./config.js";
import { upload } from "./controllers/multer.controller.js";

const app = express();
app.use(cors());

//express static folder
app.use(express.static("/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db
db.connect((err) => {
    if (err) {
        return console.log("error: " + err.message);
    }
    console.log("Connected to MySQL database.");
});

app.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file uploaded");
    } else {
        console.log(req.file.filename);
        var imgsrc = "http:localhost:3000/images/" + req.file.filename;
        var insertData = "INSERT INTO user_file(file_src) VALUES (?)";
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err;
            console.log("file uploaded")
        });
    }
});

app.get("/hello", (req, res) => res.send("Hello World!"));

//404 in case of missing endpoint
app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found",
    });
});

app.listen(PORT, () => console.log(`Server running, listening on port ${PORT}!`));
