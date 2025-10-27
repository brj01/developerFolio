import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (educationInfo.display) {
    return (
      <div className="main" id="education">
        <div className="education-section">
          <div className="section-header">
            <h1 className="education-heading">Education</h1>
          </div>
          <div className="education-card-container">
            {educationInfo.schools.map((school, index) => (
              <EducationCard key={index} school={school} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
