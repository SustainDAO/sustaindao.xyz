import axios from "axios";
import React, { useEffect, useState } from "react";
const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const renderText = (txt) =>
  txt.split(" ").map((part) =>
    URL_REGEX.test(part) ? (
      <a target="_blank" className="text-secondary" href={part}>
        {part}{" "}
      </a>
    ) : (
      part + " "
    )
  );
function Tweets() {
  const [data, setData] = useState({});
  useEffect(() => {
    Promise.all([
      axios.get("/api/twitter/sustaindao"),
      axios.get("/api/tweets"),
    ])
      .then((res) => {
        setData({
          ...res[0].data,
          tweets: res[1].data,
        });
        return res;
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h3 className="text-center text-white text-4xl tablet:text-5xl font-display-bold">
        Latest tweets
      </h3>
      <div className="tweets-container flex flex-wrap justify-center mt-16 gap-14 max-w-5xl mx-auto">
        {data.tweets?.map((tweet) => {
          let tweetUrl = `https://twitter.com/${data.username}/status/${tweet.id}`;
          let profileUrl = `https://twitter.com/${data.username}`;
          const handleClick = () => {
            window.open(tweetUrl, "_blank");
          };
          return (
            <div
              key={tweet.id}
              onAuxClick={handleClick}
              onClick={handleClick}
              className="tweet-card cursor-pointer w-full sm:w-4/5 tablet:min-w-100 tablet:w-auto bg-black-smoke rounded-xlg flex min-h-24 items-center"
            >
              <div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex gap-3 p-4 flex-col xsm:flex-row"
                >
                  <a target="_blank" href={profileUrl}>
                    <img
                      className="rounded-full"
                      src={data.profile_image_url}
                      alt="user profile image"
                    />
                  </a>
                  <div className="details">
                    <div className="flex gap-2 items-center text-base leading-5">
                      <a
                        target="_blank"
                        href={profileUrl}
                        className="font-bold font-display-bold text-gray-jo"
                      >
                        {data.name}
                      </a>
                      <a
                        target="_blank"
                        href={profileUrl}
                        className="text-gray-bold"
                      >
                        @{data.username}
                      </a>
                    </div>
                    <p className="line-clamp-2 max-w-xsl text-white mt-1">
                      {renderText(tweet.text)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tweets;
