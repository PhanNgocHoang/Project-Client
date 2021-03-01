import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/library">
                <span className="btn btn-info">Go to Library</span>
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Image
              className="d-block w-100"
              src="https://res.cloudinary.com/dps6fac1c/image/upload/v1614091566/images/Distance-Education0_xvdava.jpg"
            />
            <Carousel.Caption>
              <NavLink to="/library">
                <span className="btn btn-info">Go to Library</span>
              </NavLink>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
