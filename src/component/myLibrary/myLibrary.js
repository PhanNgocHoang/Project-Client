import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Card, CardColumns, Button, Image } from "react-bootstrap";
import { myBooks, myBooksStatus, FavoriteBook } from "../../api/index";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
export const MyLibrary = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [booksCanRead, setBooksCanRead] = useState([]);
  const [booksExpired, setBooksExpired] = useState([]);
  const user = useSelector((state) => {
    return state.login.data;
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
  });
  const [paginationStatus, setPaginationStatus] = useState({
    page: 1,
    limit: 6,
    status: true,
  });
  const getBooks = async () => {
    try {
      const paginationString = queryString.stringify(pagination);
      const response = await myBooks(
        localStorage.getItem("_id"),
        paginationString
      );
      setBooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, [pagination, isLoad]);
  const getBooksStatus = async () => {
    try {
      const paginationString = queryString.stringify(paginationStatus);
      const response = await myBooksStatus(
        localStorage.getItem("_id"),
        paginationString
      );
      if (paginationStatus.status === true) {
        setBooksCanRead(response.data.data);
      } else {
        setBooksExpired(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBooksStatus();
  }, [paginationStatus]);
  const getBookCanRead = async () => {
    setPaginationStatus(paginationStatus);
  };
  const getBooksExpired = async () => {
    setPaginationStatus({ ...paginationStatus, status: false });
  };
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
  return (
    <div className="container" style={{ marginBottom: "30%", marginTop: "3%" }}>
      <Tabs>
        <TabList>
          <Tab>Total</Tab>
          <Tab
            onClick={() => {
              getBookCanRead();
            }}
          >
            Can Read
          </Tab>
          <Tab
            onClick={() => {
              getBooksExpired();
            }}
          >
            Expired
          </Tab>
        </TabList>
        <TabPanel>
          <div className="row">
            {books.map((item) => (
              <div
                className="col-6 col-sm-2 col-md-3 col-lg-3 item"
                key={item._id}
                style={{ marginBottom: 3, marginTop: 3 }}
              >
                {/* start product image */}

                <div className="product-image">
                  {/* start product image */}

                  <div className="grid-view-item__link">
                    <Image
                      style={{ width: 400, height: 300 }}
                      className="lazyload"
                      data-src={item.bookId.images}
                      src={item.bookId.images}
                      alt="image"
                      title={item.bookId.description}
                    />
                  </div>
                  <div className="button-set">
                    <div className="wishlist-btn">
                      <button
                        className="btn wishlist add-to-wishlist"
                        onClick={() => addToMyFavorite(item._id)}
                      >
                        <FontAwesomeIcon
                          icon={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? "#ed8a8a"
                              : "#ececec"
                          }
                        />
                      </button>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div
                    // className="product-name"
                    style={{
                      height: 50,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.bookId.book_name}
                  </div>
                  <div className="product-price">
                    <span className="price">{item.price} day/eCoins</span>
                  </div>
                  <button
                    className="btn btn-success btn-addto-cart"
                    type="button"
                    style={{ marginTop: 3 }}
                    tabIndex={0}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            {booksCanRead.map((item) => (
              <div
                className="col-6 col-sm-2 col-md-3 col-lg-3 item"
                key={item._id}
                style={{ marginBottom: 3, marginTop: 3 }}
              >
                {/* start product image */}

                <div className="product-image">
                  {/* start product image */}

                  <div className="grid-view-item__link">
                    <Image
                      style={{ width: 400, height: 300 }}
                      className="lazyload"
                      data-src={item.bookId.images}
                      src={item.bookId.images}
                      alt="image"
                      title={item.bookId.description}
                    />
                  </div>
                  <div className="button-set">
                    <div className="wishlist-btn">
                      <button
                        className="btn wishlist add-to-wishlist"
                        onClick={() => addToMyFavorite(item._id)}
                      >
                        <FontAwesomeIcon
                          icon={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? "#ed8a8a"
                              : "#ececec"
                          }
                        />
                      </button>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div
                    // className="product-name"
                    style={{
                      height: 50,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.bookId.book_name}
                  </div>
                  <div className="product-price">
                    <span className="price">{item.price} day/eCoins</span>
                  </div>
                  <button
                    className="btn btn-success btn-addto-cart"
                    type="button"
                    style={{ marginTop: 3 }}
                    tabIndex={0}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            {booksExpired.map((item) => (
              <div
                className="col-6 col-sm-2 col-md-3 col-lg-3 item"
                key={item._id}
                style={{ marginBottom: 3, marginTop: 3 }}
              >
                {/* start product image */}

                <div className="product-image">
                  {/* start product image */}

                  <div className="grid-view-item__link">
                    <Image
                      style={{ width: 400, height: 300 }}
                      className="lazyload"
                      data-src={item.bookId.images}
                      src={item.bookId.images}
                      alt="image"
                      title={item.bookId.description}
                    />
                  </div>
                  <div className="button-set">
                    <div className="wishlist-btn">
                      <button
                        className="btn wishlist add-to-wishlist"
                        onClick={() => addToMyFavorite(item._id)}
                      >
                        <FontAwesomeIcon
                          icon={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === user._id
                            )
                              ? "#ed8a8a"
                              : "#ececec"
                          }
                        />
                      </button>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div
                    // className="product-name"
                    style={{
                      height: 50,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.bookId.book_name}
                  </div>
                  <div className="product-price">
                    <span className="price">{item.price} day/eCoins</span>
                  </div>
                  <button
                    className="btn btn-success btn-addto-cart"
                    type="button"
                    style={{ marginTop: 3 }}
                    tabIndex={0}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
