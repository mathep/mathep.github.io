import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const year = new Date().getFullYear();
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Mathep {year}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Created with HTML, CSS, JS, React, and ♥️")}
        </p>
        {/* Template credit - developerFolio is GPL-3.0, keep this. */}
        <p
          className={
            isDark ? "dark-mode footer-text footer-credit" : "footer-text footer-credit"
          }
        >
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
