import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const currentSEO = SEO.find((item) => item.page === "home");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="content-wrapper">
					<div className="homepage-container">

						{/* ── HERO ── */}
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>

								{/* CTA buttons */}
								<div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
									<a
										href={`mailto:${INFO.main.email}`}
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "8px",
											background: "#0D0D0D",
											color: "#fff",
											fontSize: "13px",
											fontWeight: 600,
											letterSpacing: "0.4px",
											padding: "13px 26px",
											borderRadius: "8px",
											textDecoration: "none",
											transition: "background 0.2s",
										}}
									>
										Get in touch
									</a>
									<a
										href="#projects"
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
											background: "transparent",
											color: "#0D0D0D",
											fontSize: "13px",
											fontWeight: 600,
											letterSpacing: "0.4px",
											padding: "12px 24px",
											borderRadius: "8px",
											textDecoration: "none",
											border: "1.5px solid rgba(13,13,13,0.15)",
											transition: "border-color 0.2s",
										}}
									>
										View my work →
									</a>
								</div>

								{/* Socials */}
								<div className="homepage-socials">
									<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faTwitter} className="homepage-social-icon" />
									</a>
									<a href={INFO.socials.github} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
									</a>
									<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faStackOverflow} className="homepage-social-icon" />
									</a>
									<a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faInstagram} className="homepage-social-icon" />
									</a>
									<a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
										<FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" />
									</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpeg"
											alt="Profile"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* ── PROJECTS ── */}
						<div className="homepage-projects" id="projects">
							<AllProjects />
						</div>

						{/* ── SKILLS + WORKS ── */}
						<div className="homepage-after-title">
							<div className="homepage-skills">
								<h2 className="section-title">Skills</h2>
								<div className="skills-grid">
									<div className="skill-card">
										<h3>React</h3>
										<p>HTML, CSS, JavaScript, TypeScript</p>
									</div>
									<div className="skill-card">
										<h3>Flutter</h3>
										<p>Dart, Riverpod, Provider, Interactive UI</p>
									</div>
									<div className="skill-card">
										<h3>Firebase</h3>
										<p>Realtime Database, Authentication, Hosting</p>
									</div>
									<div className="skill-card">
										<h3>Web3</h3>
										<p>Decentralized Applications (DApp), Smart Contract</p>
									</div>
									<div className="skill-card">
										<h3>Laravel</h3>
										<p>PHP, MVC, REST APIs</p>
									</div>
									<div className="skill-card">
										<h3>SQL</h3>
										<p>Oracle, MySQL, Database Design</p>
									</div>
									<div className="skill-card">
										<h3>App Development</h3>
										<p>Android Studio, Visual Studio Code</p>
									</div>
									<div className="skill-card">
										<h3>IT Essentials</h3>
										<p>Hardware, Software, Networking</p>
									</div>
									<div className="skill-card">
										<h3>Solar Systems</h3>
										<p>Sales, Installation and Maintenance</p>
									</div>
									<div className="skill-card">
										<h3>Soft Skills</h3>
										<p>Microsoft Office Suite, Communication</p>
									</div>
								</div>
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						{/* ── FOOTER ── */}
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;