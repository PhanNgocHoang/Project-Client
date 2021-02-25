import React from "react";
export const Footer = () => {
  return (
    <footer id="footer" className="footer-2">
      <div className="site-footer">
        <div className="container">
          {/*Footer Links*/}
          <div className="footer-top">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Quick Shop</h4>
                <ul>
                  <li>Women</li>
                  <li>Men</li>
                  <li>Kids</li>
                  <li>Sportswear</li>
                  <li>Sale</li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Informations</h4>
                <ul>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Privacy policy</li>
                  <li>Terms &amp; condition</li>
                  <li>My Account</li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 footer-links">
                <h4 className="h4">Customer Services</h4>
                <ul>
                  <li>Request Personal Data</li>
                  <li>FAQ's</li>
                  <li>Contact Us</li>
                  <li>Orders and Returns</li>
                  <li>Support Center</li>
                </ul>
              </div>
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 contact-box">
                <h4 className="h4">Contact Us</h4>
                <ul className="addressFooter">
                  <li>
                    <i className="icon anm anm-map-marker-al" />
                    <p>
                      55 Gallaxy Enque,
                      <br />
                      2568 steet, 23568 NY
                    </p>
                  </li>
                  <li className="phone">
                    <i className="icon anm anm-phone-s" />
                    <p>(440) 000 000 0000</p>
                  </li>
                  <li className="email">
                    <i className="icon anm anm-envelope-l" />
                    <p>sales@yousite.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*End Footer Links*/}
          <hr />
          <div className="footer-bottom">
            <div className="row">
              {/*Footer Copyright*/}
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-center">
                <span /> Templates Hub
              </div>
              {/*End Footer Copyright*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
