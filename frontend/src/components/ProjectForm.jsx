/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const ProjectForm = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [liveDemo, setLiveDemo] = useState("");
    const [photo, setPhoto] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const newProject = {
                title,
                description,
                technologies: technologies.split(","),
                githubLink,
                liveDemo,
                photo,
            };

            await axios.post("http://localhost:5000/api/projects/add", newProject);
            toast.success("Project added successfully!", {position: "top-center"});
            onClose();
        }
        catch(error){
            toast.error("Failed to add project!", {position: "top-center"});
        }
    };


    return(

        <div className="modal">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">X</button>
                <h2>Add New Project</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <label>Description</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                    <label>Technologies</label>
                        <input type="text" value={technologies} onChange={(e) => setTechnologies(e.target.value)} required />
                    <label>Github Link</label>
                        <input type="text" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} required />
                    <label>Live Demo</label>
                        <input type="text" value={liveDemo} onChange={(e) => setLiveDemo(e.target.value)} required />
                    <label>Photo</label>
                        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
                    
                    <button type="submit">Add Project</button>
                </form>
            </div>
            <ToastContainer />
        </div>

    );
  
}

export default ProjectForm;