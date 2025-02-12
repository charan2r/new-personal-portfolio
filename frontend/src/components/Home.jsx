import Tilt from "react-parallax-tilt";
import Gamer from "../assets/gamer.jpg";
import Charan from "../assets/charan.jpg";
import Type from "./Type";
import { IoLogoGameControllerB } from "react-icons/io";
import CV from "../assets/Charan_Romi_CV.pdf";



const Home = () => {
    return (
    <div >
        <div className='HomePage'>
  
          <div className='HomeText'>
            <h1>Hello There!</h1>
            <h1>I am <b>Charan Romi</b></h1>

            {/* This is the Type component */}
            <Type/>
            
            <a href={CV} download='Charan_Romi_CV.pdf' className="downloadCV">Download CV</a>
              
          </div>
          <img src={Charan} alt="new" className="illustration"/>
          
        </div>
  
        <div className='AboutPage'>
          <div className='AboutText'>
            <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
            <p>
            I love transforming initial concepts into fully functional websites or products that make a real difference. 
            I am driven by the desire to take on projects that push me to grow as a developer and allow me to create work that I can truly take pride in.<br /><br />
            Currently I  and am working on  
            projects in <b>Full-Stack</b> development.<br />
            Also, I love <b>playing PC games</b> <IoLogoGameControllerB style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
          </div>

          {/* Parallax Effect */}
          <Tilt>
            <img className='Avatar' src={Gamer} alt="" />
          </Tilt>
        </div>
        
    </div>
    )
 }

export default Home;