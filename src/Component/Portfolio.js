import React from "react";
import "./Home.css";
import './Skill.css';
import "./Cntact.css";
import './Portfolio.css'
import { IoLogoJavascript } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";import { FaHtml5 ,FaCss3,FaReact,FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb,SiGit, SiGithub } from "react-icons/si";
const Portfolio = () => {
  return (
    <div>
      {/* home */}

      <div className="my-page">
        <div className="wlc">
          <h1>Welcome to My Portfolio</h1>
        </div>
        <div className="homebase">
          <div className="myname">
            <span className="name1">Hi i am pawan kapse</span>
            <span className="name2">FULL STACK DEVELOPER</span>
            <a
              href="/Images/resume.pdf"
              download="Pawan_Kapse_resume.pdf"
              target="_blank"
            >
              <button className="butttn">
                <IoMdDownload />
                Download Resume
              </button>{" "}
            </a>
          </div>
          <img src="Images/my image.jpg" alt="pawan1"/>
        </div>
      </div> 

      {/* About */}

      <div className="my-details">
        <h1>ABOUT ME</h1>
        <img src="Images/my image2.jpg" alt="pawan2" />
        <p>
          Hello, my name is Pawan Kapse, and I currently live in Indore, India.
          I have completed my bachelor's degree in B.Tech (E.C.) at{" "}
          <strong>Vaishnavi Institute of Technology and Science, Bhopal</strong>
          , which is affiliated with RGPV University, Bhopal (Madhya Pradesh). I
          have gained valuable skills in{" "}
          <b>JavaScript | React | Node.js | Express.js | MongoDB</b>.
        </p>
      </div>

      {/* skill.js */}
         <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="icon-style"><FaHtml5 size={40} color="#E34F26" /> HTML</div>
        <div className="icon-style"><FaCss3 size={40} color="#1572B6" /> CSS</div>
        <div className="icon-style"><IoLogoJavascript size={40} color="#F7DF1E" /> JavaScript</div>
        <div className="icon-style"><FaReact size={40} color="#61DBFB" /> React</div>
        <div className="icon-style"><FaNodeJs size={40} color="#3C873A" /> Node.js</div>
        <div className="icon-style"><SiExpress size={40} color="#000000" /> Express.js</div>
        <div className="icon-style"><SiMongodb size={40} color="#4DB33D" /> MongoDB</div>
        <div className="icon-style"><SiGit size={40} color="#181717" /> Git</div>
        <div className="icon-style"><SiGithub size={40} color="#181717" /> GitHub</div>
      </div>
    </div>

    {/* contact.js */}

    <div className='my-contact'>
      <h1>Contact Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="ea00c6cc-365f-4566-870d-3644e801ab33" />
  
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  
  <button type="submit">Submit</button>
</form>
    </div>

    
    </div>
  );
};

export default Portfolio;


