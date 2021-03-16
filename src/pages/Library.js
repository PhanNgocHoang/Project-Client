import React, { useState, useEffect } from "react";
import { Books } from "../component/book/listBook";
import { getAllBookTypes, getAllAuthor, getAllPublisher } from "../api/index";
import { Form, Image } from "react-bootstrap";
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
  const getBookTypes = async () => {
    const result = await getAllBookTypes();
    setBookTypes(result.data.data);
  };
  const getAuthors = async () => {
    const result = await getAllAuthor();
    setAuthors(result.data.data);
  };
  const getPublisher = async () => {
    const result = await getAllPublisher();
    setPublishers(result.data.data);
  };
  useEffect(() => {
    getBookTypes();
    getAuthors();
    getPublisher();
  }, []);
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
          <div className="collection-hero__title-wrapper"></div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          {/*Sidebar*/}
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 sidebar filterbar">
            <div className="closeFilter d-block d-md-none d-lg-none">
              <i className="icon icon anm anm-times-l" />
            </div>
            <div className="sidebar_tags">
              <div className="sidebar_widget filterBox filter-widget">
                <Form>
                  <div className="widget-title">
                    <h2>Book Types</h2>
                  </div>
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
                        <label>
                          <span>
                            <span />
                          </span>
                          {item.type_name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </Form>
              </div>

              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Authors</h2>
                </div>
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
                      <label>
                        <span>
                          <span />
                        </span>
                        {item.authorName}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sidebar_widget filterBox filter-widget">
                <div className="widget-title">
                  <h2>Publishers</h2>
                </div>
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
                <button
                  onClick={() => {
                    loadMore();
                  }}
                  className="btn loadMore"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
