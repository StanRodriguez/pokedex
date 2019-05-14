import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <footer>
      <div className="footer-left">
        <div className="left-rounded-button" />
      </div>
      <div className="footer-center">
        <div className="center-buttons">
          <div className="center-button select" />
          <div className="center-button start" />
        </div>
        <div className="touch-screen" />
      </div>

      <div className="footer-right">
        <a className="top-anchor" href="#top" title="Go to the top">
          <div className="cross">
            <div className="axis x-axis" />
            <div className="axis y-axis">
              <div className="up">
                <span role="img" aria-label="Arrow to the top">
                  🔺
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </footer>
  );
}
