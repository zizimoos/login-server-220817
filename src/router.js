import express from "express";
import control from "./C/controller.js";

const router = express.Router();

router.get("", control.render.home);
router.get("/login", control.render.login);

export default router;
