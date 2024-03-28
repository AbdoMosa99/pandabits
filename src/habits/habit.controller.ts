import { NextFunction, Request, Response } from 'express';

import * as services from './habit.service';
import { StatusCodes } from 'http-status-codes';


export async function getHabitsHandler(req: Request, res: Response, next: NextFunction) {
    const habits = await services.getUserHabits();
    res.status(StatusCodes.OK).json({results: habits});
}

export async function createHabitHandler(req: Request, res: Response, next: NextFunction) {
    const habit = await services.createHabit(req.body);
    res.status(StatusCodes.OK).json(habit);
};
