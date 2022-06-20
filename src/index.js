import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); //Para o código saber que estamos usando json
app.use(cors());

// Dados armazenados

const users = [];
const tweets = [];

// Rotas de cadastro

app.post("/sign-up", (req, res) => {
    let {username, avatar} = req.body;
    users.push({
        username,
        avatar
    });
    res.status(201).send("OK");
});

// Rotas dos Tweets

app.post("/tweets", (req, res) => {
    let {username, tweet} = req.body;
    tweets.push({
        username,
        tweet
    });
    res.status(201);send("OK");
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