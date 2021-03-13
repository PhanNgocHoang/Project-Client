import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Image, Button } from "react-bootstrap";
import { myBooks, myBooksStatus, FavoriteBook } from "../../api/index";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useDispatch } from "react-redux";
export const MyLibrary = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [booksCanRead, setBooksCanRead] = useState([]);
  const [booksExpired, setBooksExpired] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 8,
  });
  const [paginationStatus, setPaginationStatus] = useState({
    page: 1,
    limit: 8,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        onClick={() => addToMyFavorite(item.bookId._id)}
                      >
                        <FontAwesomeIcon
                          icon={
                            item.bookId.userFavorite.some(
                              (userId) => userId._id === localStorage.userId
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId === item.userId
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
                  <NavLink to={`books/${item.bookId._id}`}>
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
                  </NavLink>
                  <div className="product-price">
                    <span className="price">
                      Total Date: {item.totalDate} Day
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Total Price: {item.price} eCoins
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Started At:{" "}
                      {moment(item.startedAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      End At: {moment(item.endAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  {item.status === true ? (
                    <NavLink to={`/books/read/${item._id}`}>
                      <button
                        className="btn btn-success btn-addto-cart"
                        type="button"
                        style={{ marginTop: 3 }}
                        tabIndex={0}
                      >
                        Read
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink to={`books/${item.bookId._id}`}>
                      <Button
                        className="btn btn-danger"
                        style={{ marginTop: 3 }}
                      >
                        Expired
                      </Button>
                    </NavLink>
                  )}
                </div>
              </div>
            ))}
            <Button
              variant="dark"
              style={{ marginTop: 100, marginLeft: "45%", marginRight: "45%" }}
              onClick={() => {
                setPagination({ ...pagination, limit: pagination.limit + 4 });
              }}
            >
              Load More
            </Button>
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
                              (userId) => userId._id === localStorage.userId
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId === item.userId
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
                  <NavLink to={`books/${item.bookId._id}`}>
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
                  </NavLink>
                  <div className="product-price">
                    <span className="price">
                      Total Date: {item.totalDate} Day
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Total Price: {item.price} eCoins
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Started At:{" "}
                      {moment(item.startedAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Started At:{" "}
                      {moment(item.endAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  <NavLink to={`/books/read/${item._id}`}>
                    <button
                      className="btn btn-success btn-addto-cart"
                      type="button"
                      style={{ marginTop: 3 }}
                      tabIndex={0}
                    >
                      Read
                    </button>
                  </NavLink>
                </div>
              </div>
            ))}
            <Button
              variant="dark"
              style={{ marginTop: 100, marginLeft: "45%", marginRight: "45%" }}
              onClick={() => {
                setPaginationStatus({
                  ...paginationStatus,
                  limit: paginationStatus.limit + 4,
                });
              }}
            >
              Load More
            </Button>
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
                              (userId) => userId._id === localStorage.userId
                            )
                              ? fasHeart
                              : faHeart
                          }
                          color={
                            item.bookId.userFavorite.some(
                              (userId) => userId === item.userId
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
                  <NavLink to={`books/${item.bookId._id}`}>
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
                  </NavLink>
                  <div className="product-price">
                    <span className="price">
                      Total Date: {item.totalDate} Day
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Total Price: {item.price} eCoins
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Started At:{" "}
                      {moment(item.startedAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">
                      Started At:{" "}
                      {moment(item.endAt).format("YYYY-MM-DD HH:MM")}
                    </span>
                  </div>
                  <Button
                    className="btn btn-danger"
                    disabled
                    style={{ marginTop: 3 }}
                  >
                    Expired
                  </Button>
                </div>
              </div>
            ))}
            <Button
              variant="dark"
              style={{ marginTop: 100, marginLeft: "45%", marginRight: "45%" }}
              onClick={() => {
                setPaginationStatus({
                  ...paginationStatus,
                  limit: paginationStatus.limit + 4,
                });
              }}
            >
              Load More
            </Button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
