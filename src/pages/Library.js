import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { Books } from "../component/book/listBook";
import { Categories } from "../component/category/category";
import { Search } from "../component/book/search";
export const Library = () => {
  return (
    <div>
      <div className="main-content-wrapper d-flex clearfix">
        <Search />
        <div className="main-content-wrapper d-flex clearfix">
          <Header />
        </div>
        <Categories />
        <div className="amado_product_area section-padding-100">
          <div className="container-fluid">
            <Books />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
