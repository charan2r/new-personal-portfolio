/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import Healthcare from '../assets/healthcare.jpg';
import Todo from '../assets/todo.png';
import Calculator from '../assets/calculator.png';
import ImageToText from '../assets/converter.png';
import Ecommerce from '../assets/ecommerce.png';
import Logbook from '../assets/logbook.png';
import Forms from '../assets/forms.png';
import User from '../assets/user.png';

const Projects = () => {
    const projectList = [
        {
            title: "E-commerce Site",
            description:
                "A full-stack e-commerce platform with secure payment integration, user authentication, and a responsive UI.",
            github: "https://github.com/charan2r/e-commerce-site.git",
            demo: "",
            photo: Ecommerce,
        },
        {
            title: "Digital Logbook",
            description:
                "A system for students and mentors to track activities, give feedback, and export bulk reports.",
            github: "",
            demo: "",
            photo: Logbook,
        },
        {
            title: "Forms Management System",
            description:
                "A web application for organizations to create, manage, and digitize form templates with authentication and API support.",
            github: "",
            demo: "",
            photo: Forms,
        },
        {
            title: "Healthcare Management System",
            description:
                "A full-stack system for managing appointment bookings and providing disease awareness.",
            github: "https://github.com/charan2r/Healthcare-Management.git",
            demo: "",
            photo: Healthcare,
        },
        {
            title: "To-Do App",
            description:
                "A full-stack task management app with authentication, CRUD operations, and task expiration notifications.",
            github: "https://github.com/charan2r/todo-app.git",
            demo: "",
            photo: Todo,
        },
        {
            title: "User Authentication System",
            description:
                "A MERN-based authentication system with JWT security, password hashing, and session management.",
            github: "https://github.com/charan2r/authentication.git",
            photo: User,
        },
        {
            title: "Calculator App",
            description:
                "A React-based calculator with an age calculator feature, providing accurate results with an intuitive UI.",
            github: "https://github.com/charan2r/calculator-app.git",
            demo: "https://calculator-app-chi-ruby.vercel.app/",
            photo: Calculator,
        },
        {
            title: "Image to Text Converter",
            description:
                "A React application using Tesseract.js to extract text from images with OCR technology.",
            github: "https://github.com/charan2r/converter.git",
            demo: "https://image-to-text-converter-liart.vercel.app/",
            photo: ImageToText,
        },
    ];

    return (
        <div>
            <h1 className="projectHeading">
                My <b>Projects</b>
            </h1>
            <p className="projectParagraph">Check out some of the projects I have worked on.</p>
            <div className="project">
                {projectList.map((project, index) => (
                    <ProjectInfo key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

const ProjectInfo = ({ project }) => {
    const { title, description, github, demo, photo } = project;

    return (
        <div className="projectBox">
            <img className="projectPhoto" src={photo} alt={`${title} project`} />
            <div>
                <br />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="projectLinks">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <button className="projectbtn">
                                <FaGithub /> Github
                            </button>
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer">
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
