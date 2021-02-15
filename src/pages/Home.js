import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { Search } from "../component/book/search";
import { Books } from "../component/book/listBook";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
  useAuth();
  return (
    <div>
      <div className="main-content-wrapper d-flex clearfix">
        <Search />
        <div className="main-content-wrapper d-flex clearfix">
          <Header />
        </div>
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix"></div>
          <Books />
        </div>
      </div>
      <Footer />
    </div>
  );
};
