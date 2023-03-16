import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import imageRoutes from "./router/image.router.js"
import { db } from "./db.js";

const app = express();
app.use(cors());

//express static folder
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(imageRoutes);

//db connection check
db.connect((err) => {
    if (err) {
        return console.log("error: " + err.message);
    }
    console.log("Connected to MySQL database.");
});

app.get("/hello", (req, res) => res.send("Hello World!"));

//404 in case of missing endpoint
app.use((req, res, next) => {
    res.status(404).json({
        message: "endpoint not found",
    });
});

export default app;