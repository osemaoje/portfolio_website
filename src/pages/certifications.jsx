import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/certifications.css";

const Certifications = () => {
    const [activeImage, setActiveImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "certifications");

    // ===== LOAD IMAGES FROM FOLDER =====
    const projectImages = [];
    const totalImages = 6; // change to your real count

    for (let i = 1; i <= totalImages; i++) {
        projectImages.push(`/certifications/cert${i}.jpg`);
    }

    return (
        <>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="certifications" />

                <div className="content-wrapper">
                    {/* LOGO */}
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    {/* ================= PROJECTS GRID ================= */}
                    <div className="projects-grid-section">
                        <h2>Certifications</h2>

                        <div className="projects-grid">
                            {projectImages.map((img, index) => (
                                <div
                                    className="grid-item"
                                    key={index}
                                    onClick={() => setActiveImage(img)}
                                >
                                    <img src={img} alt={`Certification ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ================= FULLSCREEN VIEWER ================= */}
                    {activeImage && (
                        <div className="image-modal" onClick={() => setActiveImage(null)}>
                            <span
                                className="close-btn"
                                onClick={() => setActiveImage(null)}
                            >
                                &times;
                            </span>

                            <img
                                src={activeImage}
                                alt="Fullscreen preview"
                                onClick={(e) => e.stopPropagation()}   // 👈 prevents closing when image is clicked
                            />
                        </div>
                    )}


                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Certifications;
