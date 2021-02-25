import React from "react";
import { Carousel, Image } from "react-bootstrap";
export const Slider = () => {
  return (
    <div className="slideshow slideshow-wrapper pb-section">
      <div className="home-slideshow">
        <Carousel>
          <Carousel.Item interval={2000}>
            <Image
              style={{ height: "100%" }}
              className="d-block w-100"
              src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
            />
            <Carousel.Caption>
              <span className="btn">Shop now</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://res.cloudinary.com/dps6fac1c/image/upload/v1614091566/images/Distance-Education0_xvdava.jpg"
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
