import { users } from "./usersServices.js";

class Tweet {
  username;
  tweet;
  avatar;

  constructor(username, tweet, avatar) {
    this.username = username;
    this.tweet = tweet;
    this.avatar = avatar;
  }
}

export class TweetsServices {
  createTweet(tweet, username) {
    if (!username || !tweet) {
      return { status: 400, message: "Todos os campos são obrigatórios!" };
    }

    const { avatar } = users.find((user) => user.username === username);

    const newTweet = new Tweet(username, tweet, avatar);

    tweets.push(newTweet);

    return { status: 200, message: "OK, seu tweet foi criado" };
  }

  getTweetsByOrder(page) {
    if (page && page < 1) {
      return { status: 400, message: "Informe uma página válida!" };
    }
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    if (tweets.length <= 10) {
      return { status: 200, message: [...tweets].reverse() };
    }

    return { status: 200, message: [...tweets].reverse().slice(start, end) };
  }

  getTweetsByName(username) {
    const tweetsDoUsuario = tweets.filter((t) => t.username === username);

    return { status: 200, message: tweetsDoUsuario };
  }
}

export const tweets = [];
