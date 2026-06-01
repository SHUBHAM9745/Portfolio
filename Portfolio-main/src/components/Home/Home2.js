import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming through building real-world projects — and I’d like to believe I’ve learned a thing or two along the way… 🤷‍♂️
              <br />
              <br />I am fluent in Both like
              <i>
                <b className="purple"> Full Stack & Mern Stack </b>
              </i>
              <br />
              <br />
              I’m particularly interested in building&nbsp;
              <i>
                <b className="purple">modern-day websites using full-stack technologies,</b> from e-commerce platforms to management systems.{" "}
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              <br />
              I enjoy crafting <b className="purple">responsive, efficient,</b> and
              <i>
                <b className="purple">
                  {" "}
                 user-friendly web applications that solve
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> real-world problems.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
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
                  href="https://github.com/SHUBHAM9745"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shubham-mishra-40bba4410/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
