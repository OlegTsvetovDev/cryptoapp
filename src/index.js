import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";

const options = {
  method: "GET",
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "15dda18599msh1fcdea5364ec4aep194886jsn88bf55a95f78",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

fetch(
  "https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=10&freshness=Day&textFormat=Raw&safeSearch=Off",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
