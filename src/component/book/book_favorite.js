import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { myFavorites, FavoriteBook } from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
export const FavoriteBookComponent = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState([]);
  const [isLoad, setLoad] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
  });
  const userId = localStorage.getItem("_id");
  const user = useSelector((state) => {
    return state.login.data;
  });
  const formSignIn = useSelector((state) => {
    return state.formLoginStatus.data;
  });
  const getBookByUser = async () => {
    try {
      if (userId === null) {
        dispatch({ type: "FORM_LOGIN_STATUS", payload: true });
      } else {
        const paramsString = queryString.stringify(pagination);
        const response = await myFavorites(userId, paramsString);
        setBooks(response.data.data);
      }
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
  };
  useEffect(
    () => {
      getBookByUser();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pagination, isLoad, formSignIn]
  );
  const removeFavorites = async (id) => {
    await FavoriteBook({
      bookId: id,
      userId: userId,
    });
    setLoad(!isLoad);
  };
  const loadMore = () => {
    setPagination({ ...pagination, limit: pagination.limit + 5 });
  };
  return (
    <div style={{ marginBottom: "20%" }}>
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
            <div className="table-content table-responsive">
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
                      Price: eCoins
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
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            removeFavorites(book._id);
                          }}
                        >
                          <i className="icon icon anm anm-times-l" />
                        </button>
                      </td>
                      <td className="product-thumbnail text-center">
                        <NavLink to={`books/${book._id}`}>
                          <img
                            src={book.images}
                            alt=""
                            title
                            style={{ height: 60, width: 60 }}
                          />
                        </NavLink>
                      </td>
                      <td
                        className="product-name"
                        style={{ height: 100, width: 400 }}
                      >
                        <p className="no-margin">
                          <NavLink to={`books/${book._id}`}>
                            {book.book_name}
                          </NavLink>
                        </p>
                      </td>
                      <td className="product-price text-center">
                        <span className="amount">{book.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="btn btn-dark"
              onClick={() => {
                loadMore();
              }}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
