import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer>
      <div className="footer-left">
        <div className="left-round-button" />
      </div>
      <div className="footer-center">
        <div className="select" />
        <div className="start" />
      </div>
      <div className="touch-screen" />
      <div className="footer-right">
        <div className="cross">
          <div className="x-axis" />
          <div className="center-circle" />
          <div className="y-axis" />
        </div>
      </div>
    </footer>
  );
}
