import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { ListProducts } from "../component/book/listBook";
import { Categories } from "../component/category/category";
import { Search } from "../component/book/search";
export const Library = () => {
  return (
    <div>
      <div class="main-content-wrapper d-flex clearfix">
        <Search />
        <Header />
        <Categories />
        <div class="amado_product_area section-padding-100">
          <div class="container-fluid">
            <ListProducts />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
