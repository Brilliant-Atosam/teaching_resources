import React from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { Link } from "react-router-dom";
import "../../styles/intro.css";
import { FiSearch } from "react-icons/fi";
const Intro = () => {
  return (
    <div className="container intro">
      <h1 className="heading intro-heading">
        <CiBrightnessUp className="intro-icon" /> Welcome to The Brilliant SC
      </h1>
      <div className="intro-form-container">
        <input
          type="text"
          className="intro-search-input"
          placeholder="Search for materials "
        />
        <FiSearch color="black" className="intro-search-icon" />
      </div>
      <p className="intro-content">
        Explore exclusive teaching slides, notes, exams, lesson plans, video lessons,
        scheme of work, mock questions and more on <b>The Brilliant SC</b>.
      </p>
    </div>
  );
};

export default Intro;
