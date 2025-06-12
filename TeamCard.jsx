import React from "react";
import "./Team.css";

export default function TeamCard({ name, role, image, link, textAlign }) {
  return (
    <a href={link} style={{ textDecoration: "none" }}>
      <div className="team-card">
        <img src={image} alt={name} className="team-img" />
        <div className="team-overlay">
          <div className="team-card-content" style={{ textAlign }}>
            <div className="team-role">{role}</div>
            <div className="team-name">{name}</div>
          </div>
        </div>
      </div>
    </a>
  );
}
