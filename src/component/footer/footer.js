import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer id="footer" className="footer-2">
      <div className="site-footer">
        <div className="container">
          {/*Footer Links*/}
          <div className="footer-top">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <Image src="https://res.cloudinary.com/dps6fac1c/image/upload/v1613621648/images/e-library_uxmixc.png" />
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Informations</h4>
                <ul>
                  <li>
                    <Link to="/privacy">About us</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter">
                  <li>
                    <i className="icon anm anm-map-marker-al" />
                    <p>Greenwich of university of Viet Nam</p>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s" />
                    <p>0123456789</p>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l" />
                    <p>hoangpngch17194@fpt.edu.vn</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Links*/}
          <hr />
        </div>
      </div>
    </footer>
  );
};
