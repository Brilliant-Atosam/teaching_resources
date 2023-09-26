import { Snackbar } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { resetSnackbar } from "../redux/snackbarSlice";
const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const { message, openSnackbar } = useSelector((state) => state.snackbar);
  const handleClose = () => dispatch(resetSnackbar());
  const action = (
    <React.Fragment>
      <MdClose onClick={handleClose} fontSize="small" />
    </React.Fragment>
  );
  return (
    <Snackbar
      open={openSnackbar}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default SnackbarComponent;
