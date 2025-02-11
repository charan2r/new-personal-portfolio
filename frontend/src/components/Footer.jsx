import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
    return (
        <footer>
            <h4>Developed by Charan Romi</h4>
            <h4>Copyright &copy; 2024 CR</h4>
            <div className="footerLinks">
                <a href="https://github.com/charan2r" ><FaGithub/></a>
                <a href="https://www.linkedin.com/in/charan44r" ><FaLinkedin/></a>
                <a href='mailTo:charanromi325@gmail.com' ><GrMail/></a>
            </div>          
        </footer>
    )
}

export default Footer;