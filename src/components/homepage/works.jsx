import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img src="./amb.png" alt="huawei" className="work-image" />
							<div className="work-title">Alpha Morgan Bank</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">Sep 2025 - Present</div>
						</div>

						<div className="work">
							<img src="./huawei.png" alt="huawei" className="work-image" />
							<div className="work-title">Huawei Technologies</div>
							<div className="work-subtitle">
								Reconciliation & Control Analyst
							</div>
							<div className="work-duration">Nov 2024 - Jun 2025</div>
						</div>

						<div className="work">
							<img src="./huawei.png" alt="huawei" className="work-image" />
							<div className="work-title">Huawei Technologies</div>
							<div className="work-subtitle">
								Maintenance & RMS Expert (NYSC)
							</div>
							<div className="work-duration">Jan 2024 - Oct 2024</div>
						</div>

						<div className="work">
							<img src="./Marvel.png" alt="marvel" className="work-image" />
							<div className="work-title">Marvel Harry Academy</div>
							<div className="work-subtitle">
								Android & iOS App Developer
							</div>
							<div className="work-duration">June 2024</div>
						</div>

						<div className="work">
							<img src="./dreamlife.png" alt="dreamlife" className="work-image" />
							<div className="work-title">Dream Life Services</div>
							<div className="work-subtitle">Cisco Instructor</div>
							<div className="work-duration">Feb 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img src="./poyen.png" alt="solar" className="work-image" />
							<div className="work-title">Poyen Nomovo Solar</div>
							<div className="work-subtitle">Solar Installer</div>
							<div className="work-duration">Mar 2022 - Jun 2022</div>
						</div>

						<div className="work">
							<img src="./lumos.png" alt="lumos" className="work-image" />
							<div className="work-title">Lumos Solar Systems</div>
							<div className="work-subtitle">
								Community Partner
							</div>
							<div className="work-duration">Jun 2022 - Nov 2022</div>
						</div>

						<div className="work">
							<img src="./page.png" alt="pageict" className="work-image" />
							<div className="work-title">Page ICT Center</div>
							<div className="work-subtitle">IT Personnel</div>
							<div className="work-duration">May 2021 - Aug 2021</div>
						</div>

						<div className="work">
							<img src="./multichoice.png" alt="multichoice" className="work-image" />
							<div className="work-title">Multichoice</div>
							<div className="work-subtitle">
								Marketing Sales Manager
							</div>
							<div className="work-duration">Dec 2016</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
