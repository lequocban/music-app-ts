import { topicRoutes } from "./topic.route";

const clientRoutes = (app: any) => {
  app.use("/topics", topicRoutes);
};
export default clientRoutes;
