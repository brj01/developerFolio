import React, {useContext} from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-content">
          <div className="greeting-text-flex">
            <div className="profile-avatar">
              <img
                src={require("../../assets/images/download (19).jpeg")}
                alt="Portrait of Hussein Atoui"
              />
            </div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {greeting.title}
            </h1>
          </div>
          <p
            className={
              isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"
            }
          >
            {greeting.subTitle}
          </p>
          <div className="greeting-social">
            <SocialMedia />
          </div>
          <div className="button-greeting-div">
            <Button text="Contact me" href="#contact" />
            {greeting.resumeLink && (
              <a
                href={require("./resume.pdf")}
                download="Resume.pdf"
                className="download-link-button"
              >
                <Button text="Download my resume" />
              </a>
            )}
          </div>
          <div id="resume" className="empty-div"></div>
        </div>
      </div>
    </div>
  );
}
