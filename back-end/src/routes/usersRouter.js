import { Router } from "express";
import { UsersController } from "../controller/usersController.js";

const usersRouter = Router();

usersRouter.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  const data = new UsersController().createUser(username, avatar);

  res.status(data.status).send(data.message);
});

export { usersRouter };
