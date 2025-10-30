import React, {useContext, useEffect, useRef, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = event => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeProjectDetails();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedProject]);

  const openProjectDetails = project => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const handleKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectDetails(project);
    }
  };

  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="projects-wrapper">
          <div className="section-header">
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>
          </div>

          <div className="projects-container">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  role="button"
                  tabIndex={0}
                  onClick={() => openProjectDetails(project)}
                  onKeyDown={event => handleKeyDown(event, project)}
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={event => {
                                event.stopPropagation();
                                openUrlInNewTab(link.url);
                              }}
                              onKeyDown={event => {
                                if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault();
                                  event.stopPropagation();
                                  openUrlInNewTab(link.url);
                                }
                              }}
                              role="button"
                              tabIndex={0}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {selectedProject && (
          <div
            className="project-modal"
            onClick={closeProjectDetails}
            role="dialog"
            aria-modal="true"
          >
            <div
              className={
                isDark
                  ? "project-modal__card project-modal__card--dark"
                  : "project-modal__card"
              }
              ref={modalRef}
              onClick={event => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal__close"
                onClick={closeProjectDetails}
                aria-label="Close project details"
                >
                  {"\u00D7"}
                </button>
              <div className="project-modal__header">
                {selectedProject.image && (
                  <div className="project-modal__image">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.projectName}
                    />
                  </div>
                )}
                <div>
                  <h3 className="project-modal__title">
                    {selectedProject.projectName}
                  </h3>
                  {selectedProject.projectRole && (
                    <p className="project-modal__subtitle">
                      {selectedProject.projectRole}
                    </p>
                  )}
                </div>
              </div>
              {selectedProject.projectDesc && (
                <p className="project-modal__description">
                  {selectedProject.projectDesc}
                </p>
              )}
              {selectedProject.projectDescBullets &&
                selectedProject.projectDescBullets.length > 0 && (
                  <ul className="project-modal__list">
                    {selectedProject.projectDescBullets.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              {selectedProject.footerLink && (
                <div className="project-modal__actions">
                  {selectedProject.footerLink.map((link, index) => (
                    <button
                      key={index}
                      type="button"
                      className="project-modal__button"
                      onClick={() => openUrlInNewTab(link.url)}
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Fade>
  );
}
