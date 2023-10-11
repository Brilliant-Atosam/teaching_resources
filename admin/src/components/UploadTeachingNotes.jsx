import { TextField } from "@mui/material";
import React, { useState } from "react";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { AiFillPicture, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { RiImageAddLine } from "react-icons/ri";
import useUploadTeachingNotes from "../custom_hooks/useUploadTeachingNotes";
import DragAndDrop from "./DragAndDrop";
import StepperComponent from "./Stepper";
import BasicInfo from "./upload_materials_components/BasicInfo";
import { streams, years } from "../data";
import DetailedInfo from "./upload_materials_components/DetailedInfo";
import Preview from "./upload_materials_components/Preview";

const UploadTeachingNotes = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const getText = () => {
    const contentState = editorState.getCurrentContent();
    setNote((prev) => ({
      ...prev,
      description: convertToHTML(contentState),
    }));
  };
  const {
    step,
    onDrop,
    setThumbnail,
    thumbnail,
    steps,
    file,
    note,
    setDescription,
    setNote,
    setPrice,
    setStep,
    setStream,
    setSubject,
    setTitle,
    setYear,
    setAnyStep,
    setNext,
    setPrev,
    setTags,
  } = useUploadTeachingNotes();

  return (
    <>
      <div className="upload-container">
        <h1 className="upload-title">Upload new video</h1>
        <StepperComponent step={step} steps={steps} setStep={setAnyStep} />

        {step === 1 && (
          <>
            <DragAndDrop onDrop={onDrop} />
            {file && (
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
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  // onChange={(e) => handleThumbnail(e)}
                />
              </div>
            )}
          </>
        )}
        {step === 2 && (
          <BasicInfo
            material={note}
            setStream={setStream}
            setSubject={setSubject}
            setTitle={setTitle}
            setYear={setYear}
            years={years}
            streams={streams}
          />
        )}
        {step === 3 && (
          <DetailedInfo
            material={note}
            setPrice={setPrice}
            setTags={setTags}
            setEditorState={setEditorState}
            editorState={editorState}
            getText={getText}
          />
        )}
        {step === 4 && <Preview thumbnail={thumbnail} material={note} />}
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
      </div>
    </>
  );
};

export default UploadTeachingNotes;
