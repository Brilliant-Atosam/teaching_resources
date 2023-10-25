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
const BasicInfo = () => {
  return (
    <div className="info-container">
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Stream</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //   multiple
          value=""
          //   onChange={handleChange}
          input={<OutlinedInput label="Stream" />}
          //   MenuProps={MenuProps}
        >
          {streams.map((stream) => (
            <MenuItem value={stream.value}>{stream.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Year</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          //   multiple
          value=""
          //   onChange={handleChange}
          input={<OutlinedInput label="Stream" />}
          //   MenuProps={MenuProps}
        >
          {years.map((year) => (
            <MenuItem value={year.value}>{year.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField fullWidth label="Subject" id="fullWidth" />
      <TextField fullWidth label="Title" id="fullWidth" />
      <TextField
        id="outlined-textarea"
        label="Multiline Placeholder"
        placeholder="Placeholder"
        multiline
      />
    </div>
  );
};

export default BasicInfo;
