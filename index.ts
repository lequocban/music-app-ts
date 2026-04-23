import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

dotenv.config();

database.connect();

import Topic from "./models/topic.model";

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

app.set("views", `./views`);
app.set("view engine", "pug");

app.get("/topics", async (req: express.Request, res: express.Response) => {
  try {
    const topics = await Topic.find({ deleted: false });
    console.log(topics);
    res.render("client/pages/topics/index", { topics });
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:${port}`);
});
