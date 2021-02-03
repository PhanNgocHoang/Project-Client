import React from "react";
export const BookDetail = () => {
  return (
    <section className="product-sec">
      <div className="breadcrumb">
        <div className="container">
          {/* <a className="breadcrumb-item" href="index.html">Home</a> */}
          <span className="breadcrumb-item active">Terms and Condition</span>
        </div>
      </div>
      <div className="container">
        <h1>7 Day Self publish How to Write a Book</h1>
        <div className="row">
          <div className="col-md-6 slider-sec">
            {/* main slider carousel */}
            <div id="myCarousel" className="carousel slide">
              {/* main slider carousel items */}
              <div className="carousel-inner">
                <div
                  className="active item carousel-item"
                  data-slide-number={0}
                >
                  <img src="images/product1.jpg" className="img-fluid" />
                </div>
                <div className="item carousel-item" data-slide-number={1}>
                  <img src="images/product2.jpg" className="img-fluid" />
                </div>
                <div className="item carousel-item" data-slide-number={2}>
                  <img src="images/product3.jpg" className="img-fluid" />
                </div>
              </div>
              {/* main slider carousel nav controls */}
              <ul className="carousel-indicators list-inline">
                <li className="list-inline-item active">
                  <a
                    id="carousel-selector-0"
                    className="selected"
                    data-slide-to={0}
                    data-target="#myCarousel"
                  >
                    <img src="images/product1.jpg" className="img-fluid" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="carousel-selector-1"
                    data-slide-to={1}
                    data-target="#myCarousel"
                  >
                    <img src="images/product2.jpg" className="img-fluid" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    id="carousel-selector-2"
                    data-slide-to={2}
                    data-target="#myCarousel"
                  >
                    <img src="images/product3.jpg" className="img-fluid" />
                  </a>
                </li>
              </ul>
            </div>
            {/*/main slider carousel*/}
          </div>
          <div className="col-md-6 slider-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's printer took a
              galley of type and Scrambled it to make a type and typesetting
              industry. Lorem Ipsum has been the book.{" "}
            </p>
            <p>
              t has survived not only fiveLorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's printer took a galley of type and
            </p>
            <ul>
              <li>
                <span className="name">Digital List Price</span>
                <span className="clm">:</span>
                <span className="price">$4.71</span>
              </li>
              <li>
                <span className="name">Print List Price</span>
                <span className="clm">:</span>
                <span className="price">$10.99</span>
              </li>
              <li>
                <span className="name">Kindle Price</span>
                <span className="clm">:</span>
                <span className="price final">$3.37</span>
              </li>
              <li>
                <span className="save-cost">Save $7.62 (69%)</span>
              </li>
            </ul>
            <div className="btn-sec">
              <button className="btn ">Add To cart</button>
              <button className="btn black">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
