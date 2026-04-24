import { topicRoutes } from "./topic.route";
import { songRoutes } from "./song.route";

const clientRoutes = (app: any) => {
  app.use("/topics", topicRoutes);
  app.use("/songs", songRoutes);
};
export default clientRoutes;
