import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { getBookDetails } from "../../api/index";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Form, Modal } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import * as yup from "yup";
import { createReview, getReview } from "../../api/index";
import { NavLink } from "react-router-dom";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import moment from "moment";
import queryString from "query-string";
const validationSchema = yup.object().shape({
  content: yup.string().required("Please enter your review"),
});
export const BookDetails = (prop) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.login.data;
  });
  const [showWriteReview, setWriteReview] = useState(false);
  const [reviews, setReview] = useState([]);
  const initialValues = {
    content: "",
  };
  const [reviewPage, setReviewPage] = useState({
    page: 1,
    limit: 5,
  });
  const bookId = prop.match.params.book_id;
  const [bookDetail, setBookDetail] = useState({});
  const [publisher, setPublisher] = useState({});
  const getBook = async (bookId) => {
    const book = await getBookDetails(bookId);
    setBookDetail(book.data.data);
    setPublisher(book.data.data.publisher);
  };
  useEffect(() => {
    getBook(bookId);
  }, [bookId, reviews]);
  const getReviews = async () => {
    const paramsString = queryString.stringify(reviewPage);
    const result = await getReview(bookId, paramsString);
    setReview(result.data.data);
    dispatch({ type: "BOOK_REVIEWS", payload: result.data.data });
  };
  useEffect(() => {
    getReviews();
  }, [showWriteReview, reviewPage]);
  return (
    <div id="MainContent" className="main-content" role="main">
      <Alert stack={{ limit: 3 }} />
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <NavLink to="/library">Books</NavLink>
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
                <div className="prInfoRow">
                  <div className="product-stock">
                    Author:
                    {bookDetail.authors
                      ? bookDetail.authors.map((item) => (
                          <span
                            style={{ marginLeft: 3 }}
                            className="instock"
                            key={item._id}
                          >
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
                      <button
                        className="wishlist add-to-wishlist"
                        title="Add to Wishlist"
                      >
                        <i
                          className="icon anm anm-heart-l"
                          aria-hidden="true"
                        />
                        <span>Add to Wishlist</span>
                      </button>
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
                <Tab
                  onClick={() => {
                    getReviews();
                  }}
                >
                  Review
                </Tab>
              </TabList>

              <TabPanel>
                <p>{bookDetail.description}</p>
              </TabPanel>
              <TabPanel>
                <Modal
                  show={showWriteReview}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  onHide={() => {
                    setWriteReview(false);
                  }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      My Review
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Formik
                      initialValues={initialValues}
                      onSubmit={async (values) => {
                        try {
                          values.user = user._id;
                          values.bookId = bookId;
                          await createReview(values);
                          setWriteReview(false);
                          return Alert.success(
                            `<div role="alert">
                                      Write review successfully
                                      </div>`,
                            {
                              html: true,
                              position: "top-right",
                              effect: "slide",
                            }
                          );
                        } catch (error) {
                          return Alert.error(
                            `<div role="alert">
                                  ${error.response.data.message}</div>`,
                            {
                              html: true,
                              position: "top-right",
                              effect: "slide",
                            }
                          );
                        }
                      }}
                      validationSchema={validationSchema}
                    >
                      {(props) => (
                        <Form
                          onSubmit={props.handleSubmit}
                          id="new-review-form"
                          className="new-review-form"
                        >
                          <h3 className="spr-form-title">Write a review</h3>
                          <fieldset className="spr-form-review">
                            <div className="spr-form-review-body">
                              <label className="spr-form-label">Content</label>
                              <div className="spr-form-input">
                                <Form.Control
                                  className="spr-form-input spr-form-input-textarea "
                                  name="content"
                                  as="textarea"
                                  rows={10}
                                  placeholder="Write your review here"
                                  onChange={props.handleChange}
                                  onBlur={props.handleBlur}
                                  isInvalid={
                                    props.touched.content &&
                                    props.errors.content
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {props.touched.content &&
                                    props.errors.content}
                                </Form.Control.Feedback>
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
                        </Form>
                      )}
                    </Formik>
                  </Modal.Body>
                </Modal>
                <div id="shopify-product-reviews">
                  <div className="spr-container">
                    <div className="spr-content">
                      {user._id ? (
                        <div className="spr-form clearfix">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              setWriteReview(true);
                            }}
                          >
                            Write Review
                          </button>
                        </div>
                      ) : null}

                      <div className="spr-reviews">
                        {reviews.map((review) => (
                          <div className="spr-review" key={review._id}>
                            <div className="spr-review-header">
                              <h3 className="spr-review-header-title">
                                <img
                                  src={review.user.photoUrl}
                                  alt=""
                                  className="border rounded-circle"
                                  style={{ width: 35, marginRight: 3 }}
                                />
                                {review.user.displayName}
                              </h3>
                              <span className="spr-review-header-byline">
                                <strong>
                                  {moment(review.createdAt).format(
                                    "DD.MM.YYYY HH:mm"
                                  )}
                                </strong>
                              </span>
                            </div>
                            <div className="spr-review-content">
                              <p className="spr-review-content-body">
                                {review.content}
                              </p>
                            </div>
                          </div>
                        ))}
                        <button
                          className="btn btn-dark"
                          onClick={() => {
                            setReviewPage({
                              ...reviewPage,
                              limit: reviewPage.limit + 5,
                            });
                          }}
                        >
                          Load More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
