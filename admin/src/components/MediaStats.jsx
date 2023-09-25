import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi2";
import { IoMdShareAlt } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";

const MediaStats = ({ date, views, downloads, likes }) => {
  return (
    <div className="stats-container">
      <div className="stats-left">
        <span className="stats">
          <HiOutlineClock /> 2 hours ago
        </span>
        <span className="stats">
          <HiOutlineEye /> 2 views
        </span>
        <span className="stats">
          <TfiDownload /> 5 downloads
        </span>
      </div>

      <div className="stats-right">
        <div className="like-dislike-container">
          <button className=" watch-like">
            <BiLike /> 2
          </button>
          <button className=" watch-like dislike">
            <BiDislike />
          </button>
        </div>
        <button className="watch-btn">
          <IoMdShareAlt /> share
        </button>
      </div>
    </div>
  );
};

export default MediaStats;
