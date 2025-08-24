import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let Me <span className='purple'>Present</span> Myself
            </h1>
            <p className="home-about-body">
              I am passionate about software development and constantly strive to enhance my expertise in creating
              impactful and efficient solutions.
              <br />
              <br />
              <b className="purple">Career Objective:</b> To secure a challenging position in a dynamic organization where I
              can contribute my skills in frontend and backend development towards organizational growth.
              <br />
              <br />
              <b className="purple">Technical Skills:</b> HTML, CSS, JavaScript, ReactJS, Express.js, MySQL.
              <br />
              <br />
              I have experience as a{" "}
              <b className="purple">ReactJS Developer at Codeworld Infotech Pvt. Ltd. (July 2023 – Oct 2024)</b>,
              where I developed web applications, integrated REST APIs, and collaborated with design teams to
              ensure seamless user experiences.
              <br />
              <br />
              <b className="purple">Key Projects:</b> ERP Software (React.js, API Integration) and Course Enrollment
              System (React.js, PHP, MySQL)
              <br />
              <br />
              I hold a{" "}
              <b className="purple">Master’s in Computer Science</b> and have been recognized with{" "}
              <b className="purple">first prize at Dexter Innofest Programming Competition</b> from Solapur University.
            </p>
          </Col>

          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/codewithsam-git"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/samarth-bhandare-5bbaba209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itz_sam_2528"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
