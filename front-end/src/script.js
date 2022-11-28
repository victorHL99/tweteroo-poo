let _username = "";

class Auth {
  username;
  picture;

  constructor() {
    this.username = document.querySelector("#username").value;
    this.picture = document.querySelector("#picture").value;
  }

  signUp() {
    axios
      .post("http://localhost:5001/sign-up", {
        username: this.username,
        avatar: this.picture,
      })
      .then(() => {
        _username = this.username;
        new Tweet().getTweets();
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao fazer cadastro! Consulte os logs.");
      });
  }
}

class Tweet {
  getTweets() {
    axios.get("http://localhost:5000/tweets").then((response) => {
      const tweets = response.data;
      let tweetsHtml = "";

      tweets.forEach((tweet) => {
        tweetsHtml += `
        <div class="tweet">
          <div class="tweet-header">
            <img src="${tweet.avatar}" />
            <div class="tweet-header-info">
              <h3>${tweet.username}</h3>
              <h4>${tweet.date}</h4>
            </div>
          </div>
          <div class="tweet-content">
            <p>${tweet.content}</p>
          </div>
        </div>
      `;
      });

      document.querySelector("#tweets").innerHTML = tweetsHtml;
      document.querySelector(".pagina-inicial").classList.add("hidden");
      document.querySelector(".tweets-page").classList.remove("hidden");
    });
  }

  postTweet() {
    const tweet = document.querySelector("#tweet").value;

    axios
      .post("http://localhost:5000/tweets", {
        username: _username,
        tweet,
      })
      .then(() => {
        document.querySelector("#tweet").value = "";
        this.getTweets();
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao fazer post! Consulte os logs.");
      });
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}
