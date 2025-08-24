import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png"
import codeworld from "../../Assets/Projects/codeworld.png"
import backend1 from "../../Assets/Projects/backend1.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce Clone"
              description="This is a simple E-commerce web application built with React that allows users to browse products, add them to the cart (only if logged in), and write product reviews. The app uses Firebase Authentication for login/registration and LocalStorage to persist cart and reviews."
              ghLink="https://github.com/codewithsam-git/ecommerce-clone"
              demoLink="https://ecommerce-clone-three-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeworld}
              isBlog={false}
              title="Course Enrollment System"
              description="This project improves teaching development courses by enabling both online and offline participation, simplifying registration, and providing resources like lecture recordings, materials, and discussion forums for enhanced learning."
              // ghLink="https://github.com/codewithsam-git/codeworld_by_cws_react"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backend1}
              isBlog={false}
              title="Shopping Management API"
              description="A robust backend API built with Node.js, Express, and MySQL to handle shopping operations such as user authentication, product and category management, inventory tracking, and order processing. It ensures secure transactions and provides a scalable foundation for e-commerce platforms."
              // ghLink="https://github.com/yourusername/shopping-management-api"
            // demoLink="https://shoppingapi.yourdomain.com"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            /> 
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
