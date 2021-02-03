import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { RouterComponent } from "../router";
import { useSelector } from "react-redux";
import { Modal, Button, Form, Col } from "react-bootstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { urlSignInWithGoogle, urlSignInWithFacebook } from "../../api/index";
export const Header = () => {
  const [signInScreen, setSigInScreen] = useState(false);
  const user = useSelector((state) => {
    return state.login.data;
  });

  const signInWithGoogle = () => {
    return (window.location = urlSignInWithGoogle);
  };
  const signInWithFacebook = () => {
    return (window.location = urlSignInWithFacebook);
  };
  return (
    <div>
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
            <li
              onClick={() => {
                setSigInScreen(true);
              }}
            >
              <Button className="mt-2">
                SignIn <i className="fa fa-sign-in" aria-hidden="true"></i>
              </Button>
            </li>
            <li>
              <Button className="mt-2" variant="success">
                SignUp <i className="fa fa-user-plus" aria-hidden="true"></i>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="social-info d-flex justify-content-between">
          <a href="#">
            <i className="fa fa-pinterest" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>
        </div>
      </header>
      <RouterComponent />

      <Modal
        show={signInScreen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        hidden={() => {
          setSigInScreen(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-horizontal">
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
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // isInvalid={
                    //   props.touched.book_name && props.errors.book_name
                    // }
                  />
                  {/* <Form.Control.Feedback type="invalid">
                          {props.touched.book_name && props.errors.book_name}
                        </Form.Control.Feedback> */}
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
                    // onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // isInvalid={
                    //   props.touched.book_type && props.errors.book_type
                    // }
                  />
                  {/* <Form.Control.Feedback type="invalid">
                          {props.touched.book_type && props.errors.book_type}
                        </Form.Control.Feedback> */}
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>Sign in</Button>
          <GoogleLoginButton onClick={signInWithGoogle}></GoogleLoginButton>
          <FacebookLoginButton
            onClick={signInWithFacebook}
          ></FacebookLoginButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
