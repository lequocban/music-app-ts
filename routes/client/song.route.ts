import { Router } from "express";
const router: Router = Router();

import * as controllers from "../../controllers/client/song.controller";

router.get("/:slugTopic", controllers.list);

export const songRoutes: Router = router;
