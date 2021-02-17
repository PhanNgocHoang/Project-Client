import React, { useState } from "react";
import { Categories } from "../component/category/category";
import { Books } from "../component/book/listBook";
export const Library = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    searchKey: "",
  });
  const loadMore = () => {
    setPagination({ ...pagination, limit: pagination.limit + 4 });
  };
  return (
    <div>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <img
              className="blur-up lazyload"
              data-src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
              src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
            />
          </div>
          <div className="collection-hero__title-wrapper">
            <h1 className="collection-hero__title page-width">
              Shop Left Sidebar
            </h1>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          {/*Sidebar*/}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
            <div className="closeFilter d-block d-md-none d-lg-none">
              <i className="icon icon anm anm-times-l" />
            </div>
            <div className="sidebar_tags">
              <Categories />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="category-description">
              <h3>Category Description</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing.
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
            <hr />
            <div className="productList product-load-more">
              {/*Toolbar*/}
              <button
                type="button"
                className="btn btn-filter d-block d-md-none d-lg-none"
              >
                {" "}
                Product Filters
              </button>
              <div className="toolbar">
                <div className="filters-toolbar-wrapper">
                  <div className="row">
                    <div className="col-2 col-md-2 col-lg-2 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                      <span className="filters-toolbar__product-count">
                        Showing: 22
                      </span>
                    </div>
                    <div className="col-10 col-md-10 col-lg-10 text-right">
                      <div className="filters-toolbar__item">
                        <label htmlFor="SortBy" className="hidden">
                          Sort
                        </label>
                        <select
                          name="SortBy"
                          id="SortBy"
                          className="filters-toolbar__input filters-toolbar__input--sort"
                        >
                          <option value="title-ascending" selected="selected">
                            Sort
                          </option>
                          <option>Best Selling</option>
                          <option>Alphabetically, A-Z</option>
                          <option>Alphabetically, Z-A</option>
                          <option>Price, low to high</option>
                          <option>Price, high to low</option>
                          <option>Date, new to old</option>
                          <option>Date, old to new</option>
                        </select>
                        <input
                          className="collection-header__default-sort"
                          type="hidden"
                          defaultValue="manual"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-products grid--view-items">
              <Books
                position="col-6 col-sm-6 col-md-4 col-lg-3 item"
                pagination={pagination}
              />
            </div>
            <div className="infinitpaginOuter">
              <div className="infinitpagin">
                <button
                  onClick={() => {
                    loadMore();
                  }}
                  className="btn loadMore"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
