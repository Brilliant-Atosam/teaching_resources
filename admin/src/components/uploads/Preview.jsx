import React from "react";
import { BiImageAdd } from "react-icons/bi";

const Preview = () => {
  return (
    <div className="info-container">
      <div className="video-preview-container">
        <video
          src="https://youtube.com/shorts/afNYWXZlZtA?si=gDy5lwgktU_QITh1"
          className="preview-video"
          controls
        ></video>
        <label className="choose-thumbnail-label" htmlFor="choose-thumbnail">
          <BiImageAdd className="choose-thumbnail-icon" />{" "}
          <span>choose thumbnail</span>
        </label>
        <input type="file" id="choose-thumbnail" />
      </div>
      <div className="video-preview-details-container">
        <h1 className="preview-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nam
          labore soluta alias corrupti quis possimus
        </h1>
        <div className="preview-other-info">
          <div className="info-key-value">
            <span className="key">Stream:</span>
            <span className="value">J.H.S</span>
          </div>
          <div className="info-key-value">
            <span className="key">Year:</span>
            <span className="value">Form 1</span>
          </div>
          <div className="info-key-value">
            <span className="key">Price:</span>
            <span className="value">20</span>
          </div>
          <div className="info-key-value">
            <span className="key">Playlist:</span>
            <span className="value">Lorem ipsum dolor sit.</span>
          </div>
        </div>
        <div className="preview-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          veniam nobis, ipsa excepturi quia quibusdam vitae laboriosam numquam
          aut dolor earum, saepe fugiat dignissimos nesciunt.
        </div>
        <div className="preview-tags-container">
          <span className="tag">Lorem, ipsum.</span>
          <span className="tag">Lorem, ipsum.</span>
          <span className="tag">Lorem, ipsum.</span>
          <span className="tag">Lorem, ipsum.</span>
          <span className="tag">Lorem, ipsum.</span>
          <span className="tag">Lorem, ipsum.</span>
        </div>
      </div>
    </div>
  );
};

export default Preview;
