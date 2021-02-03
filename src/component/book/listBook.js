import React from "react";
import { Link } from "react-router-dom";
export const ListProducts = () => {
  return (
    <div className="single-products-catagory clearfix">
      <a href="shop.html">
        <img src="img/bg-img/1.jpg" alt="" />
        {/* Hover Content */}
        <div className="hover-content">
          <div className="line" />
          <p>From $180</p>
          <h4>Modern Chair</h4>
        </div>
      </a>
    </div>
  );
};
