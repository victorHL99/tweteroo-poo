import { Router } from "express";
import { TweetsController } from "../controller/tweetsContoller.js";

const tweetsRouter = Router();

tweetsRouter
  .post("/tweets", (req, res) => {
    const { tweet, username } = req.body;

    const data = new TweetsController().createTweet(tweet, username);

    res.status(data.status).send(data.message);
  })
  .get("/tweets", (req, res) => {
    const { page } = req.query;

    const data = new TweetsController().getTweetsByOrder(page);

    res.status(data.status).send(data.message);
  })
  .get("/tweets/:username", (req, res) => {
    const { username } = req.params;

    const data = new TweetsController().getTweetsByName(username);

    res.status(data.status).send(data.message);
  });

export { tweetsRouter };
