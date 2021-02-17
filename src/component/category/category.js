import React, { useState, useEffect } from "react";
import {
  getAllBookTypes,
  getAllAuthor,
  getAllPublisher,
} from "../../api/index";

export const Categories = () => {
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

      <div className="sidebar_widget filterBox filter-widget">
        <div className="widget-title">
          <h2>Price</h2>
        </div>
        <form action="#" method="post" className="price-filter">
          <div
            id="slider-range"
            className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
          >
            <div className="ui-slider-range ui-widget-header ui-corner-all" />
            <span
              className="ui-slider-handle ui-state-default ui-corner-all"
              tabIndex={0}
            />
            <span
              className="ui-slider-handle ui-state-default ui-corner-all"
              tabIndex={0}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <p className="no-margin">
                <input id="amount" type="text" />
              </p>
            </div>
            <div className="col-6 text-right margin-25px-top">
              <button className="btn btn-secondary btn--small">filter</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
