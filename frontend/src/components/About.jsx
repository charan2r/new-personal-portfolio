import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coding from '../lotties/coding.json';
//import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


const About = () => {
  
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me</h1>
          <p>
            Hi, I am <b>Charan Romi</b> and I am from Sri Lanka.
            I am an undergraduate pursuing <b>BSc in Software Engineering</b>.<br /><br />

            I am passionate about developing unique projects with visually appealing designs. You can explore some of my work in the projects section.<br /><br />
            I am always open to new opportunities for collaboration or work where I can make an impact and continue growing. Do not hesitate to reach out and connect with me!<br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coding} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Technical Skills</h1>
      <div className='skills'>
        
        <Skills skill='HTML5'/>
        <Skills skill='CSS3'/>
        <Skills skill='Tailwind CSS'/>
        <Skills skill='JavaScript'/>
        <Skills skill='TypeScript'/>
        <Skills skill='React'/>
        <Skills skill='NextJs'/>
        <Skills skill='NodeJs'/>
        <Skills skill='ExpressJs'/>
        <Skills skill='MongoDB'/>
        <Skills skill='MySQL'/>
        <Skills skill='PostgreSQL'/>
        <Skills skill='Postman'/>
        <Skills skill='Java'/>
        <Skills skill='Python'/>
        <Skills skill='Prisma ORM'/>
        <Skills skill='PHP'/>
        <Skills skill='Laravel'/>
        <Skills skill='Git'/>
        <Skills skill='NestJs'/>

        
      </div>

    </>
  );
};

export default About;
