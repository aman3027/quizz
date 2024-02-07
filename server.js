import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import questionRoutes from './routes/questionRoutes.js'
const port = 8080;
const app = express();
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());
app.use(express.urlencoded());
app.use("/api/users", userRoutes);
app.use('/api/question', questionRoutes)
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
