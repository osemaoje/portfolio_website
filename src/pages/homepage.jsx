import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	const skills = [
		{ icon: "⚛️", title: "Frontend", desc: "React, TypeScript, Tailwind CSS — pixel-perfect, accessible UIs" },
		{ icon: "📱", title: "Mobile", desc: "Flutter & Dart — cross-platform iOS & Android applications" },
		{ icon: "🔧", title: "Backend", desc: "Laravel, PHP, SQL — robust APIs and database architecture" },
		{ icon: "🌐", title: "Web3", desc: "Ethereum, Solidity basics — wallet integration & blockchain UIs" },
	];

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="homepage-container">
					{/* ── HERO ── */}
					<div className="homepage-first-area">
						<div className="homepage-first-area-left-side">
							<span className="hero-eyebrow">Available for opportunities</span>

							<div className="title homepage-title">
								Software Developer<br />
								
							</div>

							<div className="subtitle homepage-subtitle">
								I build scalable web and mobile applications that solve real problems — with React, Flutter, Laravel, and a relentless focus on quality.
							</div>

							{/* Socials */}
							<div className="homepage-socials">
								<a href={INFO.socials.github} target="_blank" rel="noreferrer" title="GitHub">
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a href={`mailto:${INFO.main.email}`} title="Email">
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</div>
						</div>

						{/* Hero image */}
						<div className="homepage-first-area-right-side">
							<div className="homepage-image-container">
								<div className="homepage-image-wrapper">
									<img src={INFO.main.logo} alt={INFO.main.name} />
								</div>
							</div>
						</div>
					</div>

					{/* ── SKILLS + WORKS ── */}
					<div className="homepage-after-title">
						{/* Skills */}
						<div className="homepage-skills">
							<span className="section-label">Expertise</span>
							<h2 className="section-title">What I bring to the table</h2>
							<div className="skills-grid">
								{skills.map((s, i) => (
									<div className="skill-card" key={i}>
										<div className="skill-icon-wrap">{s.icon}</div>
										<h3>{s.title}</h3>
										<p>{s.desc}</p>
									</div>
								))}
							</div>
						</div>

						{/* Works sidebar */}
						<div className="homepage-works">
							<span className="section-label">Experience</span>
							<h2 className="section-title">Where I've worked</h2>
							<Works />
						</div>
					</div>

					{/* ── PROJECTS ── */}
					<div className="homepage-projects">
						<span className="section-label">Portfolio</span>
						<h2 className="section-title">Featured projects</h2>
						<AllProjects />
					</div>
				</div>

				<div className="content-wrapper">
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;