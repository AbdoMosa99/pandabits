import express = require("express");

import { validate } from "../middleware/validateSchema.middleware";
import { habitSchema } from "./habit.schema";
import { createHabitHandler, getHabitsHandler } from "./habit.controller";


const habitRouter = express.Router()

habitRouter.route("/")
    .get(getHabitsHandler)
    .post(validate(habitSchema), createHabitHandler);

export default habitRouter;
