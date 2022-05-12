// @flow
import React from "react";
import { createRoot } from "react-dom/client";
import Animation from "./components/Animation";
import Tweets from "./components/Tweets";
import "./modules/article";
import "./modules/index";
let root = document.getElementById("root");
let tweets = document.getElementById("latest-tweets");
if (root) {
  const reactRoot = createRoot(root);
  reactRoot.render(<Animation />);
}
if (tweets) {
  const tweetsRoot = createRoot(tweets);
  tweetsRoot.render(<Tweets />);
}