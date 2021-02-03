import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { Search } from "../component/book/search";
import { LoginComponent } from "../component/auth/login";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  return (
    <div>
      <div class="main-content-wrapper d-flex clearfix">
        <Search />
        <div className="main-content-wrapper d-flex clearfix">
          <Header />
        </div>
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix">
            <div>
              <LoginComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
