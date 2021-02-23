import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { getBookDetails } from "../../api/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export const BookDetails = (props) => {
  const bookId = props.match.params.book_id;
  const [bookDetail, setBookDetail] = useState({});
  const [authors, setAuthors] = useState([]);
  const [publisher, setPublisher] = useState({});
  const [bookDescription, setBookDescription] = useState();
  const getBook = async (bookId) => {
    const book = await getBookDetails(bookId);
    setBookDetail(book.data.data);
    setAuthors(book.data.data.authors);
    setPublisher(book.data.data.publisher);
    setBookDescription(book.data.data.description);
  };
  useEffect(() => {
    getBook(bookId);
  }, []);
  return (
    <div id="MainContent" className="main-content" role="main">
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="index.html" title="Back to the home page">
            Books
          </a>
          <span aria-hidden="true">›</span>
          <span>{bookDetail.book_name}</span>
        </div>
      </div>
      {/*End Breadcrumb*/}
      <div
        id="ProductSection-product-template"
        className="product-template__container prstyle2 container"
      >
        {/*#ProductSection-product-template*/}
        <div className="product-single product-single-1">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-details-img product-single__photos bottom">
                <div className="zoompro-wrap product-zoom-right pl-20">
                  <div className="zoompro-span">
                    <img
                      className="blur-up lazyload zoompro"
                      alt=""
                      src={bookDetail.images ? bookDetail.images : null}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-single__meta">
                <h1 className="product-single__title">
                  {bookDetail.book_name}
                </h1>
                <div className="product-nav clearfix">
                  <a href="#" className="next" title="Next">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </div>
                <div className="prInfoRow">
                  <div className="product-stock">
                    Author:
                    {bookDetail.authors
                      ? authors.map((item) => (
                          <span style={{ marginLeft: 3 }} className="instock">
                            {item.authorName}
                          </span>
                        ))
                      : null}
                  </div>
                  <div className="product-sku">
                    Publisher:{" "}
                    <span className="variant-sku">
                      {publisher.publisherName}
                    </span>
                  </div>
                  <div className="product-review">
                    <a className="reviewLink" href="#tab2">
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star-o" />
                      <i className="font-13 fa fa-star-o" />
                      <span className="spr-badge-caption">6 reviews</span>
                    </a>
                  </div>
                </div>
                <p className="product-single__price product-single__price-product-template">
                  <span className="visually-hidden">Regular price</span>
                  <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                    <span id="ProductPrice-product-template">
                      <span className="money">
                        {bookDetail.price} eCoins/day
                      </span>
                    </span>
                  </span>
                </p>
                {/* Product Action */}
                <div className="product-action clearfix">
                  <div style={{ marginBottom: 5 }}>
                    <span>Day number</span>
                    <input type="number" />
                  </div>
                  <div className="product-form__item--submit">
                    <button
                      type="button"
                      name="add"
                      className="btn product-form__cart-submit"
                    >
                      <span>Add to cart</span>
                    </button>
                  </div>
                </div>
                {/* End Product Action */}
                <div className="display-table shareRow">
                  <div className="display-table-cell medium-up--one-third">
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="#"
                        title="Add to Wishlist"
                      >
                        <i
                          className="icon anm anm-heart-l"
                          aria-hidden="true"
                        />
                        <span>Add to Wishlist</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*Product Tabs*/}
            </div>
          </div>
          <div className="container" style={{ marginTop: 10 }}>
            <Tabs>
              <TabList>
                <Tab>Description</Tab>
                <Tab>Review</Tab>
              </TabList>

              <TabPanel>
                <p>{bookDetail.description}</p>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
