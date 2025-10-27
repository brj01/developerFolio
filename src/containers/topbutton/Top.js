import React from "react";
import "./Top.scss";
import starIcon from "../../assets/images/golden-star.png";

export default function Top() {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollFunction = () => {
    const button = document.getElementById("topButton");
    if (!button) return;
    const shouldShow =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
    button.style.visibility = shouldShow ? "visible" : "hidden";
  };

  window.onscroll = () => scrollFunction();
  window.onload = () => scrollFunction();

  return (
    <button onClick={scrollToTop} id="topButton" title="Go to top">
      <img src={starIcon} alt="Scroll to top" className="top-button-icon" />
    </button>
  );
}
