import React, {useContext} from "react";
import "./Extracurricular.scss";
import {extracurricularSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Extracurricular() {
  const {isDark} = useContext(StyleContext);

  if (!extracurricularSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="extracurricular">
        <div className="extracurricular-wrapper">
          <div className="section-header">
            <h1 className="project-title extracurricular-title">
              {extracurricularSection.title}
            </h1>
            {extracurricularSection.subtitle && (
              <p
                className={
                  isDark
                    ? "dark-mode subTitle extracurricular-subtitle"
                    : "subTitle extracurricular-subtitle"
                }
              >
                {extracurricularSection.subtitle}
              </p>
            )}
          </div>

          <ul className="extracurricular-list">
            {extracurricularSection.activities.map((activity, index) => (
              <li
                key={index}
                className={
                  isDark
                    ? "extracurricular-item extracurricular-item--dark"
                    : "extracurricular-item"
                }
              >
                <div className="extracurricular-item__left">
                  <span className="extracurricular-item__title">
                    {activity.title}
                  </span>
                  <span className="extracurricular-item__dash">{" \u2013 "}</span>
                  <span className="extracurricular-item__organization">
                    {activity.organization}
                  </span>
                </div>
                {activity.period && (
                  <span className="extracurricular-item__period">
                    {activity.period}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
}
