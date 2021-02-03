import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import { checkLogin } from "../../api/index";
import Alert from "react-s-alert";
import { useDispatch, useSelector } from "react-redux";
const validationSchema = yup.object().shape({
  email: yup.string().email("Email invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password is less than 6 characters")
    .required("Password is required"),
});
export const LoginComponent = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (value) => {
      try {
        const result = await checkLogin(value);
        dispatch({ type: "DATA_LOGIN", payload: result.data });
        localStorage.setItem("token", result.data.token);
        return Alert.success(
          `<div role="alert">
                  Sign In Successfully
                  </div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      } catch (error) {
        return Alert.success(
          `<div role="alert">
                 Wrong Email or Password
                  </div>`,
          {
            html: true,
            position: "top-right",
            effect: "slide",
          }
        );
      }
    },
    validationSchema: validationSchema,
  });
  const { handleSubmit, handleChange, handleBlur, touched, errors } = formik;
  return (
    <div>
      <h1>My Account / Sign Up</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            size="lg"
            style={{ width: "60%" }}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.email && errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            size="lg"
            style={{ width: "60%" }}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={touched.password && errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="info" type="submit">
          Login
        </Button>
      </Form>
      <button className="google btn">
        <i className="fa fa-google fa-fw"></i> Login with Google+
      </button>
      <button className="fb btn">
        <i className="fa fa-facebook fa-fw"></i> Login with Facebook
      </button>
    </div>
  );
};
