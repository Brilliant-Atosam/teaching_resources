import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../styles/intro.css";
const Intro = () => {
  return (
    <div className="container intro">
      <h1 className="heading intro-heading">
        <CiBrightnessUp className="intro-icon" /> Company Name
      </h1>
      <p className="intro-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        molestiae sint eum accusantium reprehenderit quidem delectus?
      </p>
      <div className="intro-btn">
        <button className="btn">
          <Link to="/login">Get started</Link>
        </button>
      </div>
    </div>
  );
};

export default Intro;
