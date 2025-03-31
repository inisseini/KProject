// src/maintenance/MaintenancePage.jsx
import React from "react";
import MaintenanceImg from "./assets/images/seeyousoonstamp.png";

const MaintenancePage = () => {
  const containerStyle = {
    height: "100vh",
    backgroundColor: "#fff",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem"
  };

  const imageStyle = {
    width: "1000px",
    maxWidth: "100%"
  };

  const textStyle = {
    width: "700px",
    maxWidth: "80%",
    fontSize: "1.5rem",
    textAlign: "right",
    margin: "0 auto"
  };

  const linkStyle = {
    color: "#00d8ff",
    textDecoration: "underline"
  };

  return (
    <div style={containerStyle}>
      <img src={MaintenanceImg} alt="メンテナンス中" style={imageStyle} />
      <p style={textStyle}>
        東京都計量検定所公式WEBサイトは{" "}
        <a
          href="https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/work/work8.html"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          こちら
        </a>
      </p>
    </div>
  );
};

export default MaintenancePage;
