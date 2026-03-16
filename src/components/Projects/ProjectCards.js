import React, { useState, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 18;
    const mx = ((e.clientX - rect.left) / rect.width) * 100;
    const my = ((e.clientY - rect.top) / rect.height) * 100;
    setTilt({ x, y });
    setMousePos({ x: mx, y: my });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className="pc-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered
          ? `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(-6px) scale(1.03)`
          : "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)",
        transition: hovered
          ? "transform 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <div
        className="pc-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99,102,241,0.18) 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className={`pc-border ${hovered ? "pc-border-active" : ""}`} />

      <div className="pc-img-wrap">
        <img
          src={props.imgPath}
          alt={props.title}
          className="pc-img"
          style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }}
        />
        <div className={`pc-img-overlay ${hovered ? "pc-img-overlay-active" : ""}`}>
          <span className="pc-tag">
            {props.isBlog ? "Blog" : "Project"}
          </span>
        </div>
      </div>

      <div className="pc-body">
        <h3 className="pc-title">{props.title}</h3>
        <p className="pc-desc">{props.description}</p>

        <div className="pc-links">
          {props.ghLink && (
            <a href={props.ghLink} target="_blank" rel="noreferrer" className="pc-btn pc-btn-ghost">
              <BsGithub className="pc-btn-icon" />
              <span>{props.isBlog ? "Blog" : "Code"}</span>
            </a>
          )}

          {!props.isBlog && props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noreferrer" className="pc-btn pc-btn-primary">
              <CgWebsite className="pc-btn-icon" />
              <span>Live Demo</span>
              <span className="pc-btn-arrow">↗</span>
            </a>
          )}
        </div>
      </div>

      <div className="pc-corner" />
    </div>
  );
}

export default ProjectCards;