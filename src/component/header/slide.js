import React from "react";
import { Carousel } from "react-bootstrap";
export const Slider = () => {
  return (
    <div className="slideshow slideshow-wrapper pb-section">
      <div className="home-slideshow">
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              style={{ height: "100%" }}
              className="d-block w-100"
              src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
            />
            <Carousel.Caption>
              <span className="btn">Shop now</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://educationaltrainingcompany.com/wp-content/uploads/2019/04/Distance-Education0.jpg"
            />
            <Carousel.Caption>
              <div className="container">
                <div className="wrap-caption center">
                  <span className="btn">Shop now</span>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
