import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import SEO from "../data/seo";

import "./styles/agapp.css";

const PlutoAi = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  const projectImages = [];
  const totalImages = 14;
  for (let i = 1; i <= totalImages; i++) {
    projectImages.push(`/plutoai/sub/sub${i}.png`);
  }

  return (
    <>
      <Helmet>
        <title>{`Projects | AgApp`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />

        {/* ================= HERO ================= */}
        <div className={`hero-image-container ${fullscreen ? "fullscreen" : ""}`}>
          {!playVideo ? (
            <>
              <img
                src="/plutoai/sub1.png"
                alt="AgApp Hero"
                className="hero-image"
              />

              {/* PLAY OVERLAY */}
              <div
                className="play-overlay"
                onClick={() => setPlayVideo(true)}
              >
                <div className="play-button">▶</div>
              </div>

              <div className="hero-text">
                <h1>Pluto AI</h1>
                <p>Explore our featured projects and creative work</p>
              </div>
            </>
          ) : (
            <>
              <video
                className="hero-video"
                src="/plutoai/plutoai.mp4"
                controls
                autoPlay
              />

              {/* CONTROLS */}
              <div className="video-controls">
                <button onClick={() => setFullscreen(!fullscreen)}>
                  {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
                <button onClick={() => setPlayVideo(false)}>Close</button>
              </div>
            </>
          )}
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="projects-grid-section">
          <h2>Project Gallery</h2>
          <div className="projects-grid">
            {projectImages.map((img, index) => (
              <div className="grid-item" key={index}>
                <img src={img} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PlutoAi;