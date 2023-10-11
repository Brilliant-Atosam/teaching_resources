import React from "react";

const Preview = ({ thumbnail, material }) => {
  return (
    <div className="upload-preview-container">
      <img
        src={URL.createObjectURL(thumbnail)}
        alt={material.title}
        className="preview-thumbnail"
      />
      <div className="upload-preview-details-container">
        <h1 className="preview-title">{material.title}</h1>
        <h3 className="meta-data">
          Stream: <b>{material.stream}</b>
        </h3>
        <h3 className="meta-data">
          Year: <b>{material.year}</b>
        </h3>
        <h3 className="meta-data">
          Price: <b>{material.price}</b>
        </h3>
        <h3 className="meta-data">
          Playlist: <b>{material.playlist}</b>
        </h3>
      </div>
      <div className="upload-preview-description"></div>
      <div className="tags-container">
        {material.tags.map((tag) => (
          <span className="tag pill">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Preview;
