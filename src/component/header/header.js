import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Form, Col, CardGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import {
  urlSignInWithGoogle,
  urlSignInWithFacebook,
  checkLogin,
  uploadAvatar,
} from "../../api/index.js";
const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is less than 6 characters")
    .required("Password is required"),
});
const validationSchemaRegister = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is less than 6 characters")
    .required("Password is required"),
  c_password: yup
    .string()
    .min(6, "Confirm Password is less than 6 characters")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Confirm Password not match"),
  dob: yup.date().required("Day of birth is required"),
  avatar: yup.string().required("Please choose a avatar"),
});
export const Header = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const initialValuesRegister = {
    email: "",
    password: "",
    dob: "",
    avatar: "",
  };
  const [signInScreen, setSigInScreen] = useState(false);
  const [signUpScreen, setSigUpScreen] = useState(false);
  const user = useSelector((state) => {
    return state.login.data;
  });
  const signInWithGoogle = () => {
    return (window.location = urlSignInWithGoogle);
  };
  const signInWithFacebook = () => {
    return (window.location = urlSignInWithFacebook);
  };
  const showSignIn = () => {
    setSigInScreen(true);
  };
  const closeSignIn = () => {
    setSigInScreen(false);
  };
  const showSignUp = async function () {
    setSigUpScreen(true);
  };
  const closeSignUp = async function () {
    setSigUpScreen(false);
  };
  const uploadMyAvatar = async (file) => {
    const formData = new FormData();
    formData.append("images", file);
    const result = await uploadAvatar(formData);
    console.log(result);
  };
  const logOut = async () => {
    localStorage.removeItem("token");
    window.location = "/";
  };
  return (
    <div>
      <Alert stack={{ limit: 3 }} />
      {/* Header Area Start */}
      <div className="header-wrap animated d-flex border-bottom">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/*Desktop Logo*/}
            <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
              <NavLink to="/">
                <img
                  src="images/logo/e-library.png"
                  style={{ width: "30%", height: "30%" }}
                />
              </NavLink>
            </div>
            {/*End Desktop Logo*/}
            <div className="col-2 col-sm-3 col-md-3 col-lg-8">
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open"
                >
                  <i className="icon anm anm-times-l" />
                  <i className="anm anm-bars-r" />
                </button>
              </div>
              {/*Desktop Menu*/}
              <nav className="grid__item" id="AccessibleNav">
                {/* for mobile */}
                <ul id="siteNav" className="site-nav medium center hidearrow">
                  <li className="lvl1 parent megamenu">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <NavLink to="/library">Library</NavLink>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <a href="#">Favorite</a>
                  </li>
                  <li
                    className="lvl1 parent megamenu"
                    style={{ cursor: "pointer" }}
                  >
                    <a onClick={() => setSigInScreen(true)}>Login</a>
                  </li>
                  <li
                    className="lvl1 parent megamenu"
                    style={{ cursor: "pointer" }}
                  >
                    <a onClick={() => setSigUpScreen(true)}>Register</a>
                  </li>
                </ul>
              </nav>
              {/*End Desktop Menu*/}
            </div>
            {/*Mobile Logo*/}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="images/logo/e-library.png"
                    style={{ width: "50%", height: "50%" }}
                  />
                </a>
              </div>
            </div>
            {/*Mobile Logo*/}
            <div className="col-4 col-sm-3 col-md-3 col-lg-2">
              <div className="site-cart">
                <a href="#" className="site-header__cart" title="Cart">
                  <i className="icon anm anm-bag-l" />
                  <span
                    id="CartCount"
                    className="site-header__cart-count"
                    data-cart-render="item_count"
                  >
                    2
                  </span>
                </a>
                {/*Minicart Popup*/}
                <div id="header-cart" className="block block-cart">
                  <ul className="mini-products-list">
                    <li className="item">
                      <a className="product-image" href="#">
                        <img
                          src="assets/images/product-images/cape-dress-1.jpg"
                          alt="3/4 Sleeve Kimono Dress"
                          title
                        />
                      </a>
                      <div className="product-details">
                        <a href="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true" />
                        </a>
                        <a href="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true" />
                        </a>
                        <a className="pName" href="cart.html">
                          Sleeve Kimono Dress
                        </a>
                        <div className="variant-cart">Black / XL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              href="javascript:void(0);"
                            >
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
                            <a
                              className="qtyBtn plus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$59.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item">
                      <a className="product-image" href="#">
                        <img
                          src="assets/images/product-images/cape-dress-2.jpg"
                          alt="Elastic Waist Dress - Black / Small"
                          title
                        />
                      </a>
                      <div className="product-details">
                        <a href="#" className="remove">
                          <i className="anm anm-times-l" aria-hidden="true" />
                        </a>
                        <a href="#" className="edit-i remove">
                          <i className="anm anm-edit" aria-hidden="true" />
                        </a>
                        <a className="pName" href="cart.html">
                          Elastic Waist Dress
                        </a>
                        <div className="variant-cart">Gray / XXL</div>
                        <div className="wrapQtyBtn">
                          <div className="qtyField">
                            <span className="label">Qty:</span>
                            <a
                              className="qtyBtn minus"
                              href="javascript:void(0);"
                            >
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
                            <a
                              className="qtyBtn plus"
                              href="javascript:void(0);"
                            >
                              <i
                                className="fa anm anm-plus-r"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="priceRow">
                          <div className="product-price">
                            <span className="money">$99.00</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="total">
                    <div className="total-in">
                      <span className="label">Cart Subtotal:</span>
                      <span className="product-price">
                        <span className="money">$748.00</span>
                      </span>
                    </div>
                    <div className="buttonSet text-center">
                      <a
                        href="cart.html"
                        className="btn btn-secondary btn--small"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-secondary btn--small"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
                {/*End Minicart Popup*/}
              </div>
              <div className="site-header__search">
                <button type="button" className="search-trigger">
                  <i className="icon anm anm-search-l" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav-wrapper" role="navigation">
        <div className="closemobileMenu">
          <i className="icon anm anm-times-l pull-right" /> Close Menu
        </div>
        <ul id="MobileNav" className="mobile-nav">
          <li className="lvl1 parent megamenu">
            <a href="home2-default.html">Home</a>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="#">Shop</a>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="product-layout-1.html">Product </a>
          </li>
          <li className="lvl1 parent megamenu">
            <a onClick={() => setSigInScreen(true)}>Login</a>
          </li>
          <li className="lvl1 parent megamenu">
            <a href="about-us.html">Register</a>
          </li>
        </ul>
      </div>

      <Modal
        show={signInScreen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={closeSignIn}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              try {
                const result = await checkLogin(values);
                if (result.status === 200) {
                  closeSignIn();
                  localStorage.setItem("token", result.data.token);
                  dispatch({ type: "DATA_LOGIN", payload: result.data.user });
                  console.log(result.data);
                  return Alert.success(
                    `<div role="alert"> Sign In Successfully </div>`,
                    {
                      html: true,
                      position: "top-right",
                      effect: "slide",
                    }
                  );
                }
              } catch (error) {
                return Alert.error(
                  `<div role="alert">${error.response.data.message}</div>`,
                  {
                    html: true,
                    position: "top-right",
                    effect: "slide",
                  }
                );
              }
            }}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form className="form-horizontal" onSubmit={props.handleSubmit}>
                <Form.Group className="ml-3">
                  <Form.Row>
                    <Form.Label column lg={3.5}>
                      Email
                    </Form.Label>
                    <Col>
                      <Form.Control
                        lg={4}
                        type="email"
                        id="email"
                        name="email"
                        style={{ width: "60%" }}
                        placeholder="Enter your email"
                        className="ml-5"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        isInvalid={props.touched.email && props.errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {props.touched.email && props.errors.email}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Form.Group className="ml-3">
                  <Form.Row>
                    <Form.Label column lg={1.7}>
                      Password
                    </Form.Label>
                    <Col>
                      <Form.Control
                        lg={4}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter you password"
                        style={{ width: "65%" }}
                        className="ml-3"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        isInvalid={
                          props.touched.password && props.errors.password
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {props.touched.password && props.errors.password}
                      </Form.Control.Feedback>
                    </Col>
                  </Form.Row>
                </Form.Group>
                <Modal.Footer>
                  <Button
                    type="submit"
                    style={{ height: 47, width: 250, borderRadius: 4 }}
                  >
                    Sign in <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </Button>
                  <GoogleLoginButton
                    onClick={signInWithGoogle}
                  ></GoogleLoginButton>
                  <FacebookLoginButton
                    onClick={signInWithFacebook}
                  ></FacebookLoginButton>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <Modal
        show={signUpScreen}
        onHide={closeSignUp}
        size="lg"
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-body card-block">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                //     try {
                //       const result = await createPublisher(values);
                //       if (result.status === 200) {
                //         handleCloseCreate();
                //         setReload(!reload);
                //         return Alert.success(
                //           `<div role="alert">
                //                                  ${result.data.message}
                //                                 </div>`,
                //           {
                //             html: true,
                //             position: "top-right",
                //             effect: "slide",
                //           }
                //         );
                //       }
                //     } catch (error) {
                //       handleCloseCreate();
                //       return Alert.error(
                //         `<div role="alert">
                //                                 ${error.response.data.message}
                //                                 </div>`,
                //         {
                //           html: true,
                //           position: "top-right",
                //           effect: "slide",
                //         }
                //       );
                //     }
              }}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form
                  className="form-horizontal ml-5"
                  onSubmit={props.handleSubmit}
                >
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column lg={3.5}>
                        Email
                      </Form.Label>
                      <Col>
                        <Form.Control
                          lg={4}
                          type="email"
                          id="email"
                          name="email"
                          className="ml-5"
                          style={{ width: "60%" }}
                          placeholder="Enter your email"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={props.touched.email && props.errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.email && props.errors.email}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column lg={1.7}>
                        Password
                      </Form.Label>
                      <Col>
                        <Form.Control
                          lg={4}
                          type="password"
                          id="password"
                          name="password"
                          className="ml-3"
                          style={{ width: "63%" }}
                          placeholder="Enter your password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={
                            props.touched.password && props.errors.password
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.password && props.errors.password}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column lg={3.5}>
                        Confirm Password
                      </Form.Label>
                      <Col>
                        <Form.Control
                          lg={3}
                          type="password"
                          id="c_password"
                          name="c_password"
                          style={{ width: "63%" }}
                          placeholder="Enter confirm password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={
                            props.touched.c_password && props.errors.c_password
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.c_password && props.errors.c_password}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label column lg={3.5}>
                        Day Of Birth
                      </Form.Label>
                      <Col>
                        <Form.Control
                          lg={3}
                          type="Date"
                          id="dob"
                          name="dob"
                          className="ml-3"
                          style={{ width: "63%" }}
                          placeholder="Enter your day of birth"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={props.touched.dob && props.errors.dob}
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.dob && props.errors.dob}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Avatar</Form.Label>
                    <Form.File
                      id="images"
                      name="images"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        uploadMyAvatar(e.target.files[0]);
                      }}
                    />
                    <CardGroup className="mt-3">
                      {/* {images.map((item) => (
                        <Card style={{ width: "18rem" }} className="mb-3 ml-3">
                          <i
                            className="fa fa-times-circle"
                            aria-hidden="true"
                            style={{ float: "right" }}
                          ></i>
                          <Card.Img
                            variant="top"
                            src={item}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Card>
                      ))} */}
                    </CardGroup>
                  </Form.Group>
                  <Modal.Footer>
                    <Button variant="success" type="submit">
                      Sign Up
                      <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
