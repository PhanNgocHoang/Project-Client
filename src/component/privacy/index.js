import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Privacy = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <Container>
        <Row style={{ marginBottom: 10 }}>
          <Col style={{ fontWeight: "bold", fontSize: 30 }}>Legal</Col>
        </Row>
        <Row>
          <Col style={{ fontSize: 20, marginLeft: 50 }}>
            <ul style={{ listStyle: "none" }}>
              <li>All user information is protected.</li>
              <li>
                Ensure service delivery is suitable for all ages of users.
              </li>
              <li>Respect copyright.</li>
            </ul>
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col style={{ fontWeight: "bold", fontSize: 30 }}>Social</Col>
        </Row>
        <Row>
          <Col style={{ fontSize: 20, marginLeft: 50 }}>
            <ul style={{ listStyle: "none" }}>
              <li>Protect personal information, the privacy of each user.</li>
              <li>
                Ensuring that all users can use all services of E-Library.
              </li>
              <li>
                Make sure any content the user borrows is appropriate for the
                age of the user.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col style={{ fontWeight: "bold", fontSize: 30 }}>Ethical</Col>
        </Row>
        <Row>
          <Col style={{ fontSize: 20, marginLeft: 50 }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                Make sure that all users need to pay fees when borrowing from
                E-Library books.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
