import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  bigProjects,
  contactInfo
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  // Resume opens the PDF directly when greeting.resumeLink is set; until then
  // it scrolls to the hero, where the download button appears.
  const resumeHref = greeting.resumeLink || "#resume";
  const resumeIsFile = Boolean(greeting.resumeLink);

  // Labels come from the section configs so the nav always matches the
  // headings actually rendered on the page.
  const links = [
    {label: skillsSection.title, href: "#skills", show: skillsSection.display},
    {label: bigProjects.title, href: "#projects", show: bigProjects.display},
    {label: contactInfo.title, href: "#contact", show: true}
  ].filter(link => link.show && link.label);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn" style={{color: "white"}}>
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              {...(resumeIsFile
                ? {target: "_blank", rel: "noopener noreferrer"}
                : {})}
            >
              Resume
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
