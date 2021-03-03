import React, { useState } from "react";
import { Books } from "../component/book/listBook";
import { Slider } from "../component/header/slide";

export const Home = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 4,
    searchKey: "",
  });
  const loadMore = () => {
    setPagination({ ...pagination, limit: pagination.limit + 4 });
  };
  return (
    <div>
      <Slider />
      <div className="product-rows section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="section-header text-center">
                <h2 className="h2">New Books</h2>
              </div>
            </div>
          </div>
          <div className="grid-products">
            <Books
              pagination={pagination}
              position="col-6 col-sm-2 col-md-3 col-lg-3 item"
            />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <button className="btn btn-dark" onClick={() => loadMore()}>
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
