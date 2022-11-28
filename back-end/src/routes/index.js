import { Router } from "express";
import { tweetsRouter } from "./tweetsRouter.js";
import { usersRouter } from "./usersRouter.js";

const router = Router();

router.use(tweetsRouter).use(usersRouter);

export default router;
