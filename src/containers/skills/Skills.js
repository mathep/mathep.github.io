import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection, sectionBlurbs} from "../../portfolio";
import SectionBlurb from "../../components/sectionBlurb/SectionBlurb";
import DisciplineCards from "../../components/disciplineCards/DisciplineCards";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SectionBlurb blurb={sectionBlurbs.about} />
            <SoftwareSkill />
            <DisciplineCards />
            {skillsSection.skills.length > 0 && (
            <ul className="skills-list">
              {skillsSection.skills.map((skill, i) => (
                <li
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-list-item"
                      : "subTitle skills-list-item"
                  }
                >
                  {skill}
                </li>
              ))}
            </ul>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
