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
import { AiFillPicture, AiOutlineVideoCameraAdd } from "react-icons/ai";
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
    video,
    thumbnail,
    handleThumbnail,
    lesson,
    handleUpload,
    setLesson,
  } = useUploadVideo();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [image, setImage] = useState("");

  const [desc, setDesc] = useState("");
  const getText = () => {
    const contentState = editorState.getCurrentContent();
    setDesc(convertToHTML(contentState));
    setLesson((prev) => ({
      ...prev,
      description: convertToHTML(contentState),
    }));
  };
  const { getInputProps, getRootProps } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      <StepperComponent step={step} steps={steps} setStep={setAnyStep} />

      {step === 1 && (
        <>
          <div className="drop-file" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="drop-file-sub">
              <div className="preview-container">
                {video && (
                  <video
                    className="video-previewer"
                    src={URL.createObjectURL(video)}
                    controls
                    poster={thumbnail ? URL.createObjectURL(thumbnail) : ""}
                  ></video>
                )}
              </div>
              <span>Drag and drop files here...</span>
              <b>OR</b>
              <button className="choose-file">click to select file</button>
            </div>
          </div>
          {video && (
            <div className="thumbnail-selector">
              <label
                htmlFor="thumbnail-selector-input"
                className="thumbnail-selector-label"
              >
                <AiFillPicture />
                <span className="thumbnail-selector-text">
                  Select thumbnail
                </span>
              </label>
              <input
                type="file"
                id="thumbnail-selector-input"
                onChange={(e) => handleThumbnail(e)}
              />
            </div>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <TextField label="Subject" onBlur={(e) => setSubject(e)} />
          <TextField label="Title" onBlur={(e) => setTitle(e)} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Stream</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lesson.stream}
              label="Stream"
              defaultValue={streams[0]}
              onChange={(e) => setStream(e)}
            >
              {streams.map((stream) => (
                <MenuItem value={stream.value} key={stream.value}>
                  {stream.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year/Class</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lesson.year}
              label="Year/Class"
              onChange={(e) => setYear(e)}
              defaultValue={years[0]}
            >
              {years.map((year) => (
                <MenuItem value={year.value} key={year.title}>
                  {year.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
      {step === 3 && (
        <>
          <TextField label="Price" onBlur={(e) => setPrice(e)} />
          <TextField label="Playlist" onBlur={(e) => setPlaylist(e)} />
          <Editor
            editorState={editorState}
            onBlur={getText}
            placeholder="Description"
            editorClassName="editor"
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
      )}
    </div>
  );
};

export default UploadVideos;
