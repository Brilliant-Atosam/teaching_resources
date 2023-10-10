import { TextField } from "@mui/material";
import React from "react";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const VideoDetailsComponent = ({
  setPrice,
  setPlaylist,
  setTags,
  getText,
  setEditorState,
  editorState,
}) => {
  return (
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
      <TextField label="Tags" multiline onBlur={(e) => setTags(e)} />
    </>
  );
};

export default VideoDetailsComponent;
