import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const additionalSkillGroups =
    (skillsSection.additionalSkillGroups &&
      Array.isArray(skillsSection.additionalSkillGroups) &&
      skillsSection.additionalSkillGroups.filter(
        group => group && group.items && group.items.length > 0
      )) ||
    [];
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-wrapper">
        <div className="section-header">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            {skillsSection.title}
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
        </div>
        <SoftwareSkill />
        {additionalSkillGroups.length > 0 && (
          <div className="skills-copy">
            {additionalSkillGroups.map((group, groupIndex) => (
              <div className="skills-copy-group" key={group.title || groupIndex}>
                {group.title && (
                  <h3
                    className={
                      isDark
                        ? "dark-mode skills-copy-heading"
                        : "skills-copy-heading"
                    }
                  >
                    {group.title}
                  </h3>
                )}
                {group.items &&
                  group.items.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className={
                        isDark
                          ? "dark-mode subTitle skills-text"
                          : "subTitle skills-text"
                      }
                    >
                      {item}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
