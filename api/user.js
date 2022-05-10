require('dotenv').config();
const axios = require('axios');

module.exports = function(req,res) {
    if(req.method === 'GET'){
        const options = {
            headers:{
                Authorization:`Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
            }
        }
        axios.get("https://api.twitter.com/2/users/1504551646608728064?user.fields=name,username,profile_image_url", options)
        .then(response => {
            return res.json(response.data.data)
        }).catch(error => {
            console.log(error)
        })
    }
}