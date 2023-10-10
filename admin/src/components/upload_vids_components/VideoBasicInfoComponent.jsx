import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
const VideoBasicInfoComponent = ({
  lesson,
  setStream,
  setSubject,
  setTitle,
  setYear,
  streams,
  years,
}) => {
  return (
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
  );
};

export default VideoBasicInfoComponent;
