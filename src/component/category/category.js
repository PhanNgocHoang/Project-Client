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
    <div className="shop_sidebar_area">
      <div className="widget catagory mb-50">
        <h6 className="widget-title mb-30">Catagories</h6>
        <div className="catagories-menu">
          <ul>
            {bookTypes.map((item) => (
              <li key={item._id} className="mt-4">
                {item.type_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="widget brands mb-50">
        {/* Widget Title */}
        <h6 className="widget-title mb-30">Authors</h6>
        <div className="widget-desc">
          {authors.map((item) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                key={item._id}
              />
              <label className="form-check-label" htmlFor="amado">
                {item.authorName}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* ##### Single Widget ##### */}
      <div className="widget color mb-50">
        {/* Widget Title */}
        <h6 className="widget-title mb-30">Publisher</h6>
        <div className="widget-desc">
          {publishers.map((item) => (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                key={item._id}
              />
              <label className="form-check-label" htmlFor="amado">
                {item.publisherName}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
