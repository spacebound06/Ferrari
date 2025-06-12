import React from "react";

const logos = [
  ["/hp.png"],
  ["/shell.png", "/unicredit.png", "/IBM.png", "/puma.png", "/vgw.png"],
  ["/ambipar.png", "/dxc.png", "/peroni.png", "/aws.png", "/richardmille.png", "/ceva.png", "/bitdefender.png"],
  ["/rayban.png", "/genesys.png", "/zcg.png", "/hcl.png", "/celcius.png", "/omr.png", "/chivas.jpg", "/ghmumm.png"],
  ["/philip.png", "/espacio.png", "/vantage.png", "/B&O.png", "/ecopol.png", "/mahle.png", "/skf.png", "/bell.png", "/pirelli.png", "/brembo.png"],
  ["/vistajet.png", "/manpower.png", "/armani.png", "/technogym.png", "/iveco.png", "/ngk.png", "/garrett.png", "/riedel.png", "/sabelt.png", "/ohlins.png"],
];

export default function FerrariFooter() {
  return (
    <div
      className="ferrari-footer"
      style={{
        width: "100vw",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 0 1.5rem 0",
        margin: "0 auto",
        zIndex: 10,
      }}
    >
      {/* HP logo centered without excessive top margin */}
      <div
        className="footer-row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "0.5rem",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <img
  src="/hp.png"
  alt="sponsor-hp"
  className="footer-logo"
  style={{
    height: "50px",         // ✅ slightly taller than others
    maxHeight: "64px",
    maxWidth: "200px",
    objectFit: "contain",
    filter: "brightness(1.1) contrast(1.1)",
    margin: "0 0.5rem",
  }}
/>

      </div>

      {/* Remaining logo rows */}
      {logos.slice(1).map((row, rowIndex) => (
        <div
          className="footer-row"
          key={rowIndex + 1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            margin: "0.8rem 0",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {row.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`sponsor-${index}`}
              className="footer-logo"
              style={{
                height: "36px",
                maxHeight: "42px",
                maxWidth: "120px",
                objectFit: "contain",
                filter: "brightness(1.1) contrast(1.1)",
                margin: "0 0.5rem",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
