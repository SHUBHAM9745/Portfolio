import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Mishra | Full Stack Developer 🛠️</span>
            from <span className="purple"> Mumbai, Maharashtra</span>
            <br />
            Currently diving deep into MERN Stack — MongoDB, Express, React & Node..MERN Stack Learner 🌱
            <br />
            I have completed Bsc In Information Technology· Turning chai ☕ into code.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Love to travell
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with impact !"{" "}
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
