import React from "react";
import { Tabs } from "react-bootstrap";
export const BookDetailsPage = () => {
  return (
    <div id="MainContent" className="main-content" role="main">
      {/*Breadcrumb*/}
      <div className="bredcrumbWrap">
        <div className="container breadcrumbs">
          <a href="index.html" title="Back to the home page">
            Home
          </a>
          <span aria-hidden="true">›</span>
          <span>Product With Left Thumbs</span>
        </div>
      </div>
      {/*End Breadcrumb*/}
      <div
        id="ProductSection-product-template"
        className="product-template__container prstyle1 container"
      >
        {/*product-single*/}
        <div className="product-single">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-details-img">
                <div className="product-thumb">
                  <div
                    id="gallery"
                    className="product-dec-slider-2 product-tab-left"
                  >
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big1.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big1.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible0.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big2.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big2.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big3.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big3.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible6.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible7-big.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible7-big.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible7.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big4.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big4.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={0}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible8.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big5.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big5.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible9.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big6.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big6.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible1.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big7.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big7.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={3}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible2.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big8.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big8.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={4}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible3.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big9.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big9.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={5}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible4.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      data-image="assets/images/product-detail-page/camelia-reversible-big10.jpg"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big10.jpg"
                      className="slick-slide slick-cloned"
                      data-slick-index={6}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      <img
                        className="blur-up lazyload"
                        src="assets/images/product-detail-page/camelia-reversible5.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="zoompro-wrap product-zoom-right pl-20">
                  <div className="zoompro-span">
                    <img
                      className="blur-up lazyload zoompro"
                      data-zoom-image="assets/images/product-detail-page/camelia-reversible-big1.jpg"
                      alt=""
                      src="assets/images/product-detail-page/camelia-reversible-big1.jpg"
                    />
                  </div>
                  <div className="product-labels">
                    <span className="lbl on-sale">Sale</span>
                    <span className="lbl pr-label1">new</span>
                  </div>
                  <div className="product-buttons">
                    <a
                      href="https://www.youtube.com/watch?v=93A2jOW5Mog"
                      className="btn popup-video"
                      title="View Video"
                    >
                      <i className="icon anm anm-play-r" aria-hidden="true" />
                    </a>
                    <a href="#" className="btn prlightbox" title="Zoom">
                      <i
                        className="icon anm anm-expand-l-arrows"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                <div className="lightboximages">
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big1.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big2.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big3.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible7-big.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big4.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big5.jpg"
                    data-size="1462x2048"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big6.jpg"
                    data-size="731x1024"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big7.jpg"
                    data-size="731x1024"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big8.jpg"
                    data-size="731x1024"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big9.jpg"
                    data-size="731x1024"
                  />
                  <a
                    href="assets/images/product-detail-page/camelia-reversible-big10.jpg"
                    data-size="731x1024"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="product-single__meta">
                <h1 className="product-single__title">
                  Product With Left Thumbs
                </h1>
                <div className="product-nav clearfix">
                  <a href="#" className="next" title="Next">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                  </a>
                </div>
                <div className="prInfoRow">
                  <div className="product-stock">
                    {" "}
                    <span className="instock ">In Stock</span>{" "}
                    <span className="outstock hide">Unavailable</span>{" "}
                  </div>
                  <div className="product-sku">
                    SKU: <span className="variant-sku">19115-rdxs</span>
                  </div>
                  <div className="product-review">
                    <a className="reviewLink" href="#tab2">
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star" />
                      <i className="font-13 fa fa-star-o" />
                      <i className="font-13 fa fa-star-o" />
                      <span className="spr-badge-caption">6 reviews</span>
                    </a>
                  </div>
                </div>
                <p className="product-single__price product-single__price-product-template">
                  <span className="visually-hidden">Regular price</span>
                  <s id="ComparePrice-product-template">
                    <span className="money">$600.00</span>
                  </s>
                  <span className="product-price__price product-price__price-product-template product-price__sale product-price__sale--single">
                    <span id="ProductPrice-product-template">
                      <span className="money">$500.00</span>
                    </span>
                  </span>
                  <span className="discount-badge">
                    {" "}
                    <span className="devider">|</span>&nbsp;
                    <span>You Save</span>
                    <span
                      id="SaveAmount-product-template"
                      className="product-single__save-amount"
                    >
                      <span className="money">$100.00</span>
                    </span>
                    <span className="off">
                      (<span>16</span>%)
                    </span>
                  </span>
                </p>
                <div className="orderMsg" data-user={23} data-time={24}>
                  <img src="assets/images/order-icon.jpg" alt="" />{" "}
                  <strong className="items">5</strong> sold in last{" "}
                  <strong className="time">26</strong> hours
                </div>
              </div>
              <div className="product-single__description rte">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                  <li>Neque porro quisquam est qui dolorem ipsum quia dolor</li>
                  <li>Lorem Ipsum is not simply random text.</li>
                </ul>
              </div>
              <div id="quantity_message">
                Hurry! Only <span className="items">4</span> left in stock.
              </div>
              <form
                method="post"
                action="http://annimexweb.com/cart/add"
                id="product_form_10508262282"
                acceptCharset="UTF-8"
                className="product-form product-form-product-template hidedropdown"
                encType="multipart/form-data"
              >
                <div
                  className="swatch clearfix swatch-0 option1"
                  data-option-index={0}
                >
                  <div className="product-form__item">
                    <label className="header">
                      Color: <span className="slVariant">Red</span>
                    </label>
                    <div
                      data-value="Black"
                      className="swatch-element color black available"
                    >
                      <input
                        className="swatchInput"
                        id="swatch-0-black"
                        type="radio"
                        name="option-0"
                        defaultValue="Black"
                      />
                      <label
                        className="swatchLbl color small"
                        htmlFor="swatch-0-black"
                        style={{ backgroundColor: "black" }}
                        title="Black"
                      />
                    </div>
                    <div
                      data-value="Maroon"
                      className="swatch-element color maroon available"
                    >
                      <input
                        className="swatchInput"
                        id="swatch-0-maroon"
                        type="radio"
                        name="option-0"
                        defaultValue="Maroon"
                      />
                      <label
                        className="swatchLbl color small"
                        htmlFor="swatch-0-maroon"
                        style={{ backgroundColor: "maroon" }}
                        title="Maroon"
                      />
                    </div>
                    <div
                      data-value="Blue"
                      className="swatch-element color blue available"
                    >
                      <input
                        className="swatchInput"
                        id="swatch-0-blue"
                        type="radio"
                        name="option-0"
                        defaultValue="Blue"
                      />
                      <label
                        className="swatchLbl color small"
                        htmlFor="swatch-0-blue"
                        style={{ backgroundColor: "blue" }}
                        title="Blue"
                      />
                    </div>
                    <div
                      data-value="Dark Green"
                      className="swatch-element color dark-green available"
                    >
                      <input
                        className="swatchInput"
                        id="swatch-0-dark-green"
                        type="radio"
                        name="option-0"
                        defaultValue="Dark Green"
                      />
                      <label
                        className="swatchLbl color small"
                        htmlFor="swatch-0-dark-green"
                        style={{ backgroundColor: "darkgreen" }}
                        title="Dark Green"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="swatch clearfix swatch-1 option2"
                  data-option-index={1}
                >
                  <div className="product-form__item">
                    <label className="header">
                      Size: <span className="slVariant">XS</span>
                    </label>
                    <div
                      data-value="XS"
                      className="swatch-element xs available"
                    >
                      <input
                        className="swatchInput"
                        id="swatch-1-xs"
                        type="radio"
                        name="option-1"
                        defaultValue="XS"
                      />
                      <label
                        className="swatchLbl medium rectangle"
                        htmlFor="swatch-1-xs"
                        title="XS"
                      >
                        XS
                      </label>
                    </div>
                    <div data-value="S" className="swatch-element s available">
                      <input
                        className="swatchInput"
                        id="swatch-1-s"
                        type="radio"
                        name="option-1"
                        defaultValue="S"
                      />
                      <label
                        className="swatchLbl medium rectangle"
                        htmlFor="swatch-1-s"
                        title="S"
                      >
                        S
                      </label>
                    </div>
                    <div data-value="M" className="swatch-element m available">
                      <input
                        className="swatchInput"
                        id="swatch-1-m"
                        type="radio"
                        name="option-1"
                        defaultValue="M"
                      />
                      <label
                        className="swatchLbl medium rectangle"
                        htmlFor="swatch-1-m"
                        title="M"
                      >
                        M
                      </label>
                    </div>
                    <div data-value="L" className="swatch-element l available">
                      <input
                        className="swatchInput"
                        id="swatch-1-l"
                        type="radio"
                        name="option-1"
                        defaultValue="L"
                      />
                      <label
                        className="swatchLbl medium rectangle"
                        htmlFor="swatch-1-l"
                        title="L"
                      >
                        L
                      </label>
                    </div>
                  </div>
                </div>
                <p className="infolinks">
                  <a href="#sizechart" className="sizelink btn">
                    {" "}
                    Size Guide
                  </a>{" "}
                  <a href="#productInquiry" className="emaillink btn">
                    {" "}
                    Ask About this Product
                  </a>
                </p>
                {/* Product Action */}
                <div className="product-action clearfix">
                  <div className="product-form__item--quantity">
                    <div className="wrapQtyBtn">
                      <div className="qtyField">
                        <a className="qtyBtn minus" href="javascript:void(0);">
                          <i
                            className="fa anm anm-minus-r"
                            aria-hidden="true"
                          />
                        </a>
                        <input
                          type="text"
                          id="Quantity"
                          name="quantity"
                          defaultValue={1}
                          className="product-form__input qty"
                        />
                        <a className="qtyBtn plus" href="javascript:void(0);">
                          <i className="fa anm anm-plus-r" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-form__item--submit">
                    <button
                      type="button"
                      name="add"
                      className="btn product-form__cart-submit"
                    >
                      <span>Add to cart</span>
                    </button>
                  </div>
                  <div
                    className="shopify-payment-button"
                    data-shopify="payment-button"
                  >
                    <button
                      type="button"
                      className="shopify-payment-button__button shopify-payment-button__button--unbranded"
                    >
                      Buy it now
                    </button>
                  </div>
                </div>
                {/* End Product Action */}
              </form>
              <div className="display-table shareRow">
                <div className="display-table-cell medium-up--one-third">
                  <div className="wishlist-btn">
                    <a
                      className="wishlist add-to-wishlist"
                      href="#"
                      title="Add to Wishlist"
                    >
                      <i className="icon anm anm-heart-l" aria-hidden="true" />{" "}
                      <span>Add to Wishlist</span>
                    </a>
                  </div>
                </div>
                <div className="display-table-cell text-right">
                  <div className="social-sharing">
                    <a
                      target="_blank"
                      href="#"
                      className="btn btn--small btn--secondary btn--share share-facebook"
                      title="Share on Facebook"
                    >
                      <i className="fa fa-facebook-square" aria-hidden="true" />{" "}
                      <span className="share-title" aria-hidden="true">
                        Share
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="#"
                      className="btn btn--small btn--secondary btn--share share-twitter"
                      title="Tweet on Twitter"
                    >
                      <i className="fa fa-twitter" aria-hidden="true" />{" "}
                      <span className="share-title" aria-hidden="true">
                        Tweet
                      </span>
                    </a>
                    <a
                      href="#"
                      title="Share on google+"
                      className="btn btn--small btn--secondary btn--share"
                    >
                      <i className="fa fa-google-plus" aria-hidden="true" />{" "}
                      <span className="share-title" aria-hidden="true">
                        Google+
                      </span>
                    </a>
                    <a
                      target="_blank"
                      href="#"
                      className="btn btn--small btn--secondary btn--share share-pinterest"
                      title="Pin on Pinterest"
                    >
                      <i className="fa fa-pinterest" aria-hidden="true" />{" "}
                      <span className="share-title" aria-hidden="true">
                        Pin it
                      </span>
                    </a>
                    <a
                      href="#"
                      className="btn btn--small btn--secondary btn--share share-pinterest"
                      title="Share by Email"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />{" "}
                      <span className="share-title" aria-hidden="true">
                        Email
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <p id="freeShipMsg" className="freeShipMsg" data-price={199}>
                <i className="fa fa-truck" aria-hidden="true" /> GETTING CLOSER!
                ONLY{" "}
                <b className="freeShip">
                  <span
                    className="money"
                    data-currency-usd="$199.00"
                    data-currency="USD"
                  >
                    $199.00
                  </span>
                </b>{" "}
                AWAY FROM <b>FREE SHIPPING!</b>
              </p>
              <p className="shippingMsg">
                <i className="fa fa-clock-o" aria-hidden="true" /> ESTIMATED
                DELIVERY BETWEEN <b id="fromDate">Wed. May 1</b> and{" "}
                <b id="toDate">Tue. May 7</b>.
              </p>
              <div className="userViewMsg" data-user={20} data-time={11000}>
                <i className="fa fa-users" aria-hidden="true" />{" "}
                <strong className="uersView">14</strong> PEOPLE ARE LOOKING FOR
                THIS PRODUCT
              </div>
            </div>
          </div>
        </div>
        {/*End-product-single*/}
        {/*Product Fearure*/}
        <div className="prFeatures">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
              <img
                src="assets/images/credit-card.png"
                alt="Safe Payment"
                title="Safe Payment"
              />
              <div className="details">
                <h3>Safe Payment</h3>Pay with the world's most payment methods.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
              <img
                src="assets/images/shield.png"
                alt="Confidence"
                title="Confidence"
              />
              <div className="details">
                <h3>Confidence</h3>Protection covers your purchase and personal
                data.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
              <img
                src="assets/images/worldwide.png"
                alt="Worldwide Delivery"
                title="Worldwide Delivery"
              />
              <div className="details">
                <h3>Worldwide Delivery</h3>FREE &amp; fast shipping to over 200+
                countries &amp; regions.
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 feature">
              <img
                src="assets/images/phone-call.png"
                alt="Hotline"
                title="Hotline"
              />
              <div className="details">
                <h3>Hotline</h3>Talk to help line for your question on 4141 456
                789, 4125 666 888
              </div>
            </div>
          </div>
        </div>
        {/*End Product Fearure*/}
        {/*Product Tabs*/}
        <div className="tabs-listing">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <Sonnet />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Sonnet />
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              <Sonnet />
            </Tab>
          </Tabs>
        </div>
      </div>
      {/*#ProductSection-product-template*/}
    </div>
  );
};
