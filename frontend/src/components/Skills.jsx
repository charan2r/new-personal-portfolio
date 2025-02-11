/* eslint-disable react/prop-types */
import {FaReact, FaPython, FaLaravel, FaJava, FaCss3Alt, FaGitAlt, FaPhp} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiPostgresql } from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiPrisma, SiNestjs} from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { BiLogoTypescript } from "react-icons/bi";


const Skills = ({skill}) => {

    {/* Icons for each skill */}
    const icons = {
        HTML5: <FaHtml5 />,
        CSS3: <FaCss3Alt />,
        "Tailwind CSS": <RiTailwindCssFill />,
        JavaScript: <DiJavascript1 />,
        TypeScript: <BiLogoTypescript />,
        React: <FaReact />,
        NextJs: <RiNextjsFill />,
        NodeJs: <DiNodejs />,
        ExpressJs: <SiExpress />,
        MongoDB: <SiMongodb />,
        MySQL: <GrMysql />,
        PostgreSQL: <DiPostgresql />,
        Postman: <SiPostman />,
        Java: <FaJava />,
        Python: <FaPython />,
        "Prisma ORM": <SiPrisma />,
        PHP: <FaPhp />,
        Laravel: <FaLaravel />,
        Git: <FaGitAlt />,
        NestJs: <SiNestjs />
    }

    {/* Colors for each skill */}
    const colors = {
        HTML5: "#E44D26",
        CSS3: "#2965F1",
        "Tailwind CSS": "#06B6D4",
        JavaScript: "#F7DF1E",
        TypeScript: "#3178C6",
        React: "#61DAFB",
        NextJs: "#000000",
        NodeJs: "#339933",
        ExpressJs: "#828282",
        MongoDB: "#47A248",
        MySQL: "#00758F",
        PostgreSQL: "#336791",
        Postman: "#FF6C37",
        Java: "#007396",
        Python: "#3776AB",
        "Prisma ORM": "#0C344B",
        PHP: "#777BB4",
        Laravel: "#FF2D20",
        Git: "#F05032",
        NestJs: "#E0234E"
    };

    return (
        <div className="SkillBox" style={{ color: colors[skill], display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ fontSize: "2rem" }}>{icons[skill]}</div>
            <p style={{ fontWeight: "bold" }}>{skill}</p>
        </div>
    )
}

export default Skills;