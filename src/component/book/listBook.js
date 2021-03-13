import React, { useEffect, useState } from "react";
import Alert from "react-s-alert";
import queryString from "query-string";
import { getBook, FavoriteBook, createOrder } from "../../api/index";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../constants/index";
import { NavLink, Redirect } from "react-router-dom";
import { Image, Modal, Button, Form } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as fasHeart,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object().shape({
  totalDate: yup.number().required("Please enter a date number"),
});
export const Books = (props) => {
  const initialValues = {
    totalDate: 0,
  };
  const dispatch = useDispatch();
  const [book, setBook] = useState({});
  const [isLoad, setLoad] = useState(false);
  const [formBorrow, setFormBorrow] = useState(false);
  const getData = async () => {
    try {
      const paramsString = queryString.stringify(props.pagination);
      const result = await getBook(paramsString);
      if (result.status === 200) {
        dispatch({ type: types.NEW_BOOKS, payload: result.data.data.data });
      }
    } catch (error) {
      return Alert.error(
        `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
        {
          html: true,
          position: "top-right",
          effect: "slide",
        }
      );
    }
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pagination, isLoad]);
  const newBooks = useSelector((state) => {
    return state.newBooks.data;
  });
  const user = useSelector((state) => {
    return state.login.data;
  });

  const addToMyFavorite = async (id) => {
    if (localStorage.getItem("_id") === null) {
      dispatch({ type: "FORM_LOGIN_STATUS", payload: true });
    } else {
      await FavoriteBook({
        bookId: id,
        userId: localStorage.getItem("_id"),
      });
      setLoad(!isLoad);
    }
  };
  const borrow = async (book) => {
    if (localStorage.getItem("_id") === null) {
      dispatch({ type: "FORM_LOGIN_STATUS", payload: true });
    } else {
      setBook(book);
      setFormBorrow(true);
    }
  };
  return (
    <div className="row">
      <Alert stack={{ limit: 3 }} />
      {newBooks.map((item) => (
        <div className={props.position} key={item._id}>
          <div className="product-image">
            <div className="grid-view-item__link">
              <NavLink to={`books/${item._id}`}>
                <Image
                  style={{ width: 400, height: 280 }}
                  className="lazyload"
                  data-src={item.images}
                  src={item.images}
                  alt="image"
                  title={item.description}
                />
              </NavLink>
            </div>
            <div className="button-set">
              <div className="wishlist-btn">
                <button
                  className="btn wishlist add-to-wishlist"
                  onClick={() => addToMyFavorite(item._id)}
                >
                  <FontAwesomeIcon
                    icon={
                      item.userFavorite.some(
                        (userId) => userId._id === user._id
                      )
                        ? fasHeart
                        : faHeart
                    }
                    color={
                      item.userFavorite.some(
                        (userId) => userId._id === user._id
                      )
                        ? "#ed8a8a"
                        : "#ececec"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="product-details text-center">
            <div
              style={{
                height: 50,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <NavLink to={`books/${item._id}`}>{item.book_name}</NavLink>
            </div>
            <div className="product-price">
              <span className="price">
                {item.price} <FontAwesomeIcon icon={faCoins} color="#64ccdb" />/
                day
              </span>
            </div>
            <button
              className="btn btn-success btn-addto-cart"
              type="button"
              style={{ marginTop: 3 }}
              tabIndex={0}
              onClick={() => {
                borrow(item);
              }}
            >
              Borrow
            </button>
          </div>
        </div>
      ))}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={formBorrow}
        onHide={() => {
          setFormBorrow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Borrow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              try {
                const totalPrice = values.totalDate * book.price;
                if (totalPrice > user.wallet) {
                  return Alert.warning(
                    `<div role="alert"><i class="fas fa-exclamation-triangle"></i>
                                      Your eCoins are not enough to borrow this book
                                      </div>`,
                    {
                      html: true,
                      position: "top-right",
                      effect: "slide",
                    }
                  );
                }
                values.price = totalPrice;
                values.userId = user._id;
                values.bookId = book._id;
                values.endAt = moment(new Date())
                  .add(values.totalDate * 24, "hours")
                  .format("YYYY-MM-DD HH:MM");
                values.startedAt = moment(new Date()).format(
                  "YYYY-MM-DD HH:MM"
                );
                setFormBorrow(false);
                const result = await createOrder(values);
                Alert.success(
                  `<div role="alert">
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                              ${result.data.message}
                              </div>`,
                  {
                    html: true,
                    position: "top-right",
                    effect: "slide",
                  }
                );
                return <Redirect to={`/books/read/${result.data.order._id}`} />;
              } catch (error) {
                return Alert.error(
                  `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>
                                  ${error.response.data.message}</div>`,
                  {
                    html: true,
                    position: "top-right",
                    effect: "slide",
                  }
                );
              }
            }}
          >
            {(props) => (
              <Form
                onSubmit={props.handleSubmit}
                id="new-review-form"
                className="new-review-form"
              >
                <Form.Label column lg={3.5}>
                  Total Date: Day
                </Form.Label>
                <Form.Control
                  lg={4}
                  type="text"
                  name="totalDate"
                  placeholder="Enter total date borrow"
                  style={{ width: "65%" }}
                  className="ml-3"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  isInvalid={props.touched.totalDate && props.errors.totalDate}
                />
                <Form.Control.Feedback type="invalid">
                  {props.touched.totalDate && props.errors.totalDate}
                </Form.Control.Feedback>
                <Modal.Footer>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};
