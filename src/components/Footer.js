import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="social-icons">
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <ul className="links">
            <li>
              <a
                class="fa fa-facebook fa-3x"
                href="https://www.facebook.com/takara.truong.58/"
              > </a>
            </li>
            <li>
              <a
                class="fa fa-github fa-3x"
                href="https://github.com/truont2"
              > </a>
            </li>
            <li>
              <a
                class="fa fa-linkedin fa-3x"
                href="https://www.linkedin.com/in/takaratruong/"
              > </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
