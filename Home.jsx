import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import enzoImg from './enzo.jpg';


// Reusable fade-on-scroll component
function FadeOnScroll({ children, threshold = 100, style = {}, ...props }) {
  const [opacity, setOpacity] = useState(1);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScroll.current ? "down" : "up";
      lastScroll.current = scrollY;

      // Fade out when scrolling down, fade in when scrolling up
      if (direction === "down") {
        // Fade out as we scroll past threshold
        setOpacity(scrollY < threshold ? 1 - scrollY / threshold : 0);
      } else {
        // Fade in as we scroll up
        setOpacity(scrollY < threshold ? 1 - scrollY / threshold : 0);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <div
      style={{
        ...style,
        opacity,
        transition: "opacity 0.5s cubic-bezier(.4,0,.2,1)",
        willChange: "opacity",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// IntersectionObserver-based ScrollFadeImage for Enzo
const ScrollFadeImage = ({ style = {}, ...props }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // Adjust this for when the fade should start
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <motion.img
      ref={imgRef}
      src={enzoImg}
      alt="Enzo Ferrari"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      style={{
        height: "291px",
        width: "auto",
        display: "block",
        margin: "0 auto",
        borderRadius: "12px",
        objectFit: "cover",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        position: "relative",
        zIndex: 1,
        ...style,
      }}
      {...props}
    />
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.6,
  ease: 'easeInOut',
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showEnzo, setShowEnzo] = useState(false);
  const enzoRef = useRef(null);
  const footerRef = useRef(null);
  const [enzoVisible, setEnzoVisible] = useState(true);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowEnzo(window.scrollY > 80);
      // Show footer only at bottom
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setFooterVisible(atBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (!enzoRef.current || !footerRef.current) return;
      const enzoRect = enzoRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();
      // If footer is visible in viewport, hide Enzo
      if (footerRect.top < window.innerHeight && footerRect.bottom > 0) {
        setEnzoVisible(false);
      } else {
        setEnzoVisible(true);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="page-root"
    >
      <div className={`home-bg-overlay${scrolled ? " home-bg-dark" : ""}`}></div>
      <div className="home-content">
        <h1 className={`home-title${scrolled ? " scrolled" : ""}`}>
          Scuderia Ferrari. The Pinnacle of Racing.
        </h1>
        <div
          className={`home-paragraph${scrolled ? " visible" : ""}`}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <div style={{ flex: 1, minWidth: 0, maxWidth: "850px" }}>
            <div className="home-about-title">About us.</div>
            <p>
              Since 1929, Scuderia Ferrari has embodied the relentless pursuit of speed, innovation, and glory. Born from the vision of Enzo Ferrari, our legacy is built on passion, precision, and the unwavering spirit of competition. From the roaring circuits of the early Grand Prix to the cutting-edge arenas of modern Formula 1, the Prancing Horse has become a global symbol of excellence. With every turn of the wheel and every red blur on the track, we carry the dreams of generations and the pride of Italy. This is more than a team — it is history in motion, where engineering meets emotion, and victory is written in red.
            </p>
          </div>
          <div
            ref={enzoRef}
            style={{
              position: "fixed",
              top: "10rem",
              right: "4rem",
              marginLeft: "0",
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
              pointerEvents: "none",
              zIndex: 9999,
              height: "291px",
              minWidth: "200px",
              maxWidth: "340px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <ScrollFadeImage />
          </div>
        </div>
      </div>
      {/* Social media logos section */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2.5rem",
          margin: "2.2rem 0 4.5rem 0",
          position: "relative",
          left: "1.5rem", // move all logos a little to the right
        }}
      >
        <a href="https://www.facebook.com/Ferrari" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Facebook_white_icon_svg.svg/640px-Facebook_white_icon_svg.svg.png"
            alt="Facebook"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
        <a href="https://www.instagram.com/ferrari  " target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Instagram_white.svg/640px-Instagram_white.svg.png"
            alt="Instagram"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
        <a href="https://www.linkedin.com/company/ferrari" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZy25qVnXim0IHxSZ9q0eQiW3E-NHXxDjuQ&s"
            alt="LinkedIn"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
        <a href="https://www.youtube.com/@Ferrari" target="_blank" rel="noopener noreferrer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRvIBdzu1cyHxqfDziI_huZnCr9V3gvrIwA&s"
            alt="YouTube"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiZgIHegeSNAxWrV2wGHWaYBvQQ6F56BAgSEAE&url=https%3A%2F%2Fx.com%2FFerrari%3Fref_src%3Dtwsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor&usg=AOvVaw3q3pWBJaGS2VG63aOrKaKB&opi=89978449" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/X_logo_2023_%28white%29.svg/640px-X_logo_2023_%28white%29.svg.png"
            alt="X"
            style={{ width: 32, height: 32, objectFit: "contain" }}
          />
        </a>
      </div>
      <footer
        style={{
          width: "100%",
          background: "#000",
          color: "#fff",
          padding: "1.5rem 0",
          borderTop: "2px solid #222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: "normal",
          fontSize: "0.85em",
          letterSpacing: "0.04em",
          position: "fixed",
          bottom: "-1.2rem",
          left: 0,
          zIndex: 100,
          opacity: footerVisible ? 1 : 0,
          pointerEvents: footerVisible ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(.4,0,.2,1)"
        }}
      >
        <div style={{ marginLeft: "1.7rem" }}>
          &copy; {new Date().getFullYear()} Scuderia Ferrari &nbsp;|&nbsp; All Rights Reserved
        </div>
      </footer>
    </motion.div>
  );
}
