import { TextField } from "@mui/material";
import React from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
const UploadVideos = () => {
  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      <label htmlFor="select-file" className="select-file-label">
        <AiOutlineVideoCameraAdd className="add-video-icon" color="white" />
        select video
      </label>
      <input type="file" name="" id="select-file" />
      <TextField label="Title" />
      <TextField label="Price" />
      <TextField label="Playlist" />
      <TextField label="Description" multiline />
      <TextField label="Tags" multiline />
      <button className="upload-btn">upload video</button>
    </div>
  );
};

export default UploadVideos;
