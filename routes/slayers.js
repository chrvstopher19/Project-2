import { Router } from "express";
import * as controllers from "../controllers/slayers.js";

const router = Router();

router.get("/", controllers.getSlayers);
router.get("/slayer/:id", controllers.getSlayer);
router.post("/slayer", controllers.createslayer);
router.put("/slayer/:id", controllers.updateslayer);
router.delete("/slayer/:id", controllers.deleteslayer);

export default router;