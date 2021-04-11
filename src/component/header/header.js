import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
  Spinner,
} from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import {
  checkLogin,
  uploadAvatar,
  register,
  loginWithGoogle,
  loginWithFacebook,
  addCoins,
  forgotPasswordApi,
} from "../../api/index.js";
import { useAuth } from "../../hooks/useAuth";
import PayPal from "../../utils/paypal";
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
const validationMoneySchema = yup.object().shape({
  money: yup
    .number("Your money is not valid. Example: 1.1")
    .min(1, "Minimum amount is 1 dollar")
    .required("Please enter a number money"),
});
const validationForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
});
export const Header = () => {
  useAuth();
  const history = useHistory();
  const [formAddCoins, setFormAddCoins] = useState(false);
  const dispatch = useDispatch();
  const [forgotPassword, setForgotPassword] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);
  const initialForgotPassword = {
    email: "",
  };
  const initialMoney = {
    money: 0,
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const initialValuesRegister = {
    email: "",
    name: "",
    password: "",
    dob: "",
    photoUrl: "",
  };
  const [numberMoney, setNumberMoney] = useState(0);
  const signInScreenStatus = useSelector((state) => {
    return state.formLoginStatus;
  });
  const [signUpScreen, setSigUpScreen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const user = useSelector((state) => {
    return state.login.data;
  });
  const closeSignIn = () => {
    dispatch({ type: "FORM_LOGIN_STATUS", payload: false });
    history.push("/");
  };
  useEffect(() => {}, [user]);
  const closeSignUp = async function () {
    setSigUpScreen(false);
  };
  const uploadMyAvatar = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    setSubmitStatus(true);
    const result = await uploadAvatar(formData);
    initialValuesRegister.photoUrl = result.data.url;
    setSubmitStatus(false);
  };
  const logOut = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    window.location.href = "/";
  };
  const responseGoogle = async (response) => {
    if (response.accessToken) {
      try {
        const result = await loginWithGoogle({
          access_token: response.accessToken,
        });
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("_id", result.data.user._id);
        Alert.success(
          `<div role="alert"><i class="fa fa-check-circle" aria-hidden="true"></i> Sign In Successfully </div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
        return (window.location.href = "/");
      } catch (error) {
        return Alert.error(
          `<div role="alert"> <i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      }
    }
  };
  const responseFacebook = async (response) => {
    if (response.accessToken) {
      try {
        const result = await loginWithFacebook({
          access_token: response.accessToken,
          user_id: response.id,
        });
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("_id", result.data.user._id);
        Alert.success(
          `<div role="alert"> <i class="fa fa-check-circle" aria-hidden="true"></i> Sign In Successfully </div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
        return (window.location.href = "/");
      } catch (error) {
        return Alert.error(
          `<div role="alert"> <i class="fa fa-times-circle" aria-hidden="true"></i>${error.response.data.message}</div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      }
    }
  };
  const transactionSuccess = async (data) => {
    try {
      const response = await addCoins({
        paymentId: data.paymentID,
        userId: user._id,
      });
      setPaymentMethod(false);
      return Alert.success(
        `<div role="alert"><i class="fa fa-check-circle" aria-hidden="true"></i>  ${response.data.message} </div>`,
        {
          html: true,
          position: "top-right",
          effect: "slide",
        }
      );
    } catch (error) {
      return Alert.error(
        `<div role="alert"> <i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
        {
          html: true,
          position: "top-right",
          effect: "slide",
        }
      );
    }
  };
  const transactionError = (err) => {
    return Alert.error(
      `<div role="alert"> <i class="fa fa-times-circle" aria-hidden="true"></i> ${err.message}</div>`,
      {
        html: true,
        position: "top-right",
        effect: "slide",
      }
    );
  };
  const transactionCanceled = () => {
    return Alert.success(
      `<div role="alert"><i class="fa fa-check-circle" aria-hidden="true"></i> Transaction called successfully</div>`,
      {
        html: true,
        position: "top-right",
        effect: "slide",
      }
    );
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
                    <NavLink to="/">Home </NavLink>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <NavLink to="/library">Library</NavLink>
                  </li>
                  <li className="lvl1 parent megamenu">
                    <NavLink to="/favorite">Favorite</NavLink>
                  </li>
                  {user.email ? (
                    <li>
                      <NavLink to="/myLibrary">My Library</NavLink>
                    </li>
                  ) : (
                    <li
                      className="lvl1 parent megamenu"
                      style={{ cursor: "pointer" }}
                    >
                      <NavLink
                        to="#"
                        onClick={() => {
                          dispatch({
                            type: "FORM_LOGIN_STATUS",
                            payload: true,
                          });
                        }}
                      >
                        Sign In
                      </NavLink>
                    </li>
                  )}
                  {user.email ? null : (
                    <li
                      className="lvl1 parent megamenu"
                      style={{ cursor: "pointer" }}
                    >
                      <NavLink to="#" onClick={() => setSigUpScreen(true)}>
                        Sign Up
                      </NavLink>
                    </li>
                  )}
                </ul>
              </nav>
              {/*End Desktop Menu*/}
            </div>
            {/*Mobile Logo*/}
            <div className="col-6 col-sm-6 col-md-5 col-lg-1 d-block d-lg-none mobile-logo">
              <div className="logo">
                <NavLink to="/">
                  <Image
                    src="https://res.cloudinary.com/dps6fac1c/image/upload/v1613621648/images/e-library_uxmixc.png"
                    style={{ width: "50%", height: "50%" }}
                  />
                </NavLink>
              </div>
            </div>
            {/*Mobile Logo*/}
            <div className="col-4 col-sm-4 col-md-4 col-lg-3">
              <div className="site-cart">
                {user.email ? (
                  <OverlayTrigger
                    placement="auto"
                    trigger="click"
                    overlay={
                      <Popover>
                        <Popover.Title as="h3">
                          {user.displayName}
                        </Popover.Title>
                        <Popover.Content>
                          <ListGroup variant="flush">
                            <ListGroup.Item
                              onClick={() => {
                                document.getElementById("user").click();
                              }}
                            >
                              <NavLink to="/me">Update Profile</NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item
                              onClick={() => {
                                document.getElementById("user").click();
                              }}
                            >
                              <NavLink to="/addCoinsHistory">
                                Coin deposit history
                              </NavLink>
                            </ListGroup.Item>
                            <ListGroup.Item>
                              My eCoins: {user.wallet}
                            </ListGroup.Item>
                            <ListGroup.Item
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setFormAddCoins(true);
                                document.getElementById("user").click();
                              }}
                            >
                              Add eCoins
                            </ListGroup.Item>
                            <ListGroup.Item
                              onClick={() => {
                                logOut();
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              LogOut
                            </ListGroup.Item>
                          </ListGroup>
                        </Popover.Content>
                      </Popover>
                    }
                  >
                    <div id="user">
                      <Image
                        src={user.photoUrl}
                        className="border rounded-circle"
                        style={{
                          width: 35,
                          height: 35,
                          marginLeft: "3%",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                  </OverlayTrigger>
                ) : null}
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
        <ul id="MobileNav" className="mobile-nav">
          {user.email ? (
            <li>
              <NavLink to="/myLibrary">My Library</NavLink>
            </li>
          ) : (
            <li className="lvl1 parent megamenu" style={{ cursor: "pointer" }}>
              <NavLink
                to="#"
                onClick={() => {
                  dispatch({
                    type: "FORM_LOGIN_STATUS",
                    payload: true,
                  });
                }}
              >
                Sign In
              </NavLink>
            </li>
          )}
          {user.email ? null : (
            <li className="lvl1 parent megamenu" style={{ cursor: "pointer" }}>
              <NavLink to="#" onClick={() => setSigUpScreen(true)}>
                Sign Up
              </NavLink>
            </li>
          )}
          <li className="lvl1 parent megamenu">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="lvl1 parent megamenu">
            <NavLink to="/library">Library</NavLink>
          </li>
          <li className="lvl1 parent megamenu">
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </ul>
      </div>

      <Modal
        show={signInScreenStatus.data}
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
                setSubmitStatus(true);
                const result = await checkLogin(values);
                if (result.status === 200) {
                  localStorage.setItem("token", result.data.token);
                  localStorage.setItem("_id", result.data.user._id);
                  setSubmitStatus(false);
                  Alert.success(
                    `<div role="alert"><i class="fa fa-check-circle" aria-hidden="true"></i> Sign In Successfully </div>`,
                    {
                      html: true,
                      position: "top-right",
                      effect: "slide",
                    }
                  );
                  return (window.location.href = "/");
                }
              } catch (error) {
                return Alert.error(
                  `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i> ${error.response.data.message}</div>`,
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
                    style={{ height: 47, width: 150, borderRadius: 4 }}
                    disabled={submitStatus}
                  >
                    Sign in <i className="fa fa-sign-in" aria-hidden="true"></i>
                  </Button>
                  <GoogleLogin
                    clientId="262517224867-kufcnkfvmehbscpl4q8tgvpd9sru5hpg.apps.googleusercontent.com"
                    buttonText="SignIn With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  <FacebookLogin
                    appId="322522312399138"
                    autoLoad={false}
                    callback={responseFacebook}
                    size="small"
                    icon="fa-facebook"
                  />
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <u
            style={{
              color: "#66c2ff",
              fontStyle: "oblique",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "FORM_LOGIN_STATUS", payload: false });
              setForgotPassword(true);
            }}
          >
            Forgot Password{" "}
          </u>
        </Modal.Footer>
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
                  setSubmitStatus(true);
                  const result = await register(values);
                  if (result.status === 200) {
                    setSubmitStatus(false);
                    setSigUpScreen(false);
                    return Alert.success(
                      `<div role="alert"> <i class="fa fa-check-circle" aria-hidden="true"></i> 
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
                    `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>
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
                      disabled={submitStatus}
                      id="photoUrl"
                      name="photoUrl"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        uploadMyAvatar(e.target.files[0]);
                      }}
                    />
                    <CardGroup className="mt-3"></CardGroup>
                  </Form.Group>
                  <Modal.Footer>
                    <Button
                      type="submit"
                      variant="success"
                      disabled={submitStatus}
                    >
                      {submitStatus ? (
                        <Spinner animation="border" variant="info" />
                      ) : (
                        <i className="fa fa-user-plus" aria-hidden="true">
                          Sign Up
                        </i>
                      )}
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={formAddCoins}
        onHide={() => {
          setFormAddCoins(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add eCoins
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialMoney}
            validationSchema={validationMoneySchema}
            onSubmit={(value) => {
              setFormAddCoins(false);
              setPaymentMethod(true);
              setNumberMoney(value.money);
            }}
          >
            {(props) => (
              <Form
                onSubmit={props.handleSubmit}
                id="new-review-form"
                className="new-review-form"
              >
                <Form.Label column lg={3.5}>
                  Amount of money: Unit $(USD)
                </Form.Label>
                <Form.Control
                  lg={4}
                  type="text"
                  name="money"
                  placeholder="Enter you money"
                  style={{ width: "65%" }}
                  className="ml-3"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  isInvalid={props.touched.money && props.errors.money}
                />
                <Form.Control.Feedback type="invalid">
                  {props.touched.money && props.errors.money}
                </Form.Control.Feedback>
                <Modal.Footer>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={paymentMethod}
        onHide={() => {
          setPaymentMethod(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Method
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PayPal
            toPay={numberMoney}
            onSuccess={transactionSuccess}
            transactionError={transactionError}
            transactionCanceled={transactionCanceled}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              setPaymentMethod(false);
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={forgotPassword}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => {
          setForgotPassword(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialForgotPassword}
            onSubmit={async (value) => {
              try {
                const result = await forgotPasswordApi(value);
                setForgotPassword(false);
                return Alert.success(
                  `<div role="alert"><i class="fa fa-check-circle" aria-hidden="true"></i>  ${result.data.message} </div>`,
                  {
                    html: true,
                    position: "top-right",
                    effect: "slide",
                  }
                );
              } catch (error) {
                setForgotPassword(false);
                return Alert.error(
                  `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>${error.response.data.message} </div>`,
                  {
                    html: true,
                    position: "top-right",
                    effect: "slide",
                  }
                );
              }
            }}
            validationSchema={validationForgotPasswordSchema}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  isInvalid={props.touched.email && props.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {props.touched.email && props.errors.email}
                </Form.Control.Feedback>
                <Modal.Footer>
                  <Button type="submit" disabled={submitStatus}>
                    {submitStatus ? (
                      <Spinner animation="border" variant="info" />
                    ) : (
                      "Send"
                    )}
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};
