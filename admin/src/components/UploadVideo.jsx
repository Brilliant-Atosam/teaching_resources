import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Editor } from "react-draft-wysiwyg";
import { ContentState, EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import React, { useState } from "react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
import StepperComponent from "./Stepper";
import useUploadVideo from "../custom_hooks/useUploadVideo";
import { streams, years } from "../data";
const UploadVideos = () => {
  const {
    setTitle,
    setSubject,
    setYear,
    setStream,
    setPlaylist,
    setPrice,
    step,
    setStep,
    setAnyStep,
    onDrop,
    steps,
  } = useUploadVideo();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [desc, setDesc] = useState("");
  // console.log(desc);
  const getText = () => {
    const contentState = editorState.getCurrentContent();
    setDesc(convertToHTML(contentState));
  };
  const { getInputProps, getRootProps } = useDropzone({ onDrop });
  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      <StepperComponent step={step} steps={steps} setStep={setAnyStep} />
      <div className="preview-container">
        {video && (
          <video
            className="video-previewer"
            src={URL.createObjectURL(video)}
            controls
          ></video>
        )}
        {image && (
          <img
            className="thumbnail-previewer"
            src={URL.createObjectURL(image)}
          />
        )}
      </div>
      {step === 1 && (
        <div className="drop-file" {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="drop-file-sub">
            <span>Drag and drop files here...</span>
            <b>OR</b>
            <button className="choose-file">click to select file</button>
          </div>
        </div>
      )}
      {/* <div className="choose-files-container">
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
      </div> */}
      {step === 2 && (
        <>
          <TextField label="Subject" onBlur={(e) => setSubject(e)} />
          <TextField label="Title" onBlur={(e) => setTitle(e)} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Stream</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Stream"
              onBlur={(e) => setStream(e)}
            >
              {streams.map((stream) => (
                <MenuItem value={stream.value}>{stream.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year/Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Stream"
              onBlur={(e) => setYear(e)}
            >
              {years.map((year) => (
                <MenuItem value={year.value}>{year.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      {step === 3 && (
        <>
          <TextField label="Price" />
          <TextField label="Playlist" />
          <Editor
            editorState={editorState}
            onChange={getText}
            placeholder="Description"
            editorClassName="editor"
            // editorStyle={}
            // onCha
            onEditorStateChange={setEditorState}
          />
          <TextField label="Tags" multiline />
        </>
      )}
      <div className="next-prev">
        <button
          className="prev-btn next-prev-btn"
          disabled={step < 2}
          onClick={() => setStep(step - 1)}
        >
          Prev
        </button>
        <button
          className="next-btn next-prev-btn"
          disabled={step > 3}
          onClick={() => setStep(step + 1)}
        >
          Next
        </button>
      </div>
      {step === 4 && (
        <button className="upload-btn" onClick={getText}>
          upload video
        </button>
      )}
    </div>
  );
};

export default UploadVideos;
