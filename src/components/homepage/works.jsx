import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const workItems = [
  { logo: "./amb.png",        alt: "Alpha Morgan Bank",    title: "Alpha Morgan Bank",    sub: "Software Developer",              duration: "Sep 2025 – Present" },
  { logo: "./huawei.png",     alt: "Huawei Technologies",  title: "Huawei Technologies",  sub: "Reconciliation & Control Analyst", duration: "Nov 2024 – Jun 2025" },
  { logo: "./huawei.png",     alt: "Huawei Technologies",  title: "Huawei Technologies",  sub: "Maintenance & RMS Expert",         duration: "Jan 2024 – Oct 2024" },
  { logo: "./Marvel.png",     alt: "Marvel Harry Academy", title: "Marvel Harry Academy", sub: "Android & iOS App Developer",      duration: "Jun 2024" },
  { logo: "./dreamlife.png",  alt: "Dream Life Services",  title: "Dream Life Services",  sub: "Cisco Instructor",                 duration: "Feb 2023 – Aug 2023" },
  { logo: "./lumos.png",      alt: "Lumos Solar",          title: "Lumos Solar Systems",  sub: "Community Partner",               duration: "Jun 2022 – Nov 2022" },
  { logo: "./poyen.png",      alt: "Poyen Nomovo",         title: "Poyen Nomovo Solar",   sub: "Solar Installer",                  duration: "Mar 2022 – Jun 2022" },
  { logo: "./page.png",       alt: "Page ICT Center",      title: "Page ICT Center",      sub: "IT Personnel",                     duration: "May 2021 – Aug 2021" },
  { logo: "./multichoice.png",alt: "Multichoice",          title: "Multichoice",          sub: "Marketing Sales Manager",          duration: "Dec 2016" },
];

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work History"
        body={
          <div className="works-body">
            {workItems.map((item, i) => (
              <div className="work" key={i}>
                <img src={item.logo} alt={item.alt} className="work-image" />
                <div className="work-info">
                  <div className="work-title">{item.title}</div>
                  <div className="work-subtitle">{item.sub}</div>
                </div>
                <div className="work-duration">{item.duration}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};

export default Works;