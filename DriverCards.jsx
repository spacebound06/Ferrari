import React from "react";
import "./DriverCards.css";

const drivers = [
  {
    name: "CHARLES LECLERC",
    img: "/charles.png",
    role: "Official Driver",
    link: "https://www.ferrari.com/en-EN/formula1/charles-leclerc",
  },
  {
    name: "LEWIS HAMILTON",
    img: "/lewis.png",
    role: "Team Principal", // middle card gets unique role
    link: "https://www.ferrari.com/en-EN/formula1/lewis-hamilton",
  },
  {
    name: "CARLOS SAINZ",
    img: "/sainz.png",
    role: "Official Driver",
    link: "#",
  },
];

export default function DriverCards() {
  return (
    <div className="driver-section">
      {drivers.map((driver, i) => (
        <div key={i} className="driver-card">
          <img src={driver.img} alt={driver.name} className="driver-img" />
          <div className="driver-overlay">
            <p className="driver-role">Official Driver</p>
            <h2 className="driver-name">{driver.name}</h2>
            <a href={driver.link} className="discover-link">
              DISCOVER MORE →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
