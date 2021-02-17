import React from "react";
export const Slider2 = () => {
  return (
    <div className="slideshow slideshow-wrapper pb-section">
      <div className="home-slideshow">
        <div className="slide">
          <div className="blur-up lazyload">
            <img
              className="blur-up lazyload"
              data-src="https://educationaltrainingcompany.com/wp-content/uploads/2019/04/Distance-Education0.jpg"
              src="https://educationaltrainingcompany.com/wp-content/uploads/2019/04/Distance-Education0.jpg"
              alt="Shop Our New Collection"
              title="Shop Our New Collection"
            />
            <div className="slideshow__text-wrap slideshow__overlay classic middle">
              <div className="slideshow__text-content middle">
                <div className="container">
                  <div className="wrap-caption right">
                    <h2 className="h1 mega-title slideshow__title">
                      Our New Collection
                    </h2>
                    <span className="mega-subtitle slideshow__subtitle">
                      Save up to 50% Off
                    </span>
                    <span className="btn">Shop now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="blur-up lazyload">
            <img
              className="blur-up lazyload"
              data-src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
              src="https://eknathmadhavicollege.in/wp-content/uploads/2020/07/library-shelves-banner-photo.jpg"
              alt="Summer Bikini Collection"
              title="Summer Bikini Collection"
            />
            <div className="slideshow__text-wrap slideshow__overlay classic middle">
              <div className="slideshow__text-content middle">
                <div className="container">
                  <div className="wrap-caption center">
                    <h2 className="h1 mega-title slideshow__title">
                      Fashion &amp; Show
                    </h2>
                    <span className="mega-subtitle slideshow__subtitle">
                      A World Fashion and Trendy Fashion Clother's
                    </span>
                    <span className="btn">Shop now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
