import React, { useEffect, useState } from "react";

function News() {
  const [bgOpacity, setBgOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const minOpacity = 0.0;
      const maxOpacity = 0.7;
      const opacity = Math.min(maxOpacity, minOpacity + (maxOpacity - minOpacity) * (scrollPercent / 100));
      setBgOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page-root">
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
          zIndex: 0
        }}
      />
      <div
        style={{
          textAlign: 'center',
          margin: '4rem auto',
          position: 'relative',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: '"Gothic A1", "Gothic Sans", Arial, sans-serif',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: 'white',
            fontSize: '1.7em',
            zIndex: 1,
            position: 'relative'
          }}
        >
          Latest News
        </span>
      </div>
      <div style={{ color: "#fff", padding: "2rem" }}>News page coming soon.</div>
    </div>
  )
}
export default News
