import React from "react";
import { RiFolderSharedLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoHappyOutline } from "react-icons/io5";
const Intro2 = () => {
  return (
    <div className="container intro2">
      <div className="card">
        <RiFolderSharedLine className="card-icon" />
        <h1 className="card-heading">Share teaching resources</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
      </div>
      <div className="card">
        <GiReceiveMoney className="card-icon" />
        <h1 className="card-heading">Cash in</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
      </div>
      <div className="card">
        <TfiHelpAlt className="card-icon" />
        <h1 className="card-heading">Get help</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
      </div>
      <div className="card">
        <IoHappyOutline className="card-icon" />
        <h1 className="card-heading">Easy work life</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil rerum
          vel animi ut eos iusto. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil rerum vel animi ut eos iusto.
        </p>
      </div>
    </div>
  );
};

export default Intro2;
