import React, { useState, useEffect } from "react";
import { Books } from "../book/listBook";
import { NavLink } from "react-router-dom";
import {
  getAllBookTypes,
  getAllAuthor,
  getAllPublisher,
} from "../../api/index";
import { Image, Button } from "react-bootstrap";
import queryString from "query-string";
let filter = {
  publisher: [],
  bookType: [],
  authors: [],
};
export const Library = () => {
  const [bookTypes, setBookTypes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [publisherPagination, setPublisherPagination] = useState({
    page: 1,
    limit: 5,
  });
  const [bookTypePagination, setBookTypePagination] = useState({
    page: 1,
    limit: 5,
  });
  const [authorPagination, setAuthorPagination] = useState({
    page: 1,
    limit: 5,
  });
  const getBookTypes = async () => {
    const paramsString = queryString.stringify(bookTypePagination);
    const result = await getAllBookTypes(paramsString);
    setBookTypes(result.data.data.data);
  };
  const getAuthors = async () => {
    const paramsString = queryString.stringify(authorPagination);
    const result = await getAllAuthor(paramsString);
    setAuthors(result.data.data.data);
  };
  const getPublisher = async () => {
    const paramsString = queryString.stringify(publisherPagination);
    const result = await getAllPublisher(paramsString);
    setPublishers(result.data.data.data);
  };
  useEffect(() => {
    getAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorPagination]);
  useEffect(() => {
    getPublisher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publisherPagination]);
  useEffect(() => {
    getBookTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookTypePagination]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    searchKey: "",
    publisher: [],
    bookType: [],
    authors: [],
  });
  const loadMore = () => {
    setPagination({ ...pagination, limit: pagination.limit + 4 });
  };
  return (
    <div>
      <div className="collection-header">
        <div className="collection-hero">
          <div className="collection-hero__image">
            <Image
              className="blur-up lazyload"
              data-src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
              src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          {/* Sidebar*/}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
            <div className="sidebar_tags">
              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Book Types</h2>
                </div>
                <div className="widget-content">
                  <ul>
                    {bookTypes.map((item) => (
                      <li key={item._id}>
                        <input
                          type="checkbox"
                          value={item._id}
                          onChange={(e) => {
                            const value = e.target.checked
                              ? e.target.value
                              : null;
                            if (value === null) {
                              const index = filter.bookType.findIndex(
                                (item) => item === e.target.value
                              );
                              filter.bookType.splice(index, 1);
                              setPagination({
                                ...pagination,
                                bookType: filter.bookType,
                              });
                            } else {
                              filter.bookType.push(value);
                              setPagination({
                                ...pagination,
                                bookType: filter.bookType,
                              });
                            }
                          }}
                        />
                        <label
                          style={{
                            whiteSpace: "nowrap",
                            overFlow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <span>
                            <span />
                          </span>
                          {item.type_name}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to="#"
                    onClick={() => {
                      setBookTypePagination({
                        ...bookTypePagination,
                        limit: bookTypePagination.limit + 5,
                      });
                    }}
                  >
                    More
                    <i
                      className="fa fa-caret-down"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                  <NavLink
                    style={{ marginLeft: 100 }}
                    to="#"
                    onClick={() => {
                      setBookTypePagination({
                        ...bookTypePagination,
                        limit: bookTypePagination.limit - 5,
                      });
                    }}
                  >
                    Hide
                    <i
                      className="fa fa-caret-up"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                </div>
              </div>

              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Authors</h2>
                </div>
                <div className="widget-content">
                  <ul>
                    {authors.map((item) => (
                      <li key={item._id}>
                        <input
                          type="checkbox"
                          value={item._id}
                          onChange={(e) => {
                            const value = e.target.checked
                              ? e.target.value
                              : null;
                            if (value === null) {
                              const index = filter.authors.findIndex(
                                (item) => item === e.target.value
                              );
                              filter.authors.splice(index, 1);
                              setPagination({
                                ...pagination,
                                authors: filter.authors,
                              });
                            } else {
                              filter.authors.push(value);
                              setPagination({
                                ...pagination,
                                authors: filter.authors,
                              });
                            }
                          }}
                        />
                        <label
                          style={{
                            whiteSpace: "nowrap",
                            overFlow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <span>
                            <span />
                          </span>
                          {item.authorName}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to="#"
                    onClick={() => {
                      setAuthorPagination({
                        ...authorPagination,
                        limit: authorPagination.limit + 5,
                      });
                    }}
                  >
                    More
                    <i
                      className="fa fa-caret-down"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                  <NavLink
                    style={{ marginLeft: 100 }}
                    to="#"
                    onClick={() => {
                      setAuthorPagination({
                        ...authorPagination,
                        limit: authorPagination.limit - 5,
                      });
                    }}
                  >
                    Hide
                    <i
                      className="fa fa-caret-up"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                </div>
              </div>
              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Publishers</h2>
                </div>
                <div className="widget-content">
                  <ul>
                    {publishers.map((item) => (
                      <li key={item._id}>
                        <input
                          type="checkbox"
                          value={item._id}
                          onChange={(e) => {
                            const value = e.target.checked
                              ? e.target.value
                              : null;
                            if (value === null) {
                              const index = filter.publisher.findIndex(
                                (item) => item === e.target.value
                              );
                              filter.publisher.splice(index, 1);
                              setPagination({
                                ...pagination,
                                publisher: filter.publisher,
                              });
                            } else {
                              filter.publisher.push(value);

                              setPagination({
                                ...pagination,
                                publisher: filter.publisher,
                              });
                            }
                          }}
                        />
                        <label>
                          <span>
                            <span />
                          </span>
                          {item.publisherName}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <NavLink
                    to="#"
                    onClick={() => {
                      setPublisherPagination({
                        ...publisherPagination,
                        limit: publisherPagination.limit + 5,
                      });
                    }}
                  >
                    More
                    <i
                      className="fa fa-caret-down"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                  <NavLink
                    style={{ marginLeft: 100 }}
                    to="#"
                    onClick={() => {
                      setPublisherPagination({
                        ...publisherPagination,
                        limit: publisherPagination.limit - 5,
                      });
                    }}
                  >
                    Hide
                    <i
                      className="fa fa-caret-up"
                      aria-hidden="true"
                      style={{ marginLeft: 10 }}
                    ></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
            <div className="category-description">
              <h3>Category Description</h3>
              <p>
                Reading books benefits both your physical and mental health, and
                those benefits can last a lifetime. They begin in early
                childhood and continue through the senior years. Here’s a brief
                explanation of how reading books can change your brain — and
                your body — for the better.
              </p>
            </div>
            <hr />
            <div className="grid-products grid--view-items">
              <Books
                position="col-6 col-sm-6 col-md-4 col-lg-3 item"
                pagination={pagination}
              />
            </div>
            <div className="infinitpaginOuter">
              <div className="infinitpagin">
                <Button
                  onClick={() => {
                    loadMore();
                  }}
                  variant="dark"
                >
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
