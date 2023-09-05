import React from "react";
import { BiPlay } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { CgYoutube } from "react-icons/cg";
import { MdOfflinePin } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoHappyOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
const Intro2 = () => {
  return (
    <div className="container intro2">
      <div className="card">
        <MdOutlineOndemandVideo className="card-icon" />
        <h1 className="card-heading">video lessons</h1>
        <p className="card-text">
          Explore enlightening video lessons that make learning come alive,
          offering dynamic explanations and practical real-world applications.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn">
            {" "}
            <CgYoutube className="card-btn-icon" />
            watch online
          </button>
          <button className="card-btn btn2">
            <MdOfflinePin className="card-btn-icon" /> offline access
          </button>
        </div>
      </div>
      <div className="card">
        <GiReceiveMoney className="card-icon" />
        <h1 className="card-heading">Cash in</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn">
            {" "}
            <CgYoutube className="card-btn-icon" />
            watch online
          </button>
          <button className="card-btn btn2">
            <MdOfflinePin className="card-btn-icon" /> offline access
          </button>
        </div>
      </div>
      <div className="card">
        <TfiHelpAlt className="card-icon" />
        <h1 className="card-heading">Get help</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn">
            {" "}
            <CgYoutube className="card-btn-icon" />
            watch online
          </button>
          <button className="card-btn btn2">
            <MdOfflinePin className="card-btn-icon" /> offline access
          </button>
        </div>
      </div>
      <div className="card">
        <IoHappyOutline className="card-icon" />
        <h1 className="card-heading">Easy work life</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn">
            {" "}
            <CgYoutube className="card-btn-icon" />
            watch online
          </button>
          <button className="card-btn btn2">
            <MdOfflinePin className="card-btn-icon" /> offline access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
