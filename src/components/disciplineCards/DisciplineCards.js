import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./DisciplineCards.scss";
import StyleContext from "../../contexts/StyleContext";
import {disciplines} from "../../portfolio";

/* Square cards, one per discipline, each listing the languages/tools
   actually used in that area. Renders nothing if the config is empty. */
export default function DisciplineCards() {
  const {isDark} = useContext(StyleContext);

  if (!disciplines.display || disciplines.cards.length === 0) {
    return null;
  }

  return (
    <div className="discipline-cards">
      {disciplines.cards.map((card, i) => (
        <Fade bottom duration={800} distance="24px" delay={i * 100} key={i}>
          <div
            className={
              isDark ? "discipline-card discipline-card-dark" : "discipline-card"
            }
          >
            <h3 className="discipline-title">{card.title}</h3>
            {card.description && (
              <p className="discipline-desc">{card.description}</p>
            )}
            {card.skills && card.skills.length > 0 && (
              <ul className="discipline-skills">
                {card.skills.map((skill, j) => (
                  <li className="discipline-skill" key={j}>
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Fade>
      ))}
    </div>
  );
}
