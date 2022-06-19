import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); //Para o código saber que estamos usando json
app.use(cors());

// Dados armazenados

const users = [{username: "bobesponja", avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}];
const tweets = [{username: "bobesponja", tweet: "eu amo o hub"}];

// Rotas de cadastro

app.post("/sign-up", (req, res) => {
    let {username, avatar} = req.body;
    users.push({
        username,
        avatar
    });
    res.send("OK");
});

// Rotas dos Tweets

app.post("/tweets", (req, res) => {
    let {username, tweet} = req.body;
    tweets.push({
        username,
        tweet
    });
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    const tweetsToDisplay = [];
    for (let i=tweets.length; ((i > tweets.length - 10) && (i > 0)); i--) {
        let tweet = tweets[i-1];
        let objeto = users.find(user => user.username === tweet.username);
        tweetsToDisplay.push({
            username: tweet.username,
            avatar: objeto.avatar,
            tweet: tweet.tweet
        });
    };
    res.send(tweetsToDisplay);
});



app.listen(5000, () => {console.log("Servidor rodando!")});