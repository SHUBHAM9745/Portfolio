import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Annasetu from "../../Assets/Projects/leaf.png";
import WalletTracker from "../../Assets/Projects/Wallet.png";
import SchoolMonitor from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SchoolMonitor}
              isBlog={false}
              title="SchoolMonitor"
              description="Developed SchoolMonitor, a full-stack school management system to streamline attendance, grading, and communication.
Led the frontend using React.js, Redux, and Material UI, and built secure APIs with Node.js, Express, and MongoDB.
Overcame complex user role challenges and delivered a responsive, role-based platform that improved school operations.

"
              ghLink="https://github.com/SHUBHAM9745"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WalletTracker}
              isBlog={false}
              title="WalletTracker"
              description="Built WalletTracker, a personal finance management tool to track income and expenses with real-time data visualization.
Designed an intuitive UI with React and Chart.js, and developed RESTful APIs using Node.js, Express, and MongoDB.
Enabled users to manage their cash flow efficiently, overcoming challenges in date filtering and dynamic chart rendering."
              ghLink="https://github.com/SHUBHAM9745"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Annasetu}
              isBlog={false}
              title="ANNASETU"
              description="ANNASETU is a Food Donation Management System designed to facilitate the collection and distribution of surplus food to those in need. Our goal is to minimize food waste and help feed the hungry by connecting donors with food banks and shelters."
              ghLink="https://github.com/SHUBHAM9745"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
