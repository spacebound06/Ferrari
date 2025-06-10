import React, { useEffect, useState } from "react";
import CircularText from "./CircularText";
import ChromaGrid from "./ChromaGrid";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function Merch() {
  const [bgOpacity, setBgOpacity] = useState(0);
  const [showStoreLink, setShowStoreLink] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const minOpacity = 0.0;
      const maxOpacity = 0.7;
      const opacity = Math.min(maxOpacity, minOpacity + (maxOpacity - minOpacity) * (scrollPercent / 100));
      setBgOpacity(opacity);

      // Show the store link after scrolling 80px
      setShowStoreLink(window.scrollY > 80);
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
          width: '100%',
          margin: '7rem 0 0 0',
          position: 'relative',
          minHeight: '40vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          background: "none",
        }}
      >
        <div style={{ marginLeft: '4vw', marginTop: '6rem' /* move circular text lower */ }}>
          <CircularText
            text="COLLECTIONS*COLLECTIONS*"
            onHover="slowDown"
            spinDuration={20}
            className="custom-class"
            style={{ width: 260, height: 260, fontSize: 32 }}
          />
        </div>
        <div style={{
          marginLeft: '4vw', // move cards a little more to the left
          display: 'flex',
          alignItems: 'flex-start',
          background: "none",
          marginTop: '-2.5rem',
        }}>
          <ChromaGrid
            items={[
              {
                image: "https://store.ferrari.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-48/default/dwea7bcfd8/images/zoom/LA041f_09_1.jpg?sw=720&sh=990",
                title: (
                  <>
                    Scuderia Ferrari HP 2025 T7<br />drivers jacket
                  </>
                ),
                subtitle: "$155",
                borderColor: "#3B82F6",
                gradient: "linear-gradient(145deg, #DC0000, #DC0000)",
                url: "https://store.ferrari.com/en-in/replica/replica-scuderia-ferrari-2/puma-for-scuderia-ferrari-hp-2025-t7-drivers-jacket-LA041f09.html"
              },
              {
                image: "https://store.ferrari.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-48/default/dwabe16ccd/images/zoom/LA021f_163_1.jpg?sw=720&sh=990",
                title: "Scuderia Ferrari HP 2025 Team Pro polo shirt",
                subtitle: "$145",
                borderColor: "#10B981",
                gradient: "linear-gradient(180deg, #DC0000, #DC0000)",
                url: "https://store.ferrari.com/en-in/replica/replica-scuderia-ferrari-2/puma-for-scuderia-ferrari-hp-2025-t7-drivers-jacket-LA041f09.html"
              },
              {
                image: "https://store.ferrari.com/dw/image/v2/BGDG_PRD/on/demandware.static/-/Sites-48/default/dw603d4d49/images/zoom/LA048f_13_1.jpg?sw=720&sh=990",
                title: (
                  <>
                    Scuderia Ferrari HP Miami<br />Edition Leclerc baseball cap
                  </>
                ),
                subtitle: "$60",
                borderColor: "#F59E0B",
                gradient: "linear-gradient(180deg, #DC0000, #DC0000)",
                url: "https://store.ferrari.com/en-in/replica/replica-scuderia-ferrari/caps/puma-for-scuderia-ferrari-hp-miami-special-edition-leclerc-baseball-cap-LA048f13.html"
              }
            ]}
            columns={3}
            className="custom-chroma-grid"
            style={{ gap: "0.6rem" }} // further reduced gap between cards
          />
        </div>
      </div>
      {showStoreLink && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "2.5rem",
            minHeight: "2.5em",
          }}
        >
          <span
            style={{
              display: "inline-block",
              // Reserve space for the scaled link to prevent layout shift
              height: "2.2em",
              minWidth: "230px", // adjust as needed for your text
              textAlign: "center",
            }}
          >
            <a
              href="https://store.ferrari.com/en-in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontStyle: "italic",
                fontSize: "1.1rem",
                color: "#fff",
                background: "rgba(0,0,0,0.60)",
                padding: "0.35em 1.1em",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                transition: "background 0.2s, color 0.2s, transform 0.18s",
                zIndex: 10,
                fontFamily: '"Futura", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: 500,
                display: "inline-block",
                transform: "scale(1)",
                willChange: "transform",
                verticalAlign: "middle",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
            >
              Visit store for more &gt;&gt;
            </a>
        </span>
      </div>
    )}
  </div>
  )
}
export default Merch
