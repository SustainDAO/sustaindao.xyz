// @flow
import React from "react";
import ReactDOM from "react-dom";
import Animation from "./components/Animation";
import Tweets from "./components/Tweets";
import "./modules/article";
import "./modules/index";
// import './modules/fetchTweets'
ReactDOM.render(<Animation />, document.getElementById("root"));
ReactDOM.render(<Tweets/>, document.getElementById('latest-tweets'))