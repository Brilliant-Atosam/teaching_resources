import React from "react";
import { useDropzone } from "react-dropzone";
const DragAndDrop = ({ onDrop }) => {
  const { getInputProps, getRootProps } = useDropzone({ onDrop });
  return (
    <div className="drop-file" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="drop-file-sub">
        <span>Drag and drop files here...</span>
        <b>OR</b>
        <button className="choose-file">click to select file</button>
      </div>
    </div>
  );
};

export default DragAndDrop;
