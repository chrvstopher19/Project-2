import { Router } from "express";
import * as controllers from "../controllers/demons.js";

const router = Router();

router.get("/", controllers.getDemons);
router.get("/:id", controllers.getDemon);
router.post("/", controllers.createDemon);
router.put("/:id", controllers.updateDemon);
router.delete("/:id", controllers.deleteDemon);

export default router;