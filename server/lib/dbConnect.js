import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "react-login-with-node",
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Failed to connect to database!");
    console.error(error); // Optionally log the error for debugging purposes
  }
};

export default dbConnect;
