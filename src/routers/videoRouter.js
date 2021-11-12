import express from "express";

/* controller */
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/uplod", upload);
videoRouter.get(":id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
