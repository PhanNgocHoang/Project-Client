import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { getBookDetails } from "../../api/index";
export const BookDetails = (props) => {
  const bookId = props.match.params.book_id;
  const [bookDetail, setBookDetail] = useState({});
  const [authors, setAuthors] = useState([]);
  const [publisher, setPublisher] = useState({});
  const getBook = async (bookId) => {
    const book = await getBookDetails(bookId);
    setBookDetail(book.data.data);
    setAuthors(book.data.data.authors);
    setPublisher(book.data.data.publisher);
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
                      <span className="money">$ {bookDetail.price} / Day</span>
                    </span>
                  </span>
                </p>
                {/* Product Action */}
                <div className="product-action clearfix">
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
              <div className="tabs-listing">
                <div className="tab-container">
                  <h3 className="acor-ttl active" rel="tab1">
                    Product Details
                  </h3>
                  <div id="tab1" className="tab-content">
                    <div className="product-description rte">
                      <p>
                        {bookDetail.description ? bookDetail.description : null}
                      </p>
                    </div>
                  </div>
                  <h3 className="acor-ttl" rel="tab2">
                    Product Reviews
                  </h3>
                  <div id="tab2" className="tab-content">
                    <div id="shopify-product-reviews">
                      <div className="spr-container">
                        <div className="spr-header clearfix">
                          <div className="spr-summary">
                            <span className="product-review">
                              <a className="reviewLink">
                                <i className="font-13 fa fa-star" />
                                <i className="font-13 fa fa-star" />
                                <i className="font-13 fa fa-star" />
                                <i className="font-13 fa fa-star-o" />
                                <i className="font-13 fa fa-star-o" />{" "}
                              </a>
                              <span className="spr-summary-actions-togglereviews">
                                Based on 6 reviews456
                              </span>
                            </span>
                            <span className="spr-summary-actions">
                              <a
                                href="#"
                                className="spr-summary-actions-newreview btn"
                              >
                                Write a review
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="spr-content">
                          <div className="spr-form clearfix">
                            <form
                              method="post"
                              action="#"
                              id="new-review-form"
                              className="new-review-form"
                            >
                              <h3 className="spr-form-title">Write a review</h3>
                              <fieldset className="spr-form-contact">
                                <div className="spr-form-contact-name">
                                  <label
                                    className="spr-form-label"
                                    htmlFor="review_author_10508262282"
                                  >
                                    Name
                                  </label>
                                  <input
                                    className="spr-form-input spr-form-input-text"
                                    id="review_author_10508262282"
                                    type="text"
                                    name="review[author]"
                                    defaultValue
                                    placeholder="Enter your name"
                                  />
                                </div>
                                <div className="spr-form-contact-email">
                                  <label
                                    className="spr-form-label"
                                    htmlFor="review_email_10508262282"
                                  >
                                    Email
                                  </label>
                                  <input
                                    className="spr-form-input spr-form-input-email"
                                    id="review_email_10508262282"
                                    type="email"
                                    name="review[email]"
                                    defaultValue
                                    placeholder="john.smith@example.com"
                                  />
                                </div>
                              </fieldset>
                              <fieldset className="spr-form-review">
                                <div className="spr-form-review-rating">
                                  <label className="spr-form-label">
                                    Rating
                                  </label>
                                  <div className="spr-form-input spr-starrating">
                                    <div className="product-review">
                                      <a className="reviewLink" href="#">
                                        <i className="fa fa-star-o" />
                                        <i className="font-13 fa fa-star-o" />
                                        <i className="font-13 fa fa-star-o" />
                                        <i className="font-13 fa fa-star-o" />
                                        <i className="font-13 fa fa-star-o" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="spr-form-review-title">
                                  <label
                                    className="spr-form-label"
                                    htmlFor="review_title_10508262282"
                                  >
                                    Review Title
                                  </label>
                                  <input
                                    className="spr-form-input spr-form-input-text"
                                    id="review_title_10508262282"
                                    type="text"
                                    name="review[title]"
                                    defaultValue
                                    placeholder="Give your review a title"
                                  />
                                </div>
                                <div className="spr-form-review-body">
                                  <label
                                    className="spr-form-label"
                                    htmlFor="review_body_10508262282"
                                  >
                                    Body of Review
                                    <span className="spr-form-review-body-charactersremaining">
                                      (1500)
                                    </span>
                                  </label>
                                  <div className="spr-form-input">
                                    <textarea
                                      className="spr-form-input spr-form-input-textarea"
                                      id="review_body_10508262282"
                                      data-product-id={10508262282}
                                      name="review[body]"
                                      rows={10}
                                      placeholder="Write your comments here"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </fieldset>
                              <fieldset className="spr-form-actions">
                                <input
                                  type="submit"
                                  className="spr-button spr-button-primary button button-primary btn btn-primary"
                                  defaultValue="Submit Review"
                                />
                              </fieldset>
                            </form>
                          </div>
                          <div className="spr-reviews">
                            <div className="spr-review">
                              <div className="spr-review-header">
                                <span className="product-review spr-starratings spr-review-header-starratings">
                                  <span className="reviewLink">
                                    <i className="fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                  </span>
                                </span>
                                <h3 className="spr-review-header-title">
                                  Lorem ipsum dolor sit amet
                                </h3>
                                <span className="spr-review-header-byline">
                                  <strong>dsacc</strong> on
                                  <strong>Apr 09, 2019</strong>
                                </span>
                              </div>
                              <div className="spr-review-content">
                                <p className="spr-review-content-body">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
                                </p>
                              </div>
                            </div>
                            <div className="spr-review">
                              <div className="spr-review-header">
                                <span className="product-review spr-starratings spr-review-header-starratings">
                                  <span className="reviewLink">
                                    <i className="fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                  </span>
                                </span>
                                <h3 className="spr-review-header-title">
                                  Lorem Ipsum is simply dummy text of the
                                  printing
                                </h3>
                                <span className="spr-review-header-byline">
                                  <strong>larrydude</strong> on
                                  <strong>Dec 30, 2018</strong>
                                </span>
                              </div>
                              <div className="spr-review-content">
                                <p className="spr-review-content-body">
                                  <br />
                                  <br />
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled.
                                  <br />
                                  <br />
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                  <br />
                                  <br />
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                  <br />
                                </p>
                              </div>
                            </div>
                            <div className="spr-review">
                              <div className="spr-review-header">
                                <span className="product-review spr-starratings spr-review-header-starratings">
                                  <span className="reviewLink">
                                    <i className="fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                    <i className="font-13 fa fa-star" />
                                  </span>
                                </span>
                                <h3 className="spr-review-header-title">
                                  Neque porro quisquam est qui dolorem ipsum
                                  quia dolor sit amet, consectetur, adipisci
                                  velit...
                                </h3>
                                <span className="spr-review-header-byline">
                                  <strong>quoctri1905</strong> on
                                  <strong>Dec 30, 2018</strong>
                                </span>
                              </div>
                              <div className="spr-review-content">
                                <p className="spr-review-content-body">
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry's standard dummy text
                                  ever since the 1500s, when an unknown printer
                                  took a galley of type and scrambled.
                                  <br />
                                  <br />
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="acor-ttl" rel="tab3">
                    Size Chart
                  </h3>
                  <div id="tab3" className="tab-content">
                    <h3>WOMEN'S BODY SIZING CHART</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>31" - 33"</td>
                          <td>33" - 35"</td>
                          <td>35" - 37"</td>
                          <td>37" - 39"</td>
                          <td>39" - 42"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>24" - 26"</td>
                          <td>26" - 28"</td>
                          <td>28" - 30"</td>
                          <td>30" - 32"</td>
                          <td>32" - 35"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>34" - 36"</td>
                          <td>36" - 38"</td>
                          <td>38" - 40"</td>
                          <td>40" - 42"</td>
                          <td>42" - 44"</td>
                        </tr>
                        <tr>
                          <td>Regular inseam</td>
                          <td>30"</td>
                          <td>30½"</td>
                          <td>31"</td>
                          <td>31½"</td>
                          <td>32"</td>
                        </tr>
                        <tr>
                          <td>Long (Tall) Inseam</td>
                          <td>31½"</td>
                          <td>32"</td>
                          <td>32½"</td>
                          <td>33"</td>
                          <td>33½"</td>
                        </tr>
                      </tbody>
                    </table>
                    <h3>MEN'S BODY SIZING CHART</h3>
                    <table>
                      <tbody>
                        <tr>
                          <th>Size</th>
                          <th>XS</th>
                          <th>S</th>
                          <th>M</th>
                          <th>L</th>
                          <th>XL</th>
                          <th>XXL</th>
                        </tr>
                        <tr>
                          <td>Chest</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                        <tr>
                          <td>Waist</td>
                          <td>27" - 30"</td>
                          <td>30" - 33"</td>
                          <td>33" - 35"</td>
                          <td>36" - 38"</td>
                          <td>38" - 42"</td>
                          <td>42" - 45"</td>
                        </tr>
                        <tr>
                          <td>Hip</td>
                          <td>33" - 36"</td>
                          <td>36" - 39"</td>
                          <td>39" - 41"</td>
                          <td>41" - 43"</td>
                          <td>43" - 46"</td>
                          <td>46" - 49"</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-center">
                      <img src={bookDetail.images} alt="" />
                    </div>
                  </div>
                  <h3 className="acor-ttl" rel="tab4">
                    Shipping &amp; Returns
                  </h3>
                  <div id="tab4" className="tab-content">
                    <h4>Returns Policy</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce eros justo, accumsan non dui sit amet. Phasellus
                      semper volutpat mi sed imperdiet. Ut odio lectus,
                      vulputate non ex non, mattis sollicitudin purus. Mauris
                      consequat justo a enim interdum, in consequat dolor
                      accumsan. Nulla iaculis diam purus, ut vehicula leo
                      efficitur at.
                    </p>
                    <p>
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. In blandit nunc enim, sit amet pharetra erat
                      aliquet ac.
                    </p>
                    <h4>Shipping</h4>
                    <p>
                      Pellentesque ultrices ut sem sit amet lacinia. Sed nisi
                      dui, ultrices ut turpis pulvinar. Sed fringilla ex eget
                      lorem consectetur, consectetur blandit lacus varius. Duis
                      vel scelerisque elit, et vestibulum metus. Integer sit
                      amet tincidunt tortor. Ut lacinia ullamcorper massa, a
                      fermentum arcu vehicula ut. Ut efficitur faucibus dui
                      Nullam tristique dolor eget turpis consequat varius.
                      Quisque a interdum augue. Nam ut nibh mauris.
                    </p>
                  </div>
                </div>
              </div>
              {/*End Product Tabs*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
