import React, { useEffect, useState } from "react";

function Racing() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [titleTop, setTitleTop] = useState(56); // px, initial top offset

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Clamp the top position between 56px and 200px as you scroll
      const minTop = 56;
      const maxTop = 200;
      const newTop = Math.min(maxTop, minTop + scrollY);
      setTitleTop(newTop);

      // Make background darker as we scroll down
      const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const minOpacity = 0.0;
      const maxOpacity = 0.85; // increased max opacity for darker background
      const opacity = Math.min(maxOpacity, minOpacity + (maxOpacity - minOpacity) * (scrollPercent / 100));
      setBgOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Remove SF25.jpg background only for Racing page
    const prevBg = document.body.style.background;
    document.body.style.background = "none";
    return () => {
      document.body.style.background = prevBg;
    };
  }, []);

  return (
    <div className="page-root" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background video */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
        <video
          src="/LH%20first%20lap.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            opacity: 0.45,
            pointerEvents: "none",
            transition: "opacity 0.4s cubic-bezier(.4,0,.2,1)",
          }}
        />
        {/* Overlay to darken video as we scroll */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: `rgba(0,0,0,${bgOpacity})`,
            pointerEvents: "none",
            zIndex: 1,
            transition: "background 0.4s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>
      <div
        style={{
          textAlign: 'left',
          margin: '4rem auto',
          position: 'absolute',
          top: `${Math.max(10, titleTop - 46)}px`, // move the text even higher
          left: '3vw',
          width: '100vw',
          minHeight: 'unset',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'left',
          zIndex: 10
        }}
      >
        <span
          style={{
            fontFamily: '"Gothic A1", "Gothic Sans", Arial, sans-serif',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: 'white',
            fontSize: '1.9em',
            zIndex: 1,
            position: 'relative'
          }}
        >
          OUR TEAM
        </span>
      </div>
    </div>
  )
}
export default Racing