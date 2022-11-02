import { IconButton, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import useCommonFuntions from "../util/commonFunctions";
export default function Feedback() {
  const { toggleFeedback } = useSelector((state) => state.globalStates);
  console.log(toggleFeedback);
  const { handleToggleFeedback } = useCommonFuntions();
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleToggleFeedback}
    >
      <IoMdClose fontSize="small" />
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={toggleFeedback}
        autoHideDuration={7000}
        onClose={handleToggleFeedback}
        message="Hello world"
        action={action}
      />
    </div>
  );
}
