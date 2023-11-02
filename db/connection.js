import mongoose from "mongoose";
mongoose.set("returnOriginal", false);

let MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/demon-slayer-api"

mongoose.set("returnOriginal", false)
mongoose.connect(MONGODB_URI).catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
