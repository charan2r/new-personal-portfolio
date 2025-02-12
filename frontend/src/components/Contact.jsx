/* eslint-disable no-unused-vars */
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const Contact = () => {

    const [formData, setFormData] = useState({name: "", email: "", message: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/contacts/submit", formData);
            toast.success("Message sent successfully!", {position: "top-center"});
            setFormData({name: "", email: "", message: ""});
        } catch (error) {
            toast.error("Failed to send message!", {position: "top-center"});
    };
};

    


    return (
        <div className="ContactPage">
            <section>

                {/* Contact Details */}
                <div className="ContactHeading">
                    <h2>Contact Me</h2>
                    <p>Please share your thoughts with me</p>
                </div>

                <div className="ContactInfo">
                    <div className="ContactDetails">
                        <div className="ContactItem">
                            <div className="icon"><FaMapMarkerAlt/></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Jaya Nivasa,<br />Kotavila, Kamburugamuva, Matara,<br />Sri Lanka.</p>
                            </div>
                        </div>
                        <div className="ContactItem">
                            <div className="icon"><FaEnvelope/></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p>charanromi325@gmail.com</p>
                            </div>
                        </div>
                        <div className="ContactItem">
                            <div className="icon"><FaPhone/></div>
                            <div className="text">
                                <h3>Contact Number</h3>
                                <p>0767165639</p>
                            </div>
                        </div>
                    </div>


                    {/* Contact Form */}
                    <div className="ContactForm">
                        <form onSubmit={handleSubmit}>
                            <div className="formGroup">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                            </div>
                            <div className="formGroup">
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                            </div>
                            <div className="formGroup">
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                            </div>
                            <div className="formGroup">
                                <button type="submit" className="submitButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default Contact;
