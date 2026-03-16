import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ctb from "../../Assets/Projects/ctb.svg";
import expenseTracker from "../../Assets/Projects/expensetracker.svg";
import rfid from "../../Assets/Projects/rfid.svg";

function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      imgPath: ctb,
      isBlog: false,
      title: "Catch The Ball",
      description:
        "A fast-paced browser cursor game where you chase and catch a bouncing ball. Built for fun and reflexes — how long can you keep up?",
      ghLink: "https://github.com/OnlyLej/CatchTheBall",
      demoLink: "https://ctbgame.netlify.app/",
    },
    {
      imgPath: expenseTracker,
      isBlog: false,
      title: "Expense Tracker",
      description:
        "A full-featured personal finance app built with React Native & Expo. Track daily spending, set budgets per category, visualize trends with charts, and back up your data — all stored locally on-device.",
      ghLink: "https://github.com/OnlyLej/Expenses-Tracker",
      demoLink: null,
    },
    {
      imgPath: rfid,
      isBlog: false,
      title: "RFID Attendance Portal",
      description:
        "A research-backed web portal for a hardware RFID attendance system. Tracks student attendance in real time, logs scan history, and displays present, late, and absent records per session.",
      ghLink: null,
      demoLink: "https://ridap.vercel.app/",
    },
  ];

  return (
    <Container fluid className="project-section" ref={sectionRef}>
      <Particle />
      <Container>
        <div className={`projects-header ${visible ? "projects-header-visible" : ""}`}>
          <span className="projects-eyebrow">Portfolio</span>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p className="projects-subtext">
            Here are a few projects I've worked on recently.
          </p>
          <div className="projects-divider" />
        </div>

        <Row className="justify-content-center projects-grid" style={{ paddingBottom: "40px" }}>
          {projects.map((proj, i) => (
            <Col
              key={i}
              md={5}
              className="project-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${0.15 + i * 0.18}s, transform 0.6s cubic-bezier(0.23,1,0.32,1) ${0.15 + i * 0.18}s`,
              }}
            >
              <ProjectCard {...proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
