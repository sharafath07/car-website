import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import carRouter from "./routes/carRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/car", carRouter);

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


connectDB();
connectCloudinary()