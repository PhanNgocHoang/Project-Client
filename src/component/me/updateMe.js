import React, { useState } from "react";
import { Card, Container, Form, Button, Image, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { uploadAvatar, updateMe, changePassword } from "../../api/index";
import moment from "moment";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
const validationSchema = yup.object().shape({
  displayName: yup.string().required("Please enter your name"),
  email: yup.string().required("Please enter your email"),
  dob: yup
    .date("Day of birth is not valid")
    .required("Please enter your day of birth"),
});
const validationSchemaChangePass = yup.object().shape({
  cr_password: yup.string().required("Please enter your current password"),
  n_password: yup.string().required("Please enter your new password"),
  c_password: yup
    .string()
    .required("Please enter your confirm password")
    .oneOf(
      [yup.ref("n_password")],
      "Confirm password not match with new password"
    ),
});
export const Me = () => {
  useAuth();
  const dispatch = useDispatch();
  const [update, setUpdates] = useState(false);
  const [changePhotoUrlStatus, setChangePhotoUrl] = useState(false);
  const user = useSelector((state) => {
    return state.login.data;
  });
  const initialValues = {
    displayName: user.displayName,
    email: user.email,
    dob: user.dob ? moment(user.dob).format("YYYY-MM-DD") : "",
  };
  const changePasswordInitialValues = {
    cr_password: "",
    n_password: "",
  };
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "all",
    shouldFocusError: true,
  });
  const submitUpdate = async (data) => {
    try {
      setUpdates(true);
      data.dob = moment(data.dob).format("YYYY-MM-DD");
      const update = await updateMe(data);
      dispatch({ type: "DATA_LOGIN", payload: update.data });
      setUpdates(false);
    } catch (error) {
      return Alert.error(
        `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>
         ${error.response.data.message}</div>`,
        {
          html: true,
          position: "top-right",
          effect: "slide",
        }
      );
    }
  };
  const changePhotoUrl = async (file) => {
    try {
      setChangePhotoUrl(true);
      const formData = new FormData();
      formData.append("image", file);
      const result = await uploadAvatar(formData);
      const response = await updateMe({ photoUrl: result.data.url });
      dispatch({ type: "DATA_LOGIN", payload: response.data });
      setChangePhotoUrl(false);
    } catch (error) {
      return Alert.error(
        `<div role="alert"><i class="fa fa-times-circle" aria-hidden="true"></i>
         ${error.response.data.message}</div>`,
        {
          html: true,
          position: "top-right",
          effect: "slide",
        }
      );
    }
  };
  if (!user._id) {
    return <Redirect to="/" />;
  }
  return (
    <Container className="mt-5">
      <Alert stack={{ limit: 3 }} />
      <Tabs>
        <TabList>
          <Tab>Update Information</Tab>
          {user.googleId === null || user.fbId === null ? (
            <Tab>Change Password</Tab>
          ) : null}
        </TabList>
        <TabPanel>
          <Card border="info">
            <Card.Header>Update Profile: </Card.Header>
            <div className="d-flex align-items-center my-3 flex-column">
              {changePhotoUrlStatus ? (
                <Spinner animation="border" variant="info" />
              ) : user.photoUrl ? (
                <Image
                  className="border rounded-circle"
                  src={user.photoUrl}
                  alt="avatar"
                  style={{ width: 150, height: 150 }}
                />
              ) : (
                <Spinner animation="border" variant="info" />
              )}
              <Form>
                <Form.File
                  custom
                  label="Select....."
                  style={{ maxWidth: 350 }}
                  className="mt-2"
                  onChange={(event) => {
                    changePhotoUrl(event.target.files[0]);
                  }}
                  disabled={changePhotoUrlStatus}
                />
              </Form>
            </div>
            <Card.Body>
              <Form onSubmit={handleSubmit(submitUpdate)}>
                <Form.Group>
                  <Form.Label>Display Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your display name"
                    name="displayName"
                    defaultValue={initialValues.displayName}
                    ref={register}
                  />

                  <span style={{ color: "#ff4d4d" }}>
                    {errors.displayName?.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    defaultValue={initialValues.email}
                    ref={register}
                  />
                  <span style={{ color: "#ff4d4d" }}>
                    {errors.email?.message}
                  </span>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Day of birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    defaultValue={initialValues.dob}
                    ref={register}
                  />
                  <span style={{ color: "#ff4d4d" }}>
                    {errors.dob?.message}
                  </span>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={update}>
                  {update ? (
                    <Spinner animation="border" variant="info" />
                  ) : (
                    "Save"
                  )}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </TabPanel>
        {user.googleId === null || user.fbId === null ? (
          <TabPanel>
            <Card border="info">
              <Card.Header>Update Profile: </Card.Header>
              <Card.Body>
                <Formik
                  initialValues={changePasswordInitialValues}
                  onSubmit={async (value, action) => {
                    try {
                      const response = await changePassword(value);
                      Alert.success(
                        `<div role="alert"> <i class="fa fa-check-circle" aria-hidden="true"></i>
         ${response.data.message}</div>`,
                        {
                          html: true,
                          position: "top-right",
                          effect: "slide",
                        }
                      );
                      return (window.location.href = "/me");
                    } catch (error) {
                      return Alert.error(
                        `<div role="alert"> <i class="fa fa-times-circle" aria-hidden="true"></i>
         ${error.response.data.message}</div>`,
                        {
                          html: true,
                          position: "top-right",
                          effect: "slide",
                        }
                      );
                    }
                  }}
                  validationSchema={validationSchemaChangePass}
                >
                  {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                      <Form.Group>
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your current password"
                          name="cr_password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={
                            props.touched.cr_password &&
                            props.errors.cr_password
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.cr_password &&
                            props.errors.cr_password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter your new password"
                          name="n_password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={
                            props.touched.n_password && props.errors.n_password
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.n_password && props.errors.n_password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="c_password"
                          placeholder="Enter your confirm password"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          isInvalid={
                            props.touched.c_password && props.errors.c_password
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {props.touched.c_password && props.errors.c_password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Save
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </TabPanel>
        ) : null}
      </Tabs>
    </Container>
  );
};
