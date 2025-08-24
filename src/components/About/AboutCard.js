import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Samarth Bhandare </span>
            from <span className="purple"> Solapur, Maharashtra, India.</span>
            <br />
            I am currently working as a Software Developer at Cronico Digital Pvt. Ltd.
            <br />
            I have completed my M.Sc. in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="about-activity">
            - Travelling
          </div>
          <div className="about-activity">
            - Playing Games
          </div>
          <div className="about-activity">
            - Learning New Things
          </div>

          <p style={{ color: "rgb(155 126 172)", textAlign: "right" }}>
            "Turning ideas into impactful solutions!"{" "}
          </p>
          <footer className="blockquote-footer" style={{ textAlign: "right" }}>CodeWithSam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
