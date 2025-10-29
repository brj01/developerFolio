import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div className="main" id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div className="section-header">
              <h1 className="experience-heading">Experiences</h1>
            </div>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => (
                <div className="experience-item" key={i}>
                  <span className="experience-item__marker" aria-hidden="true"></span>
                  <ExperienceCard
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
