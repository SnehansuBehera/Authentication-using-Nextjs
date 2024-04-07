import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const DATABASE_URL = process.env.MONGO_URI;
        mongoose.connect(DATABASE_URL!);

        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('Database connected successfully...');
        })
        connection.on('error', (err) => {
            console.log(err);
            process.exit();
        })

    } catch (error: any) {
        console.log(error.message)
    }
}