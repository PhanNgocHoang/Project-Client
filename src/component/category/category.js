import React, { useState, useEffect } from "react";
import {
  getAllBookTypes,
  getAllAuthor,
  getAllPublisher,
} from "../../api/index";
export const Categories = (props) => {
  const [bookTypes, setBookTypes] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
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
  return (
    <div>
      <div className="sidebar_widget filterBox filter-widget">
        <div className="widget-title">
          <h2>Book Types</h2>
        </div>
        <ul>
          {bookTypes.map((item) => (
            <li key={item._id}>
              <input
                type="checkbox"
                defaultValue="allen-vela"
                value={item._id}
                onChange={(e) => {
                  const value = e.target.checked ? item._id : null;
                  if (value === null) {
                    const bookType = props.pagination.bookType;
                    props.pagination.bookType = bookType.filter(
                      (item) => item !== item._id
                    );
                  } else {
                    props.pagination.bookType.push(item._id);
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
                defaultValue="allen-vela"
                value={item._id}
                onChange={(e) => {
                  const value = e.target.checked ? item._id : null;
                  if (value === null) {
                    const author = props.pagination.authors;
                    props.pagination.filter.authors = author.filter(
                      (item) => item !== item._id
                    );
                  } else {
                    props.pagination.authors.push(item._id);
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
                defaultValue="allen-vela"
                value={item._id}
                onChange={(e) => {
                  const value = e.target.checked ? item._id : null;
                  if (value === null) {
                    const publishers = props.pagination.publisher;
                    props.pagination.filter.publisher = publishers.filter(
                      (item) => item !== item._id
                    );
                  } else {
                    props.pagination.publisher.push(item._id);
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
  );
};
