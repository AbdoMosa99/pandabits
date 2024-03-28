import mongoose from "mongoose";

export async function dbConnect() {
    try {
        await mongoose.connect(process.env.DB_URL!);
    }
    catch (err) {
        console.error(`Error: ${err}`);
        process.exit(1);
    }
}
