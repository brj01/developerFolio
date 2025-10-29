import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";
import {formatFileSizeDisplay} from "../../utils";

export default function GithubRepoCard({repo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {node} = repo;
  const updatedOn = node.updatedAt
    ? new Date(node.updatedAt).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric"
      })
    : null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={
          isDark ? "repo-card repo-card--dark" : "repo-card repo-card--light"
        }
        key={node.id}
        onClick={() => openUrlInNewTab(node.url, node.name)}
      >
        <span className="repo-card__accent" aria-hidden="true"></span>
        <div className="repo-card__content">
          <div className="repo-card__title">
            <svg
              aria-hidden="true"
              className="repo-card__icon"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-card__name">{node.name}</p>
          </div>
          {node.primaryLanguage && (
            <p className="repo-card__language">
              <span
                className="repo-card__language-dot"
                style={{backgroundColor: node.primaryLanguage.color}}
              ></span>
              {node.primaryLanguage.name}
            </p>
          )}
          {node.description && (
            <p className="repo-card__description">{node.description}</p>
          )}
        </div>
        <div className="repo-card__footer">
          <span className="repo-card__stat">
            <svg
              aria-hidden="true"
              className="repo-card__stat-icon"
              height="16"
              role="img"
              viewBox="0 0 14 16"
              width="14"
            >
              <path
                fillRule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              ></path>
            </svg>
            {node.stargazers.totalCount}
          </span>
          <span className="repo-card__stat">
            <svg
              aria-hidden="true"
              className="repo-card__stat-icon"
              height="16"
              role="img"
              viewBox="0 0 10 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              ></path>
            </svg>
            {node.forkCount}
          </span>
          {updatedOn && (
            <span className="repo-card__stat">
              <svg
                aria-hidden="true"
                className="repo-card__stat-icon"
                height="16"
                role="img"
                viewBox="0 0 14 16"
                width="14"
              >
                <path
                  fillRule="evenodd"
                  d="M7 2c-2.76 0-5 2.24-5 5 0 2.21 1.43 4.09 3.44 4.77v1.23c0 .55.45 1 1 1s1-.45 1-1v-1.23C10.57 11.09 12 9.21 12 7c0-2.76-2.24-5-5-5zM2 7c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm5-2H6v3l2.25 1.5.75-1.23L7 7V5z"
                ></path>
              </svg>
              {updatedOn}
            </span>
          )}
          <span className="repo-card__stat">
            <svg
              aria-hidden="true"
              className="repo-card__stat-icon"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M6 0l6 7H9v9H3V7H0l6-7z"
              ></path>
            </svg>
            {formatFileSizeDisplay(node.diskUsage)}
          </span>
        </div>
      </div>
    </Fade>
  );
}
