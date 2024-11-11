import express, { Application } from "express";
import env from "dotenv";
env.config();

const port: number = parseInt(process.env.PORT as string);
const app: Application = express();

app.listen(port, () => {});
