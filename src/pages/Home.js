import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { Search } from "../component/book/search";
import { ListProducts } from "../component/book/listBook";

export const Home = () => {
  return (
    <div>
      <div class="main-content-wrapper d-flex clearfix">
        <Search />
        <div className="main-content-wrapper d-flex clearfix">
          <Header />
        </div>
        <div class="products-catagories-area clearfix">
          <div class="amado-pro-catagory clearfix">
            <ListProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
