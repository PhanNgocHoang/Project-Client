import React, { useEffect, useState } from "react";
import Alert from "react-s-alert";
import queryString from "query-string";
import { getBook } from "../../api/index";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../constants/index";
import { NavLink } from "react-router-dom";
export const Books = (props) => {
  console.log(props.pagination);

  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const paramsString = queryString.stringify(props.pagination);
      const result = await getBook(paramsString);
      if (result.status === 200) {
        dispatch({ type: types.NEW_BOOKS, payload: result.data.data.data });
        console.log(result);
      }
    } catch (error) {
      return Alert.error(`<div role="alert">Can Not Get New Book</div>`, {
        html: true,
        position: "top-right",
        effect: "slide",
      });
    }
  };
  useEffect(() => {
    getData();
  }, [props.pagination]);
  const newBooks = useSelector((state) => {
    return state.newBooks.data;
  });
  return (
    <div className="row">
      {newBooks !== {}
        ? newBooks.map((item) => (
            <div className={props.position} key={item._id}>
              {/* start product image */}
              <NavLink to={`books/${item._id}`}>
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    <img
                      className="lazyload"
                      data-src={item.images}
                      src={item.images}
                      alt="image"
                      title={item.description}
                    />
                  </a>
                  <button
                    className="btn btn-addto-cart"
                    type="button"
                    style={{ marginTop: 3 }}
                    tabIndex={0}
                  >
                    Add To Cart
                  </button>
                  <div className="button-set">
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">{item.book_name}</a>
                  </div>
                  <div className="product-price">
                    {item.authors.map((author) => (
                      <span key={author._id} className="price">
                        {" "}
                        {author.authorName}
                      </span>
                    ))}
                  </div>
                  <div className="product-price">
                    <span className="price">
                      {item.publisher.publisherName}
                    </span>
                  </div>
                  <div className="product-price">
                    <span className="price">{item.price} eCoins/day</span>
                  </div>
                </div>
              </NavLink>
            </div>
          ))
        : null}
    </div>
  );
};
