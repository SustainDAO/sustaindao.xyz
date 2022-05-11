// @flow
import React from "react";
import { createRoot } from 'react-dom/client';
import Animation from "./components/Animation";
import Tweets from "./components/Tweets";
import "./modules/article";
import "./modules/index";
const root = createRoot(document.getElementById('root'));
const tweets = createRoot(document.getElementById('latest-tweets'))
root.render(<Animation />)
tweets.render(<Tweets/>)