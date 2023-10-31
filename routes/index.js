import { Router } from "express";
import demonsRoutes from "./demons.js";
import slayersRoutes from "./slayers.js";

const router = Router ();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/houses", demonsRoutes);
router.use("/slayers", slayersRoutes);

export default router;