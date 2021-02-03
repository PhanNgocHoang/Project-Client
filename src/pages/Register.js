import React from "react";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import { Search } from "../component/book/search";
import { RegisterComponent } from "../component/auth/register";

export const RegisterPage = () => {
  return (
    <div>
      <div class="main-content-wrapper d-flex clearfix">
        <Search />
        <div className="main-content-wrapper d-flex clearfix">
          <Header />
        </div>
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix">
            <div
              className="container"
              style={{ marginTop: "10%", marginLeft: "15%" }}
            >
              <RegisterComponent />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
