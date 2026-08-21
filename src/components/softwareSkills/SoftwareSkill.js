import React from "react";
import {Icon, addIcon} from "@iconify/react";
import ICONS from "../../iconData";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Register the inlined icon definitions once, at module load, so <Icon>
// resolves them locally instead of calling the Iconify API at runtime.
// To add an icon: put its name in portfolio.js, then run `npm run icons`.
Object.entries(ICONS).forEach(([name, data]) => addIcon(name, data));

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.iconifyIcon ? (
                  <Icon icon={skills.iconifyIcon} />
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
