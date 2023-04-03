import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  Exchanges,
  Exchangedetails,
  Cryptocurrencies,
  Cryptodetails,
  News,
  NotFound,
} from "../";

const Main = () => {
  return (
    <Layout>
      <div className="routes">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/exchanges" component={Exchanges} />
          <Route exact path="/exchanges/:coinId" component={Exchangedetails} />
          <Route exact path="/cryptocurrencies" component={Cryptocurrencies} />
          <Route
            exact
            path="/cryptocurrencies/:coinId"
            component={Cryptodetails}
          />
          <Route exact path="/news" component={News} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Layout>
  );
};

export default Main;
