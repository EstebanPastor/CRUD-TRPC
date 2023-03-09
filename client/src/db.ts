import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    const db = await mongoose.connect("mongodb://localhost/trpcdb");
    console.log("Database is connected to", db.connection.db.databaseName);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
