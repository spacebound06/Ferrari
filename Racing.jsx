import React, { useEffect, useState } from "react";
import MyCarousel from "./MyCarousel";

function Racing() {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const minOpacity = 0.0;
      const maxOpacity = 0.85;
      const opacity = Math.min(maxOpacity, minOpacity + (maxOpacity - minOpacity) * (scrollPercent / 100));
      setBgOpacity(opacity);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prevBg = document.body.style.background;
    document.body.style.background = "none";
    return () => {
      document.body.style.background = prevBg;
    };
  }, []);

  return (
    <div className="page-root racing-page">
      {/* Background video */}
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
        <div className="racing-overlay" style={{ background: `rgba(0,0,0,${bgOpacity})` }} />
      </div>

      {/* Logo */}
      <LogoShrinkOnScroll />

      {/* Carousel fixed over video */}
      <div className="racing-carousel-wrapper">
        <MyCarousel />
      </div>

      {/* Scrollable content */}
      <div className="racing-scroll-content">
        <section className="racing-section">
          <h2>Ferrari in 2025</h2>
          <p>Bold, fast, and fearless. Ferrari's return to dominance begins with SF-25 and a revitalized strategy.</p>
        </section>

        <section className="racing-section">
          <h2>Our Drivers</h2>
          <p>Charles Leclerc and Carlos Sainz lead the charge with precision, speed, and fierce determination.</p>
        </section>

        <section className="racing-section">
          <h2>Technology Edge</h2>
          <p>From wind tunnel simulations to the track, Ferrari's relentless pursuit of innovation continues.</p>
        </section>
      </div>
    </div>
  );
}

function LogoShrinkOnScroll() {
  const [scale, setScale] = useState(1.35);
  const [top, setTop] = useState("7.7rem");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const minScale = 0.7;
      const maxScale = 1.35;
      const minTop = 47;
      const maxTop = 111;

      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const newScale = clamp(maxScale - (scrollY / 120) * (maxScale - minScale), minScale, maxScale);
      const newTop = clamp(maxTop - (scrollY / 120) * (maxTop - minTop), minTop, maxTop);

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
        top: top,
        left: "50%",
        transform: `translateX(-50%) scale(${scale})`,
        zIndex: 20,
        transition: "top 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)",
        display: "block",
        width: "120px",
        height: "120px",
        pointerEvents: "auto"
      }}
    >
      <img
        src="https://cdn.ferrari.com/cms/network/media/img/resize/678a438d6743270010529276-scudetto-con-hp-2025?"
        alt="Ferrari Logo"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          background: "transparent"
        }}
      />
    </a>
  );
}

export default Racing;
