import { Router } from "express";

import habitRouter from "./habits/habit.routes";


const router = Router();

router.use("/habits", habitRouter);

export default router;
