import { db } from "../db.js";

export const uploadImage = (req, res) => {
    if (!req.file) {
        console.log("No file uploaded");
    } else {
        console.log(req.file.filename);
        var imgsrc = "http://localhost:3000/images/" + req.file.filename;
        var insertData = "INSERT INTO user_file(file_src) VALUES (?)";
        db.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err;
            console.log("file uploaded");
        });
    }
};

export const retrieveImagesUrl = (req, res) => {
    const query = "SELECT file_src FROM user_file";
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "An error occurred while retrieving the image URLs." });
        } else {
            const urls = results;
            res.json(urls);
        }
    });
};
