import React from "react";

const VideoPreviewComponent = ({ lesson, video, thumbnail, handleUpload }) => {
  return (
    <>
      <div className="upload-preview-container">
        <video
          src={URL.createObjectURL(video)}
          poster={thumbnail && URL.createObjectURL(thumbnail)}
          controls
          className="upload-preview-video"
        ></video>
        <div className="upload-preview-details-container">
          <h1 className="preview-title">{lesson.title}</h1>
          <h3 className="meta-data">
            Stream: <b>{lesson.stream}</b>
          </h3>
          <h3 className="meta-data">
            Year: <b>{lesson.year}</b>
          </h3>
          <h3 className="meta-data">
            Price: <b>{lesson.price}</b>
          </h3>
          <h3 className="meta-data">
            Playlist: <b>{lesson.playlist}</b>
          </h3>
        </div>
        <div className="upload-preview-description"></div>
      </div>
      <button className="upload-btn" onClick={handleUpload}>
        upload video
      </button>
    </>
  );
};

export default VideoPreviewComponent;
