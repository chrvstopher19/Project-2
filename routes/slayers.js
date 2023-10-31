import { Router } from "express";
import * as controllers from "../controllers/slayers.js";

const router = Router();

router.get("/", controllers.getSlayer);
router.get("/:id", controllers.getSlayer);
router.post("/", controllers.createSlayer);
router.put("/:id", controllers.updateSlayer);
router.delete("/:id", controllers.deleteSlayer);

export default router;