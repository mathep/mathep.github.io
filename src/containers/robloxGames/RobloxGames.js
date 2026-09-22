import React, {useContext} from "react";
import "./RobloxGames.scss";
import {robloxGames} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

/* Shipped Roblox titles, one card per game. Each card is a link to the
   game's store page; the thumbnail is the game's own 16:9 store art. */
export default function RobloxGames() {
  const {isDark} = useContext(StyleContext);
  if (!robloxGames.display || robloxGames.games.length === 0) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="roblox">
        <div>
          <h1 className="skills-heading">{robloxGames.title}</h1>
          {robloxGames.subtitle && (
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {robloxGames.subtitle}
            </p>
          )}

          <div className="roblox-games-container">
            {robloxGames.games.map((game, i) => (
              <a
                key={i}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  isDark
                    ? "dark-mode roblox-card roblox-card-dark"
                    : "roblox-card roblox-card-light"
                }
              >
                <div className="roblox-card-image">
                  <img src={game.image} alt={game.name} />
                  {game.stat && (
                    <span className="roblox-card-stat">{game.stat}</span>
                  )}
                </div>
                <div className="roblox-card-body">
                  <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {game.name}
                  </h5>
                  {(game.studio || game.role) && (
                    <p className="roblox-card-meta">
                      {[game.role, game.studio].filter(Boolean).join(" · ")}
                    </p>
                  )}
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {game.description}
                  </p>
                  <span className="roblox-card-cta">Play on Roblox ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
