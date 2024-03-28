import { IHabit, HabitModel } from "./habit.model";


export async function getUserHabits() {
    const habits = await HabitModel.find();
    return habits;
}

export async function createHabit(habitData: IHabit) {
    const habit = new HabitModel(habitData);
    await habit.save();
    return habit as IHabit;
}
