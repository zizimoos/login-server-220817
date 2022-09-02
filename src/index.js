import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();

import HomeRouter from "./router.js";

const accessLogStream = fs.createWriteStream(`${path.resolve()}/access.log`, {
  flag: "a",
});

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/V/views");

app.use(cors());
app.use(express.json());
app.use(express.static(`${path.resolve()}/public`));
app.use(
  morgan(`common`, {
    stream: accessLogStream,
  })
);
app.use(morgan(`:method :url :response-time ms :status  / TIME : :date[web]`));

app.use("/", HomeRouter);

export default app;
