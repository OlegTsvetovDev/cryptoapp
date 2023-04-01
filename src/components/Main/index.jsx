import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import {
  Homepage,
  Exchanges,
  Cryptocurrencies,
  Cryptodetails,
  News,
} from "../";

const Main = () => {
  return (
    <Layout>
      <div className="routes">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/exchanges">
            <Exchanges />
          </Route>
          <Route exact path="/cryptocurrencies">
            <Cryptocurrencies />
          </Route>
          <Route exact path="/crypto/:coinId">
            <Cryptodetails />
          </Route>
          <Route exact path="/news">
            <News simplified={false} />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
};

export default Main;
