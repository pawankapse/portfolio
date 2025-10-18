import React from "react";
import "./Home.css";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
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
        <img src="Images/my image.jpg"  alt="pawan1"/>
      </div>
      
    </div>
  );
};

export default Home;
