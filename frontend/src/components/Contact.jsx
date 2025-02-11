import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
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
                        <form action="submit">
                            <div className="formGroup">
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="formGroup">
                                <input type="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className="formGroup">
                                <textarea name="message" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="formGroup">
                                <button type="submit" className="submitButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
