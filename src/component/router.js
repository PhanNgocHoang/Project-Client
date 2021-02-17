import React from "react";
import { Route, Switch } from "react-router-dom";
import { BookDetails } from "./book/book_details";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";

export const RouterComponent = () => {
  return (
    <Switch>
      <Route path="/books/:book_id" component={BookDetails} />
      <Route path="/library" component={Library} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
