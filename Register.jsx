import React, { useEffect, useState } from "react";
import "./index.css";

export default function Register({ onRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // Dynamic background opacity
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      const minOpacity = 0.0;
      const maxOpacity = 0.7;
      const opacity = Math.min(
        maxOpacity,
        minOpacity + (maxOpacity - minOpacity) * (scrollPercent / 100)
      );
      setBgOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Remove SF25.jpg background only for Register page
    const prevBg = document.body.style.background;
    document.body.style.background = "none";
    return () => {
      document.body.style.background = prevBg;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username, password, email });
  };

  return (
    <div
      className="page-root"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background video for Register */}
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
          background: `rgba(0,0,0,${bgOpacity})`,
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
      <div className="auth-page" style={{ /* ...existing styles... */ }}>
        <form
          className="auth-form"
          onSubmit={handleSubmit}
          style={{ paddingTop: "1em", paddingBottom: "1em" }} // reduce height more
        >
          <h2>Register</h2>
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
