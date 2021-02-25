import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Modal,
  Button,
  Form,
  Col,
  CardGroup,
  OverlayTrigger,
  Popover,
  ListGroup,
  Image,
} from "react-bootstrap";
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
  register,
} from "../../api/index.js";
import { useAuth } from "../../hooks/useAuth";
const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is less than 6 characters")
    .required("Password is required"),
});
const validationSchemaRegister = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  name: yup.string().required("Name is required"),
  password: yup
    .string()
    .min(6, "Password is less than 6 characters")
    .required("Password is required"),
  c_password: yup
    .string()
    .min(6, "Confirm Password is less than 6 characters")
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Confirm password not match with password"),
  dob: yup.date().required("Day of birth is required"),
  photoUrl: yup.string().required("Please choose a avatar"),
});
export const Header = () => {
  useAuth();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const initialValuesRegister = {
    email: "",
    name: "",
    password: "",
    // c_password: "",
    dob: "",
    photoUrl: "",
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
  const closeSignIn = () => {
    setSigInScreen(false);
  };
  const closeSignUp = async function () {
    setSigUpScreen(false);
  };
  const uploadMyAvatar = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    const result = await uploadAvatar(formData);
    initialValuesRegister.photoUrl = result.data.url;
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
                <Image
                  src="https://res.cloudinary.com/dps6fac1c/image/upload/v1613621648/images/e-library_uxmixc.png"
                  style={{ width: "30%", height: "30%" }}
                />
              </NavLink>
            </div>
            {/*End Desktop Logo*/}
            <div className="col-2 col-sm-2 col-md-3 col-lg-7">
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
                    <NavLink to="/favorite">Favorite</NavLink>
                  </li>
                  {user.email ? (
                    <li>
                      <OverlayTrigger
                        placement="bottom"
                        trigger="click"
                        overlay={
                          <Popover>
                            <Popover.Title as="h3">
                              {user.displayName}
                            </Popover.Title>
                            <Popover.Content>
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <NavLink to="/me">Update Profile</NavLink>
                                </ListGroup.Item>
                                <ListGroup.Item>My Book</ListGroup.Item>
                                <ListGroup.Item>
                                  Borrowing history
                                </ListGroup.Item>
                                <ListGroup.Item
                                  onClick={() => {
                                    logOut();
                                  }}
                                >
                                  LogOut
                                </ListGroup.Item>
                              </ListGroup>
                            </Popover.Content>
                          </Popover>
                        }
                      >
                        <div>
                          <img
                            src={user.photoUrl}
                            alt=""
                            className="border rounded-circle"
                            style={{ width: 35, marginLeft: "3%" }}
                          />
                        </div>
                      </OverlayTrigger>
                    </li>
                  ) : (
                    <li
                      className="lvl1 parent megamenu"
                      style={{ cursor: "pointer" }}
                    >
                      <a onClick={() => setSigInScreen(true)}>Sign In</a>
                    </li>
                  )}
                  {user.email ? null : (
                    <li
                      className="lvl1 parent megamenu"
                      style={{ cursor: "pointer" }}
                    >
                      <a onClick={() => setSigUpScreen(true)}>Sign Up</a>
                    </li>
                  )}
                </ul>
              </nav>
              {/*End Desktop Menu*/}
            </div>
            {/*Mobile Logo*/}
            <div className="col-6 col-sm-6 col-md-5 col-lg-1 d-block d-lg-none mobile-logo">
              <div className="logo">
                <a href="index.html">
                  <Image
                    src="https://res.cloudinary.com/dps6fac1c/image/upload/v1613621648/images/e-library_uxmixc.png"
                    style={{ width: "50%", height: "50%" }}
                  />
                </a>
              </div>
            </div>
            {/*Mobile Logo*/}
            <div className="col-4 col-sm-4 col-md-4 col-lg-3">
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
          {user.email ? (
            <li>
              <OverlayTrigger
                placement="auto"
                trigger="click"
                overlay={
                  <Popover>
                    <Popover.Title as="h3">{user.displayName}</Popover.Title>
                    <Popover.Content>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <NavLink to="/me">Update Profile</NavLink>
                        </ListGroup.Item>
                        <ListGroup.Item>My Book</ListGroup.Item>
                        <ListGroup.Item>Borrowing history</ListGroup.Item>
                        <ListGroup.Item>LogOut</ListGroup.Item>
                      </ListGroup>
                    </Popover.Content>
                  </Popover>
                }
              >
                <div>
                  <Image
                    src={user.photoUrl}
                    alt=""
                    className="border rounded-circle"
                    style={{ width: 35, marginLeft: "3%" }}
                  />
                  <span style={{ marginLeft: 5 }}>{user.displayName}</span>
                </div>
              </OverlayTrigger>
            </li>
          ) : (
            <li className="lvl1 parent megamenu" style={{ cursor: "pointer" }}>
              <a onClick={() => setSigInScreen(true)}>Sign In</a>
            </li>
          )}
          {user.email ? null : (
            <li className="lvl1 parent megamenu" style={{ cursor: "pointer" }}>
              <a onClick={() => setSigUpScreen(true)}>Sign Up</a>
            </li>
          )}
          <li className="lvl1 parent megamenu">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="lvl1 parent megamenu">
            <NavLink to="/library">Library</NavLink>
          </li>
          <li className="lvl1 parent megamenu">
            <NavLink to="/library">Favorite</NavLink>
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
              initialValues={initialValuesRegister}
              onSubmit={async (values) => {
                try {
                  values.role = "USER";
                  values.displayName = values.name;
                  const result = await register(values);
                  if (result.status === 200) {
                    setSigUpScreen(false);
                    return Alert.success(
                      `<div role="alert">
                                                 ${result.data.message}
                                                </div>`,
                      {
                        html: true,
                        position: "top-right",
                        effect: "slide",
                      }
                    );
                  }
                } catch (error) {
                  console.log(error);

                  return Alert.error(
                    `<div role="alert">
                                                ${error.response.data.message}
                                                </div>`,
                    {
                      html: true,
                      position: "top-right",
                      effect: "slide",
                    }
                  );
                }
              }}
              validationSchema={validationSchemaRegister}
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
                          onChange={(event) => {
                            initialValuesRegister.email = event.target.value;
                          }}
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
                      <Form.Label column lg={3.5}>
                        Name
                      </Form.Label>
                      <Col>
                        <Form.Control
                          lg={4}
                          type="name"
                          id="name"
                          name="name"
                          className="ml-5"
                          style={{ width: "60%" }}
                          placeholder="Enter your name"
                          onChange={(event) => {
                            initialValuesRegister.name = event.target.value;
                          }}
                          onBlur={props.handleBlur}
                          isInvalid={props.touched.name && props.errors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.name && props.errors.name}
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
                          onChange={(event) => {
                            initialValuesRegister.password = event.target.value;
                          }}
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
                          onChange={(event) => {
                            initialValuesRegister.c_password =
                              event.target.value;
                          }}
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
                          onChange={(event) => {
                            initialValuesRegister.dob = event.target.value;
                          }}
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
                      id="photoUrl"
                      name="photoUrl"
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
