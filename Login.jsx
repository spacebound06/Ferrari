import React, { useEffect, useState } from "react";
import "./index.css";

export default function Login({ onLogin }) {
  const [scrolled, setScrolled] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    // Remove SF25.jpg background only for Login page
    const prevBg = document.body.style.background;
    const prevOverflow = document.body.style.overflow;
    document.body.style.background = "none";
    document.body.style.overflow = "hidden"; // Prevent scrolling
    return () => {
      document.body.style.background = prevBg;
      document.body.style.overflow = prevOverflow; // Restore scrolling
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
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
