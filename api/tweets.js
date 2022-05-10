const axios = require('axios');
require('dotenv').config()
module.exports = function(req,res){
    if(req.method === 'GET'){
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
    }
};