import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiMysql,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiHtml5 />
        <p style={{ fontSize: 26 }}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiCss3 />
        <p style={{ fontSize: 26 }}>CSS</p>
      </Col>
      <Col md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiJavascript1 />
        <p style={{ fontSize: 26 }}>JavaScript</p>
      </Col>
      <Col md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiReact />
        <p style={{ fontSize: 26 }}>React</p>
      </Col>
      <Col md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiNodejs />
        <p style={{ fontSize: 26 }}>Node.js</p>
      </Col>
      <Col md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <SiExpress />
        <p style={{ fontSize: 26 }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiMysql />
        <p style={{ fontSize: 26 }}>MySQL</p>
      </Col>
      <Col md={2} className="tech-icons" style={{ textAlign: "center" }}>
        <DiMongodb />
        <p style={{ fontSize: 26 }}>MongoDB</p>
      </Col>
    </Row>
  );
}

export default Techstack;
