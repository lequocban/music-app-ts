import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";

import clientRoutes from "./routes/client/index.route";

dotenv.config();
database.connect();

const app: Express = express();
const port: number | string = process.env.PORT || 5000;

clientRoutes(app);

app.use(express.static("public"));

app.set("views", `./views`);
app.set("view engine", "pug");

app.listen(port, () => {
  console.log(`App listening on port ${port} http://localhost:${port}`);
});
