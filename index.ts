import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

app.get("/topics", (req: express.Request, res: express.Response) => {
  res.send("Chủ đề bài hát");
});

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:${port}`);
});
