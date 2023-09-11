import React from "react";
import cover from "../../images/cover.jpg";
import { BsDownload, BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const Videos = () => {
  return (
    <div className="library-container">
      <h1 className="library-title">video lessons</h1>
      <div className="library-elements-container">
        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <div className="library-card-stat">
            
          </div>
          <div className="library-card-action-container">
            <button className="library-item-btn play-btn">
              <BsPlayCircle /> watch now
            </button>
            {/* <button className="library-item-btn">
              <BsDownload />
              download (5 cedis)
            </button> */}
            <Link
              className="library-card-action-link"
              to="/lesson/details/1233"
            >
              see details
            </Link>
          </div>
        </div>
      </div>
      {/* <Link className="see-more-link" to="/pages/lessons/videos">
        See more video lessons
      </Link> */}
    </div>
  );
};

export default Videos;
