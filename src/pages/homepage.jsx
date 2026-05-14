import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/homepage.css";

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
                  <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
                  </a>
                  <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" />
                  </a>
                  <a href={`tel:${INFO.main.phone}`}>
                    <FontAwesomeIcon icon={faPhone} className="homepage-social-icon" />
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

            {/* ── PROJECTS ── */}
            <div className="homepage-projects" id="projects">
              <AllProjects />
            </div>

            {/* ── SKILLS ── */}
            <div className="homepage-after-title">
              <div className="homepage-skills">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">

                  {/* React */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#61DAFB" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.375-.498-1.732-.74-2.852-1.708-2.852-2.476.005-.768 1.125-1.74 2.857-2.475.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.782.635-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                      </svg>
                    </div>
                    <h3>React</h3>
                    <p>HTML, CSS, JavaScript, TypeScript</p>
                  </div>

                  {/* Flutter */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#02569B" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.26l-6.003 6.004 6.003 6.004h7.366L14.474 17.26l6.005-6.003h-7.006z"/>
                      </svg>
                    </div>
                    <h3>Flutter</h3>
                    <p>Dart, Riverpod, Provider, Interactive UI</p>
                  </div>

                  {/* Firebase */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#FFCA28" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 0 0-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 0 0 1.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984z"/>
                      </svg>
                    </div>
                    <h3>Firebase</h3>
                    <p>Realtime Database, Authentication, Hosting</p>
                  </div>

                  {/* Web3 / Ethereum */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#627EEA" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z"/>
                      </svg>
                    </div>
                    <h3>Web3</h3>
                    <p>Decentralized Apps (DApp), Smart Contracts</p>
                  </div>

                  {/* Laravel */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#FF2D20" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027.33.33 0 0 1-.074.017.38.38 0 0 1-.09 0 .416.416 0 0 1-.08-.014.582.582 0 0 1-.072-.03L.453 18.838a.375.375 0 0 1-.189-.326V3.379c0-.035.005-.069.014-.104a.46.46 0 0 1 .037-.097c.008-.011.02-.02.028-.032a.383.383 0 0 1 .054-.063.101.101 0 0 1 .024-.018L5.044.024a.375.375 0 0 1 .378 0L9.77 2.54h.002c.014.01.028.018.04.03a.383.383 0 0 1 .054.062c.008.012.02.021.028.033a.464.464 0 0 1 .038.097.361.361 0 0 1 .014.103v9.653l3.76-2.163V5.43c0-.036.004-.07.014-.105a.504.504 0 0 1 .036-.097c.009-.012.02-.021.028-.033a.4.4 0 0 1 .054-.062c.013-.011.027-.02.04-.03l4.646-2.514a.378.378 0 0 1 .378 0l4.645 2.514c.015.01.028.018.041.03a.4.4 0 0 1 .054.062c.009.012.02.021.028.033a.504.504 0 0 1 .036.097zm-.74 5.032V6.179l-1.57.9-2.192 1.263v4.283zm-4.648 8.006V14.18l-2.16 1.237-6.154 3.51v4.326zM1.015 3.708v14.588l8.304 4.742v-4.326l-4.322-2.47h-.002c-.014-.008-.028-.018-.04-.027a.42.42 0 0 1-.054-.063.436.436 0 0 1-.028-.032.504.504 0 0 1-.038-.097.378.378 0 0 1-.014-.1V6.178zm4.63-2.95L1.89 2.95l3.752 2.163 3.755-2.163zm1.89 10.207l2.193-1.263V5.43L8.16 6.33 5.97 7.593v4.283zm8.02-5.574l-3.752 2.163 3.752 2.16 3.756-2.16zm-4.263 9.468l5.53-3.17-2.765-1.59-5.527 3.17 2.762 1.59z"/>
                      </svg>
                    </div>
                    <h3>Laravel</h3>
                    <p>PHP, MVC, REST APIs</p>
                  </div>

                  {/* SQL - database cylinder icon */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#336791" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M12 2C7.589 2 4 3.343 4 5v14c0 1.657 3.589 3 8 3s8-1.343 8-3V5c0-1.657-3.589-3-8-3zm0 1.5c3.866 0 6.5 1.12 6.5 1.5S15.866 6.5 12 6.5 5.5 5.38 5.5 5s2.634-1.5 6.5-1.5zM5.5 7.18C6.8 7.71 9.22 8 12 8s5.2-.29 6.5-.82V9.5C18.5 9.88 15.866 11 12 11S5.5 9.88 5.5 9.5V7.18zm0 4C6.8 11.71 9.22 12 12 12s5.2-.29 6.5-.82V13.5c0 .38-2.634 1.5-6.5 1.5s-6.5-1.12-6.5-1.5v-2.32zm0 4C6.8 15.71 9.22 16 12 16s5.2-.29 6.5-.82V17.5c0 .38-2.634 1.5-6.5 1.5s-6.5-1.12-6.5-1.5v-2.32zm0 4C6.8 19.71 9.22 20 12 20s5.2-.29 6.5-.82V19c0 .38-2.634 1.5-6.5 1.5S5.5 19.38 5.5 19v-.82z"/>
                      </svg>
                    </div>
                    <h3>SQL</h3>
                    <p>Oracle, MySQL, Database Design</p>
                  </div>

                  {/* App Development - Android Studio correct logo */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#3DDC84" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M23.821 12.676l-1.647-2.851a.506.506 0 0 0-.868 0l-.576 1.001a7.05 7.05 0 0 0-1.716-1.07l.332-.997a.506.506 0 0 0-.321-.633l-3.23-.959a.503.503 0 0 0-.627.335l-.328.991a7.067 7.067 0 0 0-1.997 0l-.328-.991a.504.504 0 0 0-.628-.335l-3.23.959a.506.506 0 0 0-.321.633l.332.997a7.069 7.069 0 0 0-1.716 1.07l-.576-1.001a.506.506 0 0 0-.868 0L4.507 12.676a.506.506 0 0 0 .184.692l1.657.954a7.09 7.09 0 0 0-.033.678c0 .228.012.454.033.678l-1.657.954a.506.506 0 0 0-.184.692l1.647 2.851a.506.506 0 0 0 .868 0l.576-1.001a7.05 7.05 0 0 0 1.716 1.07l-.332.997a.506.506 0 0 0 .321.633l3.23.959a.505.505 0 0 0 .627-.335l.328-.991a7.067 7.067 0 0 0 1.997 0l.328.991a.504.504 0 0 0 .628.335l3.23-.959a.506.506 0 0 0 .321-.633l-.332-.997a7.069 7.069 0 0 0 1.716-1.07l.576 1.001a.506.506 0 0 0 .868 0l1.647-2.851a.506.506 0 0 0-.184-.692l-1.657-.954c.021-.224.033-.45.033-.678 0-.228-.012-.454-.033-.678l1.657-.954a.506.506 0 0 0 .184-.692zM14.164 5.065l.936-1.61a.267.267 0 0 0-.046-.33.253.253 0 0 0-.353.034l-.96 1.652a6.03 6.03 0 0 0-3.477 0L9.3 3.159a.253.253 0 0 0-.352-.034.267.267 0 0 0-.046.33l.935 1.61A5.995 5.995 0 0 0 6.6 8.124h10.8a5.995 5.995 0 0 0-3.236-3.059zM9.6 7.124a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2zm4.8 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"/>
                      </svg>
                    </div>
                    <h3>App Development</h3>
                    <p>Android Studio, Visual Studio Code</p>
                  </div>


                  {/* Cisco / Networking */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#1BA0D7" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M11.5 1C5.701 1 1 5.701 1 11.5S5.701 22 11.5 22 22 17.299 22 11.5 17.299 1 11.5 1zm0 1.5c4.972 0 9 4.028 9 9s-4.028 9-9 9-9-4.028-9-9 4.028-9 9-9zM7 9.5v5h1.5v-5H7zm3 0v5h1.5V12h1V10.5H10zm4.5 0v5H16v-3.5h1V9.5h-1.5z"/>
                      </svg>
                    </div>
                    <h3>IT Essentials</h3>
                    <p>Hardware, Software, Networking (CCNA)</p>
                  </div>

                  {/* Solar / Energy */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#F5A623" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75zM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm11.394-5.394a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.06-1.06l1.06-1.061a.75.75 0 0 1 1.06 0zm-14.849 0a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061L4.045 7.666a.75.75 0 0 1 0-1.06zM21.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75zM4.5 12a.75.75 0 0 1-.75.75H2.25a.75.75 0 0 1 0-1.5H3.75A.75.75 0 0 1 4.5 12zm14.197 5.303a.75.75 0 0 1-1.06 0l-1.061-1.06a.75.75 0 1 1 1.06-1.061l1.061 1.06a.75.75 0 0 1 0 1.061zm-12.728 0a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 0 1 1.061 1.06l-1.06 1.061a.75.75 0 0 1-1.061 0zM12 19.5a.75.75 0 0 1 .75.75V21.75a.75.75 0 0 1-1.5 0V20.25a.75.75 0 0 1 .75-.75z"/>
                      </svg>
                    </div>
                    <h3>Solar Systems</h3>
                    <p>Sales, Installation and Maintenance</p>
                  </div>

                  {/* Microsoft Office */}
                  <div className="skill-card">
                    <div className="skill-icon-wrap" style={{ color: "#D83B01" }}>
                      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M23.0144.9453L8.9716 3.2114V2.09L0 3.4783V20.5217L8.9716 21.91V20.7886L23.0144 23.0547V.9453zM8.9716 19.1245l-7.3305-1.0993V5.9748l7.3305-1.0993v14.2490zm1.6222.7674V4.108l10.7861-1.7542v19.2918L10.5938 19.892z"/>
                      </svg>
                    </div>
                    <h3>Soft Skills</h3>
                    <p>Microsoft Office Suite, Communication</p>
                  </div>

                </div>
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
