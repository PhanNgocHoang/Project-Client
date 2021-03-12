import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getBook } from "../../api/index";
import queryString from "query-string";
import Alert from "react-s-alert";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
export const Search = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 1,
    searchKey: "",
  });
  const search = async () => {
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
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);
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
              setPagination({
                ...pagination,
                searchKey: event.target.value,
                limit: pagination.limit + 4,
              });
            }}
          />
          <div style={{ marginTop: 10 }}>
            {searchResult.map((item) => (
              <NavLink
                key={item._id}
                to={`/books/${item._id}`}
                onClick={() => {
                  document.getElementById("closeSearch").click();
                }}
              >
                <Card>
                  <Card.Header>{item.book_name}</Card.Header>
                  <Card.Body>
                    <Card.Img
                      src={item.images}
                      style={{ width: 100, height: 100 }}
                    />
                    <Card.Title>{item.authors[0].authorName}</Card.Title>
                    <Card.Text>
                      {" "}
                      {item.price}{" "}
                      <FontAwesomeIcon icon={faCoins} color="#64ccdb" /> / day
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
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
