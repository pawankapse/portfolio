import React from 'react'
import "./Footer.css";
import { MdAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

  return (
    <div>
      <div className="footer">
        <h1>PAWAN KAPSE</h1>
        <h2>Full Stack Developer</h2>

        <div className="footer-links">
          <a href="mailto:pawankapse2104.com">
            <MdAlternateEmail /> pawankapse2104@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/pawan-kapse-93035321a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin /> pawan kapse
          </a>

          <a
            href="https://wa.me/8236878990"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> 8236878990
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} pawan kapse. All Rights Reserved.
        </p>
      </div>
    </div>
  )


export default Footer
