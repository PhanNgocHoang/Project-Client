import React, { useEffect, useState } from "react";
import Alert from "react-s-alert";
import queryString from "query-string";
import { getBook, FavoriteBook } from "../../api/index";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../constants/index";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
export const Books = (props) => {
  const dispatch = useDispatch();
  const [isLoad, setLoad] = useState(false);
  const getData = async () => {
    try {
      const paramsString = queryString.stringify(props.pagination);
      const result = await getBook(paramsString);
      if (result.status === 200) {
        dispatch({ type: types.NEW_BOOKS, payload: result.data.data.data });
      }
    } catch (error) {
      return Alert.error(
        `<div role="alert">${error.response.data.message}</div>`,
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
  return (
    <div className="row">
      <Alert stack={{ limit: 3 }} />
      {newBooks.map((item) => (
        <div className={props.position} key={item._id}>
          {/* start product image */}

          <div className="product-image">
            {/* start product image */}

            <div className="grid-view-item__link">
              <NavLink to={`books/${item._id}`}>
                <Image
                  style={{ width: 400, height: 300 }}
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
              <NavLink to={`books/${item._id}`}>{item.book_name}</NavLink>
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
  );
};
