import express from "express";
import { getUser, getDashboardStatus } from "../controllers/general.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStatus);

export default router;