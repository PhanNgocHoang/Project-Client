import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getBook } from "../../api/index";
import queryString from "query-string";
import Alert from "react-s-alert";
import { Link } from "react-router-dom";
export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
    searchKey: "",
  });
  const search = async (searchKey) => {
    setPagination({ ...pagination, searchKey: searchKey });
    try {
      const paramsString = queryString.stringify(pagination);
      const result = await getBook(paramsString);
      if (result.status === 200) {
        setSearchResult(result.data.data.data);
      }
    } catch (error) {
      return Alert.error(`<div role="alert">Can Not Get New Book</div>`, {
        html: true,
        position: "top-right",
        effect: "slide",
      });
    }
  };
  return (
    <div className="search">
      <div className="search__form">
        <div className="search-bar__form">
          <button className="go-btn search__button">
            <i className="icon anm anm-search-l" />
          </button>
          <input
            className="search__input"
            type="search"
            name="search"
            placeholder="Search entire store..."
            aria-label="Search"
            value={pagination.searchKey}
            onChange={(event) => {
              search(event.target.value);
            }}
          />
          <div style={{ marginTop: 10 }}>
            {searchResult.map((item) => (
              <Link
                key={item._id}
                to={`/books/${item._id}`}
                onClick={() => {
                  document.getElementById("closeSearch").click();
                }}
              >
                <Card>
                  <Card.Header>{item.book_name}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.authors[0].authorName}</Card.Title>
                    <Card.Text>$ {item.price}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
          <button
            className="btn btn-dark"
            onClick={() => {
              setPagination({ ...pagination, limit: pagination.limit + 5 });
            }}
          >
            Load More
          </button>
        </div>
        <button
          type="button"
          className="search-trigger close-btn"
          id="closeSearch"
        >
          <i className="anm anm-times-l" />
        </button>
      </div>
    </div>
  );
};
