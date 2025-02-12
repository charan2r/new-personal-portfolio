/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import ProjectForm from "./ProjectForm";

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/projects");
                setProjectList(response.data);
                setLoading(false);
            } catch (error) {
                console.error("No Projects were found", error);
            }
        };
        getProjects();
    }, []);

    const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <p className="projectParagraph">Check out some of the projects I have worked on.</p>

            {/* Rendering Projects */}
            <div className="project">
                {projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                ))}
            </div>

            {/* Add Project Button */}
            <div className="addProjectContainer">
                <button className="addProjects" onClick={toggleForm}>
                    Add Project
                </button>

                {isFormOpen && <ProjectForm onClose={toggleForm} />}
            </div>

        </div>
    );
};

const ProjectInfo = ({ project }) => {
    const { title, description, technologies, githubLink, liveDemo, photo } = project;

    return (
        <div className="projectBox">
            {/* Rendering Project Image */}
            <img className="projectPhoto" src={photo} alt={`${title} project`} />
            
            {/* Rendering Project Information */}
            <div>
                <br />
                <h3 className="project-title">{title}</h3>
                <p>{description}</p>


                {/* Rendering Technologies */}
                <div className="technologies">
                    {technologies && technologies.length > 0 && (
                    <p><b>Technologies:</b></p>
                    )}
                    <ul>
                        {technologies && technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>

                {/* Rendering GitHub and Demo links */}
                <div className="projectLinks">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <button className="projectbtn">
                                <FaGithub /> Github
                            </button>
                        </a>
                    )}
                    {liveDemo && (
                        <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                            <button className="projectbtn">
                                <CgFileDocument /> Demo
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;
