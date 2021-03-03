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
              className="d-block w-100"
              src="https://storage.googleapis.com/e-library-705ec.appspot.com/3025.jpg"
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
              src="https://storage.googleapis.com/e-library-705ec.appspot.com/1758.jpg"
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
