import React, { useState } from "react";
import "./index.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Login successful!");
        setUsername("");
        setPassword("");
        if (onLogin) onLogin({ username });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div
      className="page-root"
      style={{
        position: "fixed",
        top: "8rem", // move the login page even lower
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 100,
      }}
    >
      {/* Background video for Login */}
      <video
        src="/SF25%20video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100vw",
          minHeight: "100vh",
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />
      <div
        className="page-bg-overlay"
        style={{
          background: `rgba(0,0,0,0.7)`,
          transition: "background 0.4s cubic-bezier(.4,0,.2,1)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="auth-page" style={{ marginTop: "-3.5rem" }}>
        <form
          className="auth-form"
          onSubmit={handleSubmit}
          style={{ paddingTop: "1.5em", paddingBottom: "1.5em" }} // reduce height
        >
          <h2>Login</h2>
          <input
            className="auth-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
