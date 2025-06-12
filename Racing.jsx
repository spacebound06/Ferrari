import React, { useEffect, useState } from "react";
import MyCarousel from "./MyCarousel";
import FerrariFooter from "./FerrariFooter"; // ✅ Import Footer Component

function Racing() {
  const [bgOpacity, setBgOpacity] = useState(0);

  // Darken the background video as you scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent =
        scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const opacity = Math.min(0.85, scrollPercent * 0.85);
      setBgOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Remove default body background
  useEffect(() => {
    const prev = document.body.style.background;
    document.body.style.background = "none";
    return () => (document.body.style.background = prev);
  }, []);

  return (
    <div
      className="page-root racing-page"
      style={{ margin: 0, padding: 0, width: "100vw", overflowX: "hidden" }}
    >
      {/* Fixed background video */}
      <div className="racing-video-wrapper">
        <video
          src="/LH%20first%20lap.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="racing-video"
          style={{ opacity: 0.45 }}
        />
        <div
          className="racing-overlay"
          style={{ background: `rgba(0,0,0,${bgOpacity})` }}
        />
      </div>

      {/* Shrinking Ferrari logo */}
      <LogoShrinkOnScroll />

      {/* Sticky full-screen carousel */}
      <div
        className="racing-carousel-wrapper"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          width: "100vw",
          height: "100vh",
          background: "#000",
          overflow: "hidden",
        }}
      >
        <MyCarousel />
      </div>

      {/* SF25 video section below carousel */}
      <div className="racing-scroll-content" style={{ paddingBottom: 0, marginBottom: 0 }}>
        <section className="racing-video-scroll-section">
          <video
            src="sf25video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="racing-scroll-video"
          />
          <div className="video-overlay-text">
            <h2>FERRARI SF-25</h2>
          </div>
        </section>
        {/* FerrariFooter placed directly below the SF25 video */}
        <div
          style={{
            width: "100vw",
            background: "#000",
            padding: "0.2rem 0 0.2rem 0", // almost no gap above/below
            display: "flex",
            justifyContent: "center",
            margin: 0,
          }}
        >
          <FerrariFooter />
        </div>
      </div>
    </div>
  );
}

function LogoShrinkOnScroll() {
  const [scale, setScale] = useState(1.08);
  const [top, setTop] = useState("7.7rem");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const newScale = clamp(
        1.08 - (scrollY / 120) * (1.08 - 0.7),
        0.7,
        1.08
      );
      const newTop = clamp(111 - (scrollY / 120) * (111 - 47), 47, 111);
      setScale(newScale);
      setTop(`${newTop}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://www.ferrari.com/en-EN/formula1"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        top,
        left: "50.5%", // move logo 0.5% to the right from center
        transform: `translateX(-50%) scale(${scale})`,
        zIndex: 20,
        transition:
          "top 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)",
        width: "120px",
        height: "120px",
        pointerEvents: "auto",
      }}
    >
      <img
        src="https://cdn.ferrari.com/cms/network/media/img/resize/678a438d6743270010529276-scudetto-con-hp-2025?"
        alt="Ferrari Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          background: "transparent",
        }}
      />
    </a>
  );
}

export default Racing;
