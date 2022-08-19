import express from "express";
import path from "path";
import cors from "cors";

import HomeRouter from "./router.js";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use(cors());
app.use(express.json());
app.use(express.static(`${path.resolve()}/public`));

app.use("/", HomeRouter);

export default app;
