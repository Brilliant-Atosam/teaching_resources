import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import { useState } from "react";
import { AiFillPicture } from "react-icons/ai";
import StepperComponent from "./Stepper";
import useUploadVideo from "../custom_hooks/useUploadVideo";
import { streams, years } from "../data";
import DragAndDrop from "./DragAndDrop";
import VideoBasicInfoComponent from "./upload_vids_components/VideoBasicInfoComponent";
import VideoDetailsComponent from "./upload_vids_components/VideoDetailsComponent";
import VideoPreviewComponent from "./upload_vids_components/VideoPreview";
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
    setTags,
  } = useUploadVideo();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const getText = () => {
    const contentState = editorState.getCurrentContent();
    setLesson((prev) => ({
      ...prev,
      description: convertToHTML(contentState),
    }));
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload new video</h1>
      <StepperComponent step={step} steps={steps} setStep={setAnyStep} />

      {step === 1 && (
        <>
          <DragAndDrop onDrop={onDrop} />

          {video && (
            <>
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
            </>
          )}
        </>
      )}

      {step === 2 && (
        <VideoBasicInfoComponent
          lesson={lesson}
          setStream={setStream}
          setSubject={setSubject}
          setTitle={setTitle}
          setYear={setYear}
          streams={streams}
          years={years}
        />
      )}
      {step === 3 && (
        <VideoDetailsComponent
          editorState={editorState}
          getText={getText}
          setEditorState={setEditorState}
          setPlaylist={setPlaylist}
          setPrice={setPrice}
          setTags={setTags}
        />
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
        <VideoPreviewComponent
          handleUpload={handleUpload}
          lesson={lesson}
          thumbnail={thumbnail}
          video={video}
        />
      )}
    </div>
  );
};

export default UploadVideos;
