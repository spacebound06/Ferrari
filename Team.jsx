import React from "react";
import TeamCard from "./TeamCard";
import "./Team.css";

const teamMembers = [
  {
    name: "CHARLES LECLERC",
    role: "Official Driver",
    image: "/charles.png",
    link: "https://www.ferrari.com/en-EN/formula1/charles-leclerc"
  },
  {
    name: "LEWIS HAMILTON",
    role: "Official Driver",
    image: "/lewis.png",
    link: "https://www.ferrari.com/en-EN/formula1/lewis-hamilton"
  },
  {
    name: "FRED VASSEUR",
    role: "Team Principal",
    image: "/vasseur.png",
    link: "https://www.ferrari.com/en-EN/formula1/frederic-vasseur"
  },
];

export default function Team() {
  return (
    <div className="team-page">
      {/* Removed the hero section below */}
      {/* 
      <section className="team-hero">
        <h1 className="team-heading">Our Formula 1 Team</h1>
      </section>
      */}
      
      <section className="team-grid" style={{ marginTop: "3.5rem" }}>
        {teamMembers.map((member, i) => (
          <TeamCard key={i} {...member} textAlign="center" />
        ))}
      </section>
      <div style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "1.15rem" }}>
        Visit&nbsp;
        <a
          href="https://www.ferrari.com/en-EN/formula1/team"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#ff2800", textDecoration: "underline", fontWeight: 500 }}
        >
          Ferrari
        </a>
        &nbsp;for more >>
      </div>
    </div>
  );
}
