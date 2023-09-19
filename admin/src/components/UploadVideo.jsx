import { TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
const UploadVideos = () => {
  const [image, setImage] = useState("");
  console.log(image);
  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      {image && <img className="thumbnail-previewer" src={URL.createObjectURL(image)} />}
      <div className="choose-files-container">
        <label htmlFor="select-file" className="select-file-label">
          <AiOutlineVideoCameraAdd className="add-video-icon" />
          select video
        </label>
        <input type="file" name="" id="select-file" />
        <label htmlFor="select-thumbnail" className="select-file-label">
          <RiImageAddLine className="add-video-icon" color="white" />
          select thumbnail
        </label>
        <input
          type="file"
          name=""
          id="select-thumbnail"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
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
