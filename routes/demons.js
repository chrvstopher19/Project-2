import { Router } from "express";
import * as controllers from "../controllers/demons.js";

const router = Router();

router.get("/", controllers.getdemons);
router.get("/demon/:id", controllers.getdemon);
router.post("/demon", controllers.createdemon);
router.put("/demon/:id", controllers.updatedemon);
router.delete("/demon/:id", controllers.deletedemon);

export default router;