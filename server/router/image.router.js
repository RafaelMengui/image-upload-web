import { Router } from "express";
import { uploadImage, retrieveImagesUrl } from "../controllers/image.controller.js";
import { upload } from "../controllers/multer.controller.js";


const router = Router();

router.post("/upload", upload.single("file"), uploadImage);

router.get("/images", retrieveImagesUrl);

export default router;