import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	const workExperience = [
  {
    logo: "./amb.png",
    alt: "Alpha Morgan Bank",
    company: "Alpha Morgan Bank",
    role: "Software Developer",
    duration: "Sep 2025 – Present",
    bullets: [
      "Collaborated with a cross-functional team to design and ship 3+ internal and external web applications using React, TypeScript, and Tailwind CSS for core banking operations within 4 months.",
      "Built an internal account-opening application using Flutter and Dart, streamlining onboarding workflows for banking staff.",
      "Designed, developed, and deployed USSD banking services (*734#), enhancing customer self-service capabilities and improving transaction accessibility across feature-phone users.",
    ],
  },
  {
    logo: "./huawei.png",
    alt: "Huawei Technologies",
    company: "Huawei Technologies",
    role: "Reconciliation & Control Analyst",
    duration: "Nov 2024 – Jun 2025",
    note: "Network Assurance Managed Services · IHS Project",
    bullets: [
      "Leveraged the Remote Monitoring System (RMS) to track and analyse diesel consumption across all IHS sites, ensuring accurate drop metrics and preventing network disruptions and fuel theft.",
      "Facilitated scheduled SBC meetings to resolve diesel-related discrepancies and operational inefficiencies, maintaining service continuity across all sites.",
      "Compiled and delivered detailed daily reports on diesel consumption and anomalies; executed escalation protocols promptly to mitigate risks and ensure full operational transparency.",
    ],
  },
  {
    logo: "./huawei.png",
    alt: "Huawei Technologies",
    company: "Huawei Technologies",
    role: "Maintenance & RMS Expert (NYSC)",
    duration: "Jan 2024 – Oct 2024",
    note: "Network Assurance Managed Services · IHS Project",
    bullets: [
      "Managed operational performance of IHS sites and towers across Nigeria using RMS software, ensuring continuous network functionality through proactive monitoring and intervention coordination.",
      "Conducted regular on-site PPE compliance inspections and generated comprehensive weekly safety reports, escalating critical violations for immediate corrective action.",
      "Tracked and reported daily diesel usage across all sites, identifying consumption anomalies and escalating discrepancies to prevent operational downtime.",
    ],
  },
  {
    logo: "./Marvel.png",
    alt: "Marvel Harry Academy",
    company: "Marvel Harry Academy",
    role: "Android & iOS App Developer",
    duration: "Jun 2024",
    bullets: [
      "Designed and developed a feature-rich e-learning mobile application using Flutter, tailored to enhance the digital learning experience for adult students.",
    ],
  },
  {
    logo: "./dreamlife.png",
    alt: "Dream Life Services",
    company: "Dream Life Services",
    role: "Cisco Instructor",
    duration: "Feb 2023 – Aug 2023",
    bullets: [
      "Delivered hands-on instruction for CCNA, IT Essentials, and Python professional certification courses, equipping students with industry-ready technical skills.",
    ],
  },
  {
    logo: "./lumos.png",
    alt: "Lumos Solar Systems",
    company: "Lumos Solar Systems",
    role: "Community Partner",
    duration: "Jun 2022 – Nov 2022",
    bullets: [
      "Led the sales and installation of Lumos Solar products, delivering sustainable off-grid energy solutions to local communities.",
      "Educated clients on solar benefits and system functionality, promoting energy efficiency and long-term cost savings.",
      "Managed end-to-end implementation from product delivery to post-installation support, achieving high customer satisfaction.",
      "Participated in advanced sales strategy and product training programmes to continuously drive performance growth.",
    ],
  },
  {
    logo: "./poyen.png",
    alt: "Poyen Nomovo Solar Systems",
    company: "Poyen Nomovo Solar Systems",
    role: "Solar Installer",
    duration: "Mar 2022 – Jun 2022",
    bullets: [
      "Assessed customer energy consumption and site conditions to design tailored solar systems, including 3 kVA and 4.5 kVA residential installations.",
      "Managed sales, installation, and ongoing maintenance of solar systems, ensuring peak efficiency and client satisfaction.",
      "Oversaw sales and installation of Beebee Jump off-grid solar products for remote locations, providing end-to-end consultation and aftercare.",
    ],
  },
  {
    logo: "./page.png",
    alt: "Page ICT Center",
    company: "Page ICT Center",
    role: "IT Personnel",
    duration: "May 2021 – Aug 2021",
    bullets: [
      "Performed IT support tasks using the Microsoft Office Suite (Word, Excel, PowerPoint, Photoshop) and underwent structured training in Android and iOS app development.",
    ],
  },
  {
    logo: "./multichoice.png",
    alt: "Multichoice",
    company: "Multichoice",
    role: "Marketing Sales Manager",
    duration: "Dec 2016",
    bullets: [
      "Drove sales of Multichoice products (GOtv & DStv), achieving 100+ sales within a single month through targeted outreach and strong customer engagement.",
    ],
  },
];


	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					            {/* ── WORK EXPERIENCE ── */}
            <div className="homepage-work-experience" id="experience">
              <h2 className="section-title" style={{ marginBottom: "8px" }}>Work Experience</h2>
              <p style={{
                fontSize: "15px",
                color: "rgba(13,13,13,0.5)",
                marginBottom: "40px",
                marginTop: 0,
              }}>
                A track record across software development, telecoms infrastructure, renewable energy, and education.
              </p>

              <div className="experience-timeline">
                {workExperience.map((job, idx) => (
                  <div className="experience-entry" key={idx}>
                    {/* Left: logo + timeline line */}
                    <div className="experience-left">
                      <div className="experience-logo-wrap">
                        <img src={job.logo} alt={job.alt} className="experience-logo" />
                      </div>
                      {idx < workExperience.length - 1 && (
                        <div className="experience-line" />
                      )}
                    </div>

                    {/* Right: content */}
                    <div className="experience-content">
                      <div className="experience-header">
                        <div>
                          <div className="experience-role">{job.role}</div>
                          <div className="experience-company">{job.company}</div>
                          {job.note && (
                            <div className="experience-note">{job.note}</div>
                          )}
                        </div>
                        <div className="experience-duration">{job.duration}</div>
                      </div>
                      <ul className="experience-bullets">
                        {job.bullets.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
