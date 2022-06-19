import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); //Para o código saber que estamos usando json
app.use(cors());

const users = [{username: "bobesponja", avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}];
const tweets = [{username: "bobesponja", tweet: "eu amo o hub"}];

app.post("/sign-up", (req, res) => {
    let {username, avatar} = req.body;
    users.push({
        username,
        avatar
    });
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    let {username, tweet} = req.body;
    tweets.push({
        username,
        tweet
    });
    res.send("OK");
})











app.listen(5000, () => {console.log("Servidor rodando!")});