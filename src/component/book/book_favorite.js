import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { myFavorites, myFavoritesLocal } from "../../api/index";
import { useSelector } from "react-redux";
import queryString from "query-string";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
export const FavoriteBook = () => {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
  });
  const user = useSelector((state) => {
    return state.login.data;
  });
  const userId = localStorage.getItem("_id");
  const getBookByUser = async () => {
    try {
      const paramsString = queryString.stringify(pagination);
      await myFavorites(localStorage.getItem("_id"), paramsString);
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
  };
  const getBookLocal = async () => {
    try {
      const ids = [""];
      const paramsString = queryString.stringify({ ids: ids }, pagination);
      await myFavoritesLocal(ids, paramsString);
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
  };
  useEffect(() => {
    if (userId !== null) {
      getBookByUser();
    } else {
      getBookLocal();
    }
  }, [pagination]);

  return (
    <div>
      <Alert stack={{ limit: 3 }} />
      <div className="page section-header text-center">
        <div className="page-title">
          <div className="wrapper">
            <h1 className="page-width">Favorite List</h1>
          </div>
        </div>
      </div>
      {/*End Page Title*/}
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <form action="#">
              <div className="wishlist-table table-content table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-name text-center alt-font">
                        Remove
                      </th>
                      <th className="product-price text-center alt-font">
                        Images
                      </th>
                      <th className="product-name alt-font">Book Name</th>
                      <th className="product-price text-center alt-font">
                        Price
                      </th>
                      <th className="product-subtotal text-center alt-font">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <tr>
                        <td
                          className="product-remove text-center"
                          valign="middle"
                        >
                          <button className="btn btn-danger">
                            <i className="icon icon anm anm-times-l" />
                          </button>
                        </td>
                        <td className="product-thumbnail text-center">
                          <NavLink to={`books/${book._id}`}>
                            <img
                              src="assets/images/product-images/product-image8.jpg"
                              alt=""
                              title
                            />
                          </NavLink>
                        </td>
                        <td className="product-name">
                          <h4 className="no-margin">
                            <a href="#">Minerva Dress black</a>
                          </h4>
                        </td>
                        <td className="product-price text-center">
                          <span className="amount">$165.00</span>
                        </td>
                        <td className="product-subtotal text-center">
                          <button
                            type="button"
                            className="btn btn-small btn-success"
                          >
                            Borrow
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="btn btn-dark">Load More</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
