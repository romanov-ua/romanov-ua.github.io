import React from "react";
import tinytanya from "../assets/images/tiny-tanya.jpg";
import soulcollector from "../assets/images/soul-collector.jpg";
import bimsi from "../assets/images/bimsi.png";
import haryshal from "../assets/images/haryskhal.jpg";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="" target="_blank" rel="noreferrer">
            <img src={bimsi} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <h2>Bimsi</h2>
          </a>
          <p>Developed mobile app for a coffee shop.</p>
        </div>
        <div className="project">
          <a
            href="https://phanopera.itch.io/haryshal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={haryshal} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://phanopera.itch.io/haryshal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Haryskhal</h2>
          </a>
          <p>Created levels and 3D models for gamejam game.</p>
        </div>
        <div className="project">
          <a
            href="https://ldjam.com/events/ludum-dare/58/the-soul-collector-2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={soulcollector}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://ldjam.com/events/ludum-dare/58/the-soul-collector-2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Soul Collector</h2>
          </a>
          <p>Created character models for gamejam game.</p>
        </div>
        <div className="project">
          <a
            href="https://phanopera.itch.io/tiny-tanya"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tinytanya}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://phanopera.itch.io/tiny-tanya"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Tiny Tanya</h2>
          </a>
          <p>Created levels and 3D models for gamejam game.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
