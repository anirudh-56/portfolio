import {useState} from 'react';
import { Box, Stack, Tabs, Tab } from "@mui/material";
import './Experience.css'

const Experience = () => {
    const [value, setValue] = useState(0);

    const experiences = [
        {
            "organization": "Walgreens",
            "role": "Software Engineer Intern",
            "location": "Chicago, Illinois",
            "timeframe": "June 2025 – August 2025",
            "website": "https://corporate.walgreens.com/",
            "logo": "../images/Walgreens.png",
            "summary": "Joined the Automation team to modernize testing infrastructure, migrating legacy Selenium suites to Playwright, enabling faster feedback loops and more reliable CI pipelines",
            "tasks": [
                "Translated real-world product scenarios into Playwright end-to-end tests, ensuring consistent validation of critical user workflows across browsers",
                "Built and maintained scalable Playwright test suites integrated with CI/CD pipelines, reducing flaky tests and improving deployment confidence.",
                "Authored reusable test utilities and abstractions to simplify test creation and reduce duplication across scenarios.",
                "Collaborated with software engineers and QA to align automated tests with real user behavior and production edge cases."
            ],
            "impact": "Improved release confidence by catching UI and workflow regressions earlier in CI, reducing reliance on manual regression testing",
            "techStack": ["Playwright", "TypeScript", "Node.js", "CI/CD", "Browser Automation"]
        },

        {
            "organization": "University of Illinois Chicago",
            "role": "Research Engineer",
            "location": "Chicago, Illinois",
            "timeframe": "August 2025 - December 2025",
            "website": "https://engineering.uic.edu/",
            "logo": "../images/UIC.png",
            "more": "Mkdflsdfjl",
            "summary": "Joined the Human-Robot Interaction lab to build a speech-driven robotic homework tutor on the Temi robot, combining real-time conversation, reasoning, and personalized tutoring flows",
            "tasks": [
                "Designed and implemented a real-time, speech-driven tutoring system on the Temi robot, enabling natural conversational homework assistance.",
                "Integrated automatic speech recognition (ASR), large language model reasoning, and text-to-speech (TTS) to support continuous, interactive dialogue",
                "Implemented timing controls, session management, and interruption handling to support structured tutoring interactions.",
                "Collaborated with researchers to iterate on interaction design and evaluate usability in educational settings."
            ],
            "impact": "Demonstrated how real-time conversational AI can be embedded in physical robots to support structured, interactive learning experiences.",
            "techStack": ["Kotlin", "Android", "Temi", "Robot SDK", "ASR", "LLMs", "TTS", "Conversational AI"]
        },

        {
            "organization": "University of Illinois Chicago",
            "role": "Teaching Assistant",
            "location": "Chicago, Illinois",
            "timeframe": "January 2025 - June 2025 | August 2025 - May 2026",
            "website": "https://engineering.uic.edu/",
            "logo": "../images/UIC.png",
            "summary": "Served as a Teaching Assistant for Software Design, helping students design, debug, and learn about object-oriented systems in Java and JavaFX",
            "tasks": [],
            "impact": "Helped students ship more robust, well-structured Java applications by reinforcing sound software design, system design, and debugging practices",
            "techStack": ["Java", "JavaFX", "WebSockets"]
        },
    ]
    
    const TabPanel = ({ children, value, index }) => {
        return value === index && <Box>{children}</Box>;
    };

    return(
        <>
        <section className="section" id="Experiences">
            <div className="experienceSection">
                <h1 className="sectionTitle">Experience</h1>
                <Stack direction="row" gap={2}>
                <div className="experienceLayout">
                    <div className="experienceTabs">
                        <Tabs
                            orientation = "vertical"
                            value = {value}
                            onChange = {(_event, newValue) => setValue(newValue)}
                        >
                            {experiences.map((tab, index) => (
                                <Tab 
                                    key={index} 
                                    className="experienceTab"
                                    disableRipple
                                    label={
                                        <div className="tabRow">
                                        <img className="tabLogo" src={tab.logo} alt={`${tab.organization} logo`} />
                                        <div className="tabText">
                                            <div className="tabOrg">{tab.organization}</div>
                                            <div className="tabRole">{tab.role}</div>
                                        </div>
                                        </div>
                                    }                               
                                />
                            ))}
                        </Tabs>
                    </div>
                    <div
                        className={`experiencePanel ${
                            value === 2 ? "experiencePanelCompact" : "experiencePanelLarge"
                        }`}
                    >
                        {experiences.map((tab, index) => (
                            <TabPanel key={index} value={value} index={index}>
                                <div className="xpHeaderRow">
                                <a
                                    className="xpCompanyLink"
                                    href={tab.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Company ↗
                                </a>

                                {tab.more && (
                                    <a
                                    className="xpCompanyLink"
                                    href={tab.more}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                    More ↗
                                    </a>
                                )}
                                </div>
                            <p className="xpMeta">{tab.location} | {tab.timeframe}</p>
                            <p className="xpSummary">{tab.summary}</p>

                            {tab.tasks?.length > 0 && (
                                <ul className="xpTasks">
                                {tab.tasks.map((t, i) => (
                                    <li key={i}>{t}</li>
                                ))}
                                </ul>
                            )}

                            <div className="xpImpactBox">
                                <span className="xpImpactLabel">Impact</span>
                                <span className="xpImpactText">{tab.impact}</span>
                            </div>

                            <div className="xpTech">
                                <div className="xpTechTitle">Tech Stack</div>
                                <div className="xpTechChips">
                                {tab.techStack.map((tech, i) => (
                                    <span key={i} className="xpChip">{tech}</span>
                                ))}
                                </div>
                            </div>
                            </TabPanel>

                        ))}
                    </div>
                </div>
            </Stack>
            </div>
        </section>
        </>
    );
}

export default Experience;