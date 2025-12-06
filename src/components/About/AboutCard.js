import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Lejel Matienzo</span>{" "}
            from <span className="purple">Laguna, Philippines</span>.
            <br />
            I’m currently do projects as a{" "}
            <span className="purple">Programmer</span> at{" "}
            <span className="purple">Electronics Enthusiast</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Studying ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(101 127 163)" }}>
            "Keep going. Small steps still move you forward!"{" "}
          </p>
          <footer className="blockquote-footer">Lejel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
