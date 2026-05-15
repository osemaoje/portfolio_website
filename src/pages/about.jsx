import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

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
      "Designed, developed, and deployed USSD banking services (*734#), enhancing customer self-service capabilities across feature-phone users.",
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
      "Leveraged the Remote Monitoring System (RMS) to track and analyse diesel consumption across all IHS sites, preventing network disruptions and fuel theft.",
      "Facilitated scheduled SBC meetings to resolve diesel-related discrepancies and operational inefficiencies, maintaining service continuity.",
      "Compiled detailed daily reports on diesel consumption; executed escalation protocols to ensure full operational transparency.",
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
      "Managed operational performance of IHS sites across Nigeria using RMS software, ensuring continuous network functionality.",
      "Conducted regular PPE compliance inspections and generated comprehensive weekly safety reports.",
      "Tracked daily diesel usage across all sites, identifying anomalies and escalating discrepancies.",
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
      "Delivered hands-on instruction for CCNA, IT Essentials, and Python professional certification courses.",
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
      "Educated clients on solar benefits and system functionality, promoting energy efficiency.",
      "Managed end-to-end implementation from product delivery to post-installation support.",
    ],
  },
  {
    logo: "./poyen.png",
    alt: "Poyen Nomovo Solar Systems",
    company: "Poyen Nomovo Solar Systems",
    role: "Solar Installer",
    duration: "Mar 2022 – Jun 2022",
    bullets: [
      "Assessed customer energy consumption and site conditions to design tailored solar systems.",
      "Managed sales, installation, and ongoing maintenance, ensuring peak efficiency and client satisfaction.",
    ],
  },
  {
    logo: "./page.png",
    alt: "Page ICT Center",
    company: "Page ICT Center",
    role: "IT Personnel",
    duration: "May 2021 – Aug 2021",
    bullets: [
      "Performed IT support tasks using Microsoft Office Suite and underwent structured training in Android and iOS app development.",
    ],
  },
  {
    logo: "./multichoice.png",
    alt: "Multichoice",
    company: "Multichoice",
    role: "Marketing Sales Manager",
    duration: "Dec 2016",
    bullets: [
      "Drove sales of Multichoice products (GOtv & DStv), achieving 100+ sales within a single month.",
    ],
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "about");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Work | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="about" />
        <div className="content-wrapper">
          <div className="about-logo-container">
            <div className="about-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="about-container">
            <div className="about-main">
              {/* ── LEFT: Photo + socials ── */}
              <div className="about-left-side">
                <div className="about-image-container">
                  <div className="about-image-wrapper">
                    <img src={INFO.main.logo} alt={INFO.main.name} />
                  </div>
                </div>
                <div className="about-socials">
                  <Socials />
                </div>
              </div>

              {/* ── RIGHT: Bio + Experience ── */}
              <div className="about-right-side">
                <div className="title about-title">{INFO.about.title}</div>

                <div className="about-socials-mobile">
                  <Socials />
                </div>

                <div className="about-intro-block">
                  {INFO.about.description}
                </div>

                {/* ── WORK EXPERIENCE TIMELINE ── */}
                <div className="homepage-work-experience" id="experience">
                  <span style={{
                    display: "block",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "8px",
                  }}>
                    Career
                  </span>
                  <h2 className="section-title" style={{ marginBottom: "40px" }}>
                    Work Experience
                  </h2>

                  <div className="experience-timeline">
                    {workExperience.map((job, idx) => (
                      <div className="experience-entry" key={idx}>
                        <div className="experience-left">
                          <div className="experience-logo-wrap">
                            <img src={job.logo} alt={job.alt} className="experience-logo" />
                          </div>
                          {idx < workExperience.length - 1 && (
                            <div className="experience-line" />
                          )}
                        </div>
                        <div className="experience-content">
                          <div className="experience-header">
                            <div>
                              <div className="experience-role">{job.role}</div>
                              <div className="experience-company">{job.company}</div>
                              {job.note && <div className="experience-note">{job.note}</div>}
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
              </div>
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