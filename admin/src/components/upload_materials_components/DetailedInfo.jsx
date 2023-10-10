import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { TextField } from "@mui/material";
import { Editor } from "react-draft-wysiwyg";
import React from "react";

const DetailedInfo = ({
  setPrice,
  setTags,
  getText,
  setEditorState,
  editorState,
  material,
}) => {
  return (
    <>
      <TextField
        label="Price"
        onBlur={(e) => setPrice(e)}
        value={material.price}
      />
      <Editor
        editorState={editorState}
        onBlur={getText}
        placeholder="Description"
        editorClassName="editor"
        onEditorStateChange={setEditorState}
      />
      <TextField label="Tags" multiline onBlur={(e) => setTags(e)} />
    </>
  );
};

export default DetailedInfo;
