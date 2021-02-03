import React from "react";
import { Route, Switch } from "react-router-dom";
import { ListProducts } from "./book/listBook";

export const RouterComponent = () => {
  return (
    <div>
      <Switch>{/* <Route path="/" exact component={ListProducts} /> */}</Switch>
    </div>
  );
};
