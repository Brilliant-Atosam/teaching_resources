import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
const UploadExams = () => {
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      <div className="preview-container">
        {image && (
          <img
            className="thumbnail-previewer"
            src={URL.createObjectURL(image)}
          />
        )}
      </div>
      <div className="choose-files-container">
        <label htmlFor="select-file" className="select-file-label">
          <AiOutlineVideoCameraAdd className="add-video-icon" />
          select exam
        </label>
        <input
          type="file"
          name=""
          accept=".pdf, .docx, .ppt"
          id="select-file"
          onChange={(e) => setNote(e.target.files[0])}
        />
        <label htmlFor="select-thumbnail" className="select-file-label">
          <RiImageAddLine className="add-video-icon" color="white" />
          select thumbnail
        </label>
        <input
          type="file"
          name=""
          id="select-thumbnail"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <TextField label="Title" />
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Stream</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={0}
        label="Stream"
      >
        <MenuItem value={10}>J.H.S</MenuItem>
        <MenuItem value={20}>S.H.S</MenuItem>
      </Select>
      </FormControl>
      <TextField label="year" />
      <TextField label="Price" />
      <TextField label="Description" multiline />
      <TextField label="Tags" multiline />
      <button className="upload-btn">upload exam</button>
    </div>
  );
};

export default UploadExams;
