const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require('axios');
require("dotenv").config();
const app = express();
app.use(cors());
const tweets = require('./api/tweets');
const user = require('./api/user')
const PORT = process.env.PORT || 4000
let origin = '*'
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Headers',"Origin, X-Requested-With,Content-Type,Accept,Key,Access-Control-Allow-Headers,Cache-Control,Authorization")
    res.header('Access-Control-Allow-Credentials', 'true')
    next()
})

app.use('/api/tweets', tweets)
app.use('/api/twitter/sustaindao', user)
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "./client/_build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/_build/index.html"), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/api/twitter/sustaindao", async (req, res) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
    },
  };
  axios
    .get(
      "https://api.twitter.com/2/users/1504551646608728064?user.fields=name,username,profile_image_url",
      options
    )
    .then((response) => {
      return res.json(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    }); 
});

app.get('/api/tweets', async (req,res) => {
  const options = {
      headers:{
        Authorization:`Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      }
    }

    axios.get("https://api.twitter.com/2/users/1504551646608728064/tweets?max_results=5&tweet.fields=created_at,text,public_metrics", options)
    .then(response => {
        return res.json(response.data.data)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(PORT);

module.exports = app;
