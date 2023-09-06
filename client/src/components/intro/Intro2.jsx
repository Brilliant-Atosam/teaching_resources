import React from "react";
import { BsEyeglasses } from "react-icons/bs";
import { GiTestTubes } from "react-icons/gi";
import { CgYoutube } from "react-icons/cg";
import { MdOfflinePin } from "react-icons/md";
import { IoHappyOutline } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";
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
        <TfiStatsUp className="card-icon" />
        <h1 className="card-heading">lesson plan</h1>
        <p className="card-text">
          Discover and acquire pre-made, expectly crafted lesson plans to
          supercharge your teaching or learning journey with ease.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn2">
            <BsEyeglasses className="card-btn-icon" /> browse more
          </button>
        </div>
      </div>
      <div className="card">
        <GiTestTubes className="card-icon" />
        <h1 className="card-heading">Examination questions</h1>
        <p className="card-text">
          Access a repository of comprehensive examination questions and their
          corresponding marking schemes to bloster your test readiness and
          assessment accuracy.
        </p>
        <div className="card-btn-container">
          <button className="card-btn btn2">
            <BsEyeglasses className="card-btn-icon" /> browse more
          </button>
        </div>
      </div>
      <div className="card">
        <IoHappyOutline className="card-icon" />
        <h1 className="card-heading">teaching notes</h1>
        <p className="card-text">
          explore a comprehensive library of meticulously crafted teaching
          notes, your key to unlocking in-depth understanding and effective
          knowledge transfer.
        </p>
        <div className="card-btn-container">
          
          <button className="card-btn btn2">
            <BsEyeglasses className="card-btn-icon" /> browse more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro2;
