import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./SectionBlurb.scss";
import StyleContext from "../../contexts/StyleContext";

/* A short intro line plus optional headline figures, revealed on scroll.
   Renders nothing at all when its config entry is empty, so an unfilled
   section stays invisible instead of shipping a blank block. */
export default function SectionBlurb({blurb}) {
  const {isDark} = useContext(StyleContext);
  const text = blurb && blurb.text;
  const stats = (blurb && blurb.stats) || [];

  if (!text && stats.length === 0) {
    return null;
  }

  return (
    <Fade bottom duration={900} distance="24px">
      <div className={isDark ? "dark-mode section-blurb" : "section-blurb"}>
        {text && <p className="section-blurb-text">{text}</p>}
        {stats.length > 0 && (
          <div className="section-blurb-stats">
            {stats.map((stat, i) => (
              <div className="section-blurb-stat" key={i}>
                <span className="section-blurb-value">{stat.value}</span>
                <span className="section-blurb-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fade>
  );
}
