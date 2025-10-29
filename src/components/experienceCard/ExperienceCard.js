import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark}) {
  const hasBullets =
    Array.isArray(cardInfo.descBullets) && cardInfo.descBullets.length > 0;

  return (
    <article
      className={
        isDark ? "experience-card experience-card--dark" : "experience-card"
      }
    >
      <header className="experience-card__header">
        {cardInfo.companylogo && (
          <div className="experience-card__logo">
            <img src={cardInfo.companylogo} alt={`${cardInfo.company} logo`} />
          </div>
        )}
        <div className="experience-card__headline">
          <h3 className="experience-card__company">{cardInfo.company}</h3>
          <p className="experience-card__role">{cardInfo.role}</p>
          <p className="experience-card__date">{cardInfo.date}</p>
        </div>
      </header>

      {cardInfo.desc && (
        <p className="experience-card__description">{cardInfo.desc}</p>
      )}

      {hasBullets && (
        <ul className="experience-card__list">
          {cardInfo.descBullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
