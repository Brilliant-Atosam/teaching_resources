import React from "react";
import { BsDownload } from "react-icons/bs";
import cover from "../../images/cover.jpg";
import { Link } from "react-router-dom";

const Scheme = () => {
  return (
    <div className="library-container">
      <h1 className="library-title">Scheme of work</h1>
      <div className="library-elements-container">
        <div className="library-card">
          <img src={cover} alt="" className="library-item-cover" />
          <h1 className="library-item-title">Lorem ipsum dolor sit amet.</h1>
          <div className="library-card-action-container">
            <button className="library-item-btn">
            <BsDownload />
            download (5 cedis)
          </button>
            <Link className="library-card-action-link" to="/slide/details/1233">
              see details
            </Link>
          </div>
        </div>
      </div>
      <Link to="/lessons" className="see-more-link">
        See more schemes of work
      </Link>
    </div>
  );
};

export default Scheme;
