import React from "react";
import { Route, Switch } from "react-router-dom";
import { BookDetails } from "./book/book_details";
import { Home } from "../pages/Home";
import { Library } from "../pages/Library";
import { FavoriteBookComponent } from "./book/book_favorite";
import { MyLibrary } from "./myLibrary/myLibrary";
import { ReadBook } from "./book/book.read";

export const RouterComponent = () => {
  return (
    <Switch>
      <Route path="/books/read/:orderId" component={ReadBook} />
      <Route path="/books/:book_id" component={BookDetails} />
      <Route path="/myLibrary" component={MyLibrary} />
      <Route path="/favorite" component={FavoriteBookComponent} />
      <Route path="/library" component={Library} />
      <Route path="/" component={Home} />
    </Switch>
  );
};
