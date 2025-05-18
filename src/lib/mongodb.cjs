import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://adityasuman440:adi@cluster0.q5kaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Validate MongoDB URI
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not defined.");
} else {
  console.log("MongoDB URI loaded.");
}

// Use a global variable to prevent multiple connections in development
let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Connecting to MongoDB...");
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongoose) => {
        console.log("Connected to MongoDB ✅");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}


connectToDatabase();
// Store global cache in development mode
if (process.env.NODE_ENV !== "production") {
  global.mongoose = cached;
}
