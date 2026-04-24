import { Router } from "express";
const router: Router = Router();

import * as controllers from "../../controllers/client/song.controller";

router.get("/:slugTopic", controllers.list);

router.get("/detail/:slugSong", controllers.detail);
export const songRoutes: Router = router;
