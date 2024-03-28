import mongoose from "mongoose";

export interface IHabit {
    name: string,
    points: number,
    target: number,
    mandatory: boolean,
};

const habitSchema = new mongoose.Schema<IHabit>({
    name: { type: String, required: true },
    points: { type: Number, required: true },
    target: { type: Number, required: true },
    mandatory: { type: Boolean, required: true },
});

export const HabitModel = mongoose.model<IHabit>('Habit', habitSchema);
