import path from "path";
import multer from "multer";

//multer
export var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "public/images/");
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

export var upload = multer({
    storage: storage,
});
