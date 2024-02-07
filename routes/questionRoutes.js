import express from "express";
const router = express.Router();
import { registerExam } from "../controllers/questionController.js";

router.route("/").post(registerExam);

export default router;
