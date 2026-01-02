import './Project.css'

const Projects = () => {
    const projects = [
        {
            "title": "ClassGPT",
            "tagline": "A Piazza-inspired class discussion forum that integrates LLM services with expert-controlled oversight",
            "focusAreas": ["AI Systems", "Full-Stack", "Education Tech"],
            "technologies": ["Springboot", "React", "postgreSQL"],
            "github": "https://github.com/cs484-SecWebApp/cs484-project-ci"
        },
        {
            "title": "FireSpot",
            "tagline": "A UIC based application inspired by Yelp and Rate-My-Professor allowing for students to post, review, and discuss study spots on campus",
            "focusAreas": ["CRUD operation", "Full-Stack", "Community Tech"],
            "technologies": ["Springboot", "React", "MySQL"],
            "github": "https://github.com/cs484-SecWebApp/cs484-project-ci"
        },
        {
            "title": "NightRider",
            "tagline": "An Arduino-based embedded dashboard for bicycles integrating sensors, signaling, and real-time rider feedback",
            "focusAreas": ["Embedded Systems", "Hardware–Software Integration", "Real-Time Systems"],
            "technologies": ["Arduino", "C++"],
            "github": "https://github.com/anirudh-56/NightRider"
        },
        {
            "title": "BookBargain",
            "tagline": "A Python-based web scraper that tracks book prices across retailers and notifies users when listings match their target price",
            "focusAreas": ["Web Scraping", "Automation", "Backend Systems"],
            "technologies": ["Python", "BeautifulSoup", "Twilio"],
            "github": "https://github.com/anirudh-56/BookBargain"
        }
    ]



    return(
        <section className="section" id="Projects">
            <h1 className="sectionTitle">Projects</h1>
            <div className="projects-grid">
                {
                    projects.map((project, i) => {
                        return(
                            <div className = "projectCard">
                                <h3>{project.title}</h3>
                                <p>{project.tagline}</p>

                                <h4>Focus Areas</h4>
                                <ul className="focus-areas">
                                    {project.focusAreas.map((focusArea, j) => (
                                        <li key={j}>{focusArea}</li>
                                    ))} 
                                </ul>                     

                                <h4>Technologies</h4>
                                <ul className="technologies">
                                    {project.technologies.map((technology, k) => (
                                        <li key={k}>{technology}</li>
                                    ))} 
                                </ul>  
                
                                <a href={project.github}>Github Repository</a>    
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Projects;