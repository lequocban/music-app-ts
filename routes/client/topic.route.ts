import { Router } from "express";
const router: Router = Router();

import * as controllers from "../../controllers/client/topic.controller";

router.get("/", controllers.index);

export const topicRoutes: Router = router;
