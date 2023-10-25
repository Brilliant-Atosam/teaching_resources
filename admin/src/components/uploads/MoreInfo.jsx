import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { streams, years } from "../../data";
const MoreInfo = () => {
  return (
    <div className="info-container">
      <TextField id="outlined-textarea" label="Price" placeholder="Price" />
      <TextField
        id="outlined-textarea"
        label="Description"
        placeholder="Description"
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Tags"
        placeholder="Tags"
        multiline
      />
      <TextField
        id="outlined-textarea"
        label="Playlist"
        placeholder="Playlist"
      />
    </div>
  );
};

export default MoreInfo;
