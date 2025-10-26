import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import { motion } from 'framer-motion';
import * as anim from '../../animations';
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [active, setActive] = useState(null);
  function openUrlInNewTab(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) return null;

  return (
    <motion.div
      className="main"
      id="projects"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.28 }}
      variants={anim.staggerContainer(0.06)}
    >
      <div>
        <h1 className="skills-heading db-heading">{bigProjects.title}</h1>
        <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>
          {bigProjects.subtitle}
        </p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => (
            <motion.div
              className={isDark ? "dark-mode project-card" : "project-card"}
              key={i}
              variants={anim.fadeUp}
              whileHover="hover"
              initial="initial"
              animate="animate"
              whileTap={{ scale: 0.998 }}
            >
              {project.image ? (
                <motion.div className="project-image" variants={anim.floatHover} onClick={() => setActive(project)}>
                  <img src={project.image} alt={project.projectName} className="card-image" />
                </motion.div>
              ) : null}
              <div className="project-detail">
                <h5 className={isDark ? "dark-mode card-title" : "card-title"}>{project.projectName}</h5>
                <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>{project.projectDesc}</p>
                {project.footerLink ? (
                  <div className="project-card-footer">
                    {project.footerLink.map((link, idx) => (
                      <span key={idx} className={isDark ? "dark-mode project-tag" : "project-tag"} onClick={() => openUrlInNewTab(link.url)}>
                        {link.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        {active ? (
          <div className="project-modal-overlay" onClick={() => setActive(null)}>
            <motion.div className="project-modal" variants={anim.modalPop} initial="hidden" animate="visible" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
              <div style={{display:'flex', gap: '1rem', alignItems:'flex-start'}}>
                {active.image && <img src={active.image} alt={active.projectName} style={{width:220, borderRadius:10}} />}
                <div>
                  <h3 className="modal-title db-heading">{active.projectName}</h3>
                  <p className="modal-desc db-text">{active.projectDesc}</p>
                  <h4 className="db-heading" style={{fontSize:16}}>Reference Contributions</h4>
                  <ul className="db-text">
                    <li>Built a responsive journal platform with user profiles, article submissions, and event pages; integrated sentiment analysis, AI summarization, and plagiarism detection.</li>
                    <li>Developed an embedding-based recommendation system (Hugging Face + cosine similarity); delivered full-stack features with HTML/CSS/JS, Node.js, Express, and MongoDB.</li>
                  </ul>
                  <div style={{marginTop:12}}>
                    {active.footerLink && active.footerLink.map((lnk, k) => (
                      <button key={k} className="db-btn" onClick={() => openUrlInNewTab(lnk.url)} style={{marginRight:8}}>{lnk.name}</button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
