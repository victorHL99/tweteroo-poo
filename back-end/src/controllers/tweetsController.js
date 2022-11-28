import { TweetsServices } from "../services/tweetsServices.js";

export class TweetsController {
  createTweet(tweet, username) {
    return new TweetsServices().createTweet(tweet, username);
  }

  getTweetsByOrder(page) {
    return new TweetsServices().getTweetsByOrder(page);
  }

  getTweetsByName(username) {
    return new TweetsServices().getTweetsByName(username);
  }
}
