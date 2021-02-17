import React from "react";

export const Bestseller = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12">
            <div className="section-header text-center">
              <h2 className="h2">Weekly Bestseller</h2>
              <p>Our most popular products based on sales</p>
            </div>
            <div className="productSlider grid-products">
              <div className="col-12 item">
                {/* start product image */}
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    {/* image */}
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image1.jpg"
                      src="assets/images/product-images/product-image1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End image */}
                    {/* Hover image */}
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image1-1.jpg"
                      src="assets/images/product-images/product-image1-1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End hover image */}
                    {/* Variant Image*/}
                    <img
                      className="grid-view-item__image hover variantImg"
                      src="assets/images/product-images/product-image1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* Variant Image*/}
                    {/* product label */}
                    <div className="product-labels rounded">
                      <span className="lbl on-sale">Sale</span>
                      <span className="lbl pr-label1">new</span>
                    </div>
                    {/* End product label */}
                  </a>
                  {/* end product image */}
                  {/* countdown start */}
                  <div
                    className="saleTime desktop"
                    data-countdown="2022/03/01"
                  />
                  {/* countdown end */}
                  {/* Start product button */}
                  <form
                    className="variants add"
                    action="#"
                    onclick="window.location.href='cart.html'"
                    method="post"
                  >
                    <button
                      className="btn btn-addto-cart"
                      type="button"
                      tabIndex={0}
                    >
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="javascript:void(0)"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview"
                    >
                      <i className="icon anm anm-search-plus-r" />
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                    <div className="compare-btn">
                      <a
                        className="compare add-to-compare"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <i className="icon anm anm-random-r" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">Edna Dress</a>
                  </div>
                  {/* End product name */}
                  {/* product price */}
                  <div className="product-price">
                    <span className="old-price">$500.00</span>
                    <span className="price">$600.00</span>
                  </div>
                  {/* End product price */}
                  {/* Color Variant */}
                  <ul className="swatches">
                    <li
                      className="swatch small rounded navy"
                      rel="assets/images/product-images/product-image-stw1.jpg"
                    />
                    <li
                      className="swatch small rounded green"
                      rel="assets/images/product-images/product-image-stw1-1.jpg"
                    />
                    <li
                      className="swatch small rounded gray"
                      rel="assets/images/product-images/product-image-stw1-2.jpg"
                    />
                    <li
                      className="swatch small rounded aqua"
                      rel="assets/images/product-images/product-image-stw1-3.jpg"
                    />
                    <li
                      className="swatch small rounded orange"
                      rel="assets/images/product-images/product-image-stw1-4.jpg"
                    />
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* start product image */}
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    {/* image */}
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image2.jpg"
                      src="assets/images/product-images/product-image2.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End image */}
                    {/* Hover image */}
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image2-1.jpg"
                      src="assets/images/product-images/product-image2-1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End hover image */}
                    {/* Variant Image*/}
                    <img
                      className="grid-view-item__image hover variantImg"
                      src="assets/images/product-images/product-image1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* Variant Image*/}
                  </a>
                  {/* end product image */}
                  {/* Start product button */}
                  <form
                    className="variants add"
                    action="#"
                    onclick="window.location.href='cart.html'"
                    method="post"
                  >
                    <button
                      className="btn btn-addto-cart"
                      type="button"
                      tabIndex={0}
                    >
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="javascript:void(0)"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview"
                    >
                      <i className="icon anm anm-search-plus-r" />
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                    <div className="compare-btn">
                      <a
                        className="compare add-to-compare"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <i className="icon anm anm-random-r" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">Elastic Waist Dress</a>
                  </div>
                  {/* End product name */}
                  {/* product price */}
                  <div className="product-price">
                    <span className="price">$748.00</span>
                  </div>
                  {/* End product price */}
                  {/* Color Variant */}
                  <ul className="swatches">
                    <li
                      className="swatch small rounded black"
                      rel="assets/images/product-images/product-image2.jpg"
                    />
                    <li
                      className="swatch small rounded navy"
                      rel="assets/images/product-images/product-image-swt2.jpg"
                    />
                    <li
                      className="swatch small rounded purple"
                      rel="assets/images/product-images/product-image-swt2-1.jpg"
                    />
                    <li
                      className="swatch small rounded teal"
                      rel="assets/images/product-images/product-image-swt2-2.jpg"
                    />
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* start product image */}
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    {/* image */}
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image3.jpg"
                      src="assets/images/product-images/product-image3.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End image */}
                    {/* Hover image */}
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image3-1.jpg"
                      src="assets/images/product-images/product-image3-1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End hover image */}
                    {/* Variant Image*/}
                    <img
                      className="grid-view-item__image hover variantImg"
                      src="assets/images/product-images/product-image3.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* Variant Image*/}
                    {/* product label */}
                    <div className="product-labels rounded">
                      <span className="lbl pr-label2">Hot</span>
                    </div>
                    {/* End product label */}
                  </a>
                  {/* end product image */}
                  {/* Start product button */}
                  <form
                    className="variants add"
                    action="#"
                    onclick="window.location.href='cart.html'"
                    method="post"
                  >
                    <button
                      className="btn btn-addto-cart"
                      type="button"
                      tabIndex={0}
                    >
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="javascript:void(0)"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview"
                    >
                      <i className="icon anm anm-search-plus-r" />
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                    <div className="compare-btn">
                      <a
                        className="compare add-to-compare"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <i className="icon anm anm-random-r" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">3/4 Sleeve Kimono Dress</a>
                  </div>
                  {/* End product name */}
                  {/* product price */}
                  <div className="product-price">
                    <span className="price">$550.00</span>
                  </div>
                  {/* End product price */}
                  {/* Color Variant */}
                  <ul className="swatches">
                    <li
                      className="swatch small rounded gray"
                      rel="assets/images/product-images/product-image16.jpg"
                    />
                    <li
                      className="swatch small rounded red"
                      rel="assets/images/product-images/product-image5.jpg"
                    />
                    <li
                      className="swatch small rounded orange"
                      rel="assets/images/product-images/product-image5-1.jpg"
                    />
                    <li
                      className="swatch small rounded yellow"
                      rel="assets/images/product-images/product-image17.jpg"
                    />
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* start product image */}
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    {/* image */}
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image4.jpg"
                      src="assets/images/product-images/product-image4.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End image */}
                    {/* Hover image */}
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image4-1.jpg"
                      src="assets/images/product-images/product-image4-1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End hover image */}
                    {/* Variant Image*/}
                    <img
                      className="grid-view-item__image hover variantImg"
                      src="assets/images/product-images/product-image3.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* Variant Image*/}
                    {/* product label */}
                    <div className="product-labels rounded">
                      <span className="lbl on-sale">Sale</span>
                    </div>
                    {/* End product label */}
                  </a>
                  {/* end product image */}
                  {/* Start product button */}
                  <form
                    className="variants add"
                    action="#"
                    onclick="window.location.href='cart.html'"
                    method="post"
                  >
                    <button
                      className="btn btn-addto-cart"
                      type="button"
                      tabIndex={0}
                    >
                      Add To Cart
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="javascript:void(0)"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview"
                    >
                      <i className="icon anm anm-search-plus-r" />
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                    <div className="compare-btn">
                      <a
                        className="compare add-to-compare"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <i className="icon anm anm-random-r" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">Cape Dress</a>
                  </div>
                  {/* End product name */}
                  {/* product price */}
                  <div className="product-price">
                    <span className="old-price">$900.00</span>
                    <span className="price">$788.00</span>
                  </div>
                  {/* End product price */}
                  {/* Color Variant */}
                  <ul className="swatches">
                    <li
                      className="swatch small rounded black"
                      rel="assets/images/product-images/cape-dress-2.jpg"
                    />
                    <li
                      className="swatch small rounded maroon"
                      rel="assets/images/product-images/product-image4-1.jpg"
                    />
                    <li
                      className="swatch small rounded navy"
                      rel="assets/images/product-images/product-image2.jpg"
                    />
                    <li
                      className="swatch small rounded darkgreen"
                      rel="assets/images/product-images/product-image2-1.jpg"
                    />
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End product details */}
              </div>
              <div className="col-12 item">
                {/* start product image */}
                <div className="product-image">
                  {/* start product image */}
                  <a
                    href="product-layout-1.html"
                    className="grid-view-item__link"
                  >
                    {/* image */}
                    <img
                      className="primary blur-up lazyload"
                      data-src="assets/images/product-images/product-image5.jpg"
                      src="assets/images/product-images/product-image5.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End image */}
                    {/* Hover image */}
                    <img
                      className="hover blur-up lazyload"
                      data-src="assets/images/product-images/product-image5-1.jpg"
                      src="assets/images/product-images/product-image5-1.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* End hover image */}
                    {/* Variant Image*/}
                    <img
                      className="grid-view-item__image hover variantImg"
                      src="assets/images/product-images/product-image5.jpg"
                      alt="image"
                      title="product"
                    />
                    {/* Variant Image*/}
                  </a>
                  {/* end product image */}
                  {/* Start product button */}
                  <form
                    className="variants add"
                    action="#"
                    onclick="window.location.href='cart.html'"
                    method="post"
                  >
                    <button
                      className="btn btn-addto-cart"
                      type="button"
                      tabIndex={0}
                    >
                      Select Options
                    </button>
                  </form>
                  <div className="button-set">
                    <a
                      href="javascript:void(0)"
                      title="Quick View"
                      className="quick-view-popup quick-view"
                      data-toggle="modal"
                      data-target="#content_quickview"
                    >
                      <i className="icon anm anm-search-plus-r" />
                    </a>
                    <div className="wishlist-btn">
                      <a
                        className="wishlist add-to-wishlist"
                        href="wishlist.html"
                      >
                        <i className="icon anm anm-heart-l" />
                      </a>
                    </div>
                    <div className="compare-btn">
                      <a
                        className="compare add-to-compare"
                        href="compare.html"
                        title="Add to Compare"
                      >
                        <i className="icon anm anm-random-r" />
                      </a>
                    </div>
                  </div>
                  {/* end product button */}
                </div>
                {/* end product image */}
                {/*start product details */}
                <div className="product-details text-center">
                  {/* product name */}
                  <div className="product-name">
                    <a href="product-layout-1.html">Paper Dress</a>
                  </div>
                  {/* End product name */}
                  {/* product price */}
                  <div className="product-price">
                    <span className="price">$550.00</span>
                  </div>
                  {/* End product price */}
                  {/* Color Variant */}
                  <ul className="swatches">
                    <li
                      className="swatch small rounded gray"
                      rel="assets/images/product-images/product-image16.jpg"
                    />
                    <li
                      className="swatch small rounded red"
                      rel="assets/images/product-images/product-image5.jpg"
                    />
                    <li
                      className="swatch small rounded orange"
                      rel="assets/images/product-images/product-image5-1.jpg"
                    />
                    <li
                      className="swatch small rounded yellow"
                      rel="assets/images/product-images/product-image17.jpg"
                    />
                  </ul>
                  {/* End Variant */}
                </div>
                {/* End product details */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
