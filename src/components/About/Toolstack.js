import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiXampp,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVisualstudiocode />
        <p style={{ fontSize: 26 }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiPostman />
        <p style={{ fontSize: 26 }}>Postman</p>
      </Col>        
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiXampp />
        <p style={{ fontSize: 26 }}>phpMyAdmin</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiVercel />
        <p style={{ fontSize: 26 }}>Vercel</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiGithub />
        <p style={{ fontSize: 26 }}>GitHub</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
