const axios = require('axios')

let userData = {};
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return `<a class='text-secondary' href="${url}">${url}</a>`;
    })
  }
  
const saveData = async () => {
    try {
        const res = await Promise.all([
            axios.get('/api/twitter/sustaindao'),
            axios.get('/api/tweets'),
        ]);
        let userInfo = res[0].data;
        let tweets = res[1].data
        userData = {
            ...userInfo,
            tweets
        }
        let targetContainer = document.querySelector('.tweets-container')
        const mappedData = userData.tweets.map((tweet) => {
            let profileUrl=`https://twitter.com/${userData.username}`
            let tweetUrl = `https://twitter.com/${userData.username}/status/${tweet.id}`
            return `
              <div class="tweet-card w-full sm:w-4/5 tablet:min-w-100 tablet:w-auto bg-black-smoke rounded-xlg flex min-h-24 items-center" key=${tweet.id} href=${tweetUrl}>
                <div>
                  <div class='flex gap-3 p-4 flex-col xsm:flex-row'>
                    <a target='_blank' href=${profileUrl}>
                        <img class='rounded-full' src=${userData.profile_image_url} alt="user profile image" />
                    </a>
                    <div class="details">
                      <div class='flex gap-2 items-center text-base leading-5'>
                            <a target='_blank' href=${profileUrl} class='font-bold font-display-bold text-gray-jo'>${userData.name}</a>
                            <a target='_blank' href=${profileUrl} class='text-gray-bold'>@${userData.username}</a>
                      </div>
                      <p class='line-clamp-2 max-w-xsl text-white mt-1'>${urlify(tweet.text)}</p>
                    </div>
                  </div>
                </div>
              </div>`;
        }).join('');
        targetContainer.innerHTML = mappedData
      } catch {
        throw Error("Promise failed");
      }
}

saveData()

