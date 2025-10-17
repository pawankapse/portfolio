import React from 'react'
import './Skill.css'
import { FaHtml5 ,FaCss3,FaReact,FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb,SiGit, SiGithub } from "react-icons/si";


const Skills = () => {
  return (
    
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className='icon-style'> <FaHtml5 size={40} color="#E34F26" /> HTML</div>
          <div className='icon-style'><FaCss3 size={40} color="#1572B6" /> CSS</div>
          <div className='icon-style'><IoLogoJavascript size={40} color="#F7DF1E" /> JavaScript</div>
          <div className='icon-style'> <FaReact size={40} color="#61DBFB"/> React</div>
          <div className='icon-style'> <FaNodeJs size={40} color="#3C873A"/>Node.js</div>
          <div className='icon-style'> <SiExpress size={40} color="#000000" />
        Express.js</div>
          <div className='icon-style'><SiMongodb size={40} color="#4DB33D" /> MongoDB</div>
          <div className='icon-style'> <SiGit size={40} color="#181717" />Git  </div>
          <div className='icon-style'><SiGithub size={40} color="#181717" />GitHub</div>
        </div>
      </div>
    
  )
}

export default Skills
