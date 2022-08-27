import express from "express";
import control from "./C/controller.js";

const router = express.Router();

router.get("", control.render.home);
router.get("/login", control.render.login);
router.get("/register", control.render.register);
router.post("/login", control.process.login);

export default router;
