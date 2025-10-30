import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  extracurricularSection,
  blogSection,
  achievementSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewEducation = educationInfo.display;
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;
  const viewExtracurricular = extracurricularSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewBigProjects = bigProjects.display;

  const navItems = [
    viewEducation && {label: "Education", href: "#education"},

    viewExperience && {label: "Experience", href: "#experience"},
    viewExtracurricular && {label: "Extracurricular", href: "#extracurricular"},
    viewBigProjects && {label: "Projects", href: "#projects"},

      viewSkills && {label: "Skills", href: "#skills"},
    viewAchievement && {label: "Achievements", href: "#achievements"},
      
    viewBlog && {label: "Articles", href: "#articles"}
  ].filter(Boolean);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          Bareaa Joudi
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
