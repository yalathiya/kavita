import express from "express";
import { register, login, logout } from "../controllers/auth.js";

const router = express.router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
