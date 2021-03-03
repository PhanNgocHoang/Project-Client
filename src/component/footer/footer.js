import React from "react";
export const Footer = () => {
  return (
    <footer id="footer" className="footer-2">
      <div className="site-footer">
        <div className="container">
          {/*Footer Links*/}
          <div className="footer-top">
            <div className="row">
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
          <div className="footer-bottom">
            <div className="row">
              {/*Footer Copyright*/}
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 order-1 order-md-0 order-lg-0 order-sm-1 copyright text-center">
                <span /> Copyright Templates Hub
              </div>
              {/*End Footer Copyright*/}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
