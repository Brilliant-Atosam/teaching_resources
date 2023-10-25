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
        <label className="choose-thumbnail" htmlFor="choose-thumbnail">
          <BiImageAdd className="choose-thumbnail-icon" /> 
        </label>
        <input type="file" id="choose-thumbnail" />
      </div>
    </div>
  );
};

export default Preview;
