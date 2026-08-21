import React from "react";
import "./ScrollArrow.scss";

/* Bouncing "keep scrolling" cue for the bottom of the hero.
   `to` is the id of the section it jumps to. */
export default function ScrollArrow({to = "skills"}) {
  const handleClick = e => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({behavior: reduced ? "auto" : "smooth", block: "start"});
  };

  return (
    <a
      href={`#${to}`}
      className="scroll-arrow"
      onClick={handleClick}
      aria-label="Scroll to next section"
    >
      <svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
        <polyline
          points="5,9 12,16 19,9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
