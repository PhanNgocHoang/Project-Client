import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Alert from "react-s-alert";
import queryString from "query-string";
import { getBook } from "../../api/index";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../constants/index";
import { Card } from "react-bootstrap";
export const Books = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const paramsString = queryString.stringify({
        page: 1,
        limit: 9,
        searchKey: "",
      });
      const result = await getBook(paramsString);
      if (result.status === 200) {
        dispatch({ type: types.NEW_BOOKS, payload: result.data.data.data });
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
  }, []);
  const newBooks = useSelector((state) => {
    return state.newBooks.data;
  });
  return (
    <div className="single-products-catagory clearfix">
      {newBooks.map((item) => (
        <Card key={item._id}>
          <Card.Img
            variant="top"
            src={item.images[0].url}
            style={{ width: "50%", height: "50%" }}
          />
          <Card.Body>
            <Card.Title>{item.book_name}</Card.Title>
            <Card.Text
              style={{
                width: "300px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {item.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>
              <p>${item.price}</p>
            </small>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};
