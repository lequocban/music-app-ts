import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

dotenv.config();

database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

app.set("views", `./views`);
app.set("view engine", "pug");

app.get("/topics", (req: express.Request, res: express.Response) => {
  res.render("client/pages/topics/index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:${port}`);
});
