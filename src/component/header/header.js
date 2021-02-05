import React, { useState } from "react";
import { NavLink, Redirect, Link } from "react-router-dom";
import { RouterComponent } from "../router";
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
  return (
    <div>
      <Alert stack={{ limit: 3 }} />
      {/* Mobile Nav (max width 767px)*/}
      <div className="mobile-nav">
        {/* Navbar Brand */}
        <div className="amado-navbar-brand">
          <a href="index.html">
            <img src="img/e-library.png" alt="" />
          </a>
        </div>
        {/* Navbar Toggler */}
        <div className="amado-navbar-toggler">
          <span />
          <span />
          <span />
        </div>
      </div>
      {/* Header Area Start */}
      <header className="header-area clearfix">
        {/* Close Icon */}
        <div className="nav-close">
          <i className="fa fa-close" aria-hidden="true" />
        </div>
        {/* Logo */}
        <div className="logo">
          <a href="index.html">
            <img src="img/e-library.png" alt="" />
          </a>
          {user.email ? (
            <div className="user-area dropdown mt-5">
              <Link
                to="#"
                className="dropdown-toggle active"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-avatar rounded-circle"
                  style={{ float: "left" }}
                  alt="User Avatar"
                  src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                />
              </Link>
              <div
                className="user-menu dropdown-menu"
                style={{ fontSize: 100 }}
              >
                <Link to="/index" className="nav-link">
                  <i className="fa fa- user" />
                  My Profile
                </Link>
                <Link to="/index" className="nav-link">
                  <i className="fa fa-power -off" />
                  Logout
                </Link>
              </div>
            </div>
          ) : null}
        </div>
        {/* Amado Nav */}
        <nav className="amado-nav">
          <ul>
            <li className="active">
              <NavLink to="/">
                Home <i className="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/library">
                Library <i class="fa fa-book" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              <a href="cart.html">
                Cart <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" className="search-nav">
                Search <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#" className="fav-nav">
                Favorite <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
            </li>
            {!user.email ? (
              <div>
                <li>
                  <Button onClick={showSignIn} style={{ width: "60%" }}>
                    SignIn <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="success"
                    style={{ width: "60%" }}
                    onClick={showSignUp}
                  >
                    SignUp{" "}
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                  </Button>
                </li>
              </div>
            ) : null}
          </ul>
        </nav>
      </header>
      <RouterComponent />

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
                  <Button type="submit" style={{ height: 47 }}>
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

      <Modal show={signUpScreen} onHide={closeSignUp} size="lg">
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
