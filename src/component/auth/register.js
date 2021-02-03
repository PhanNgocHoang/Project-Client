import React from "react";
import { Form, Button } from "react-bootstrap";
export const RegisterComponent = () => {
  return (
    <div>
      <section className="static about-sec">
        <h1>My Account / Register</h1>
        <div className="form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="lg"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                size="lg"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                size="lg"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="lg"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="lg"
                style={{ width: "60%" }}
              />
            </Form.Group>
            <Button variant="info" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};
