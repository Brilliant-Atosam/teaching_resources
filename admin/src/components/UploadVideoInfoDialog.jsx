import "../styles/upload.css";
import { useState } from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GrClose } from "react-icons/gr";
import { useDropzone } from "react-dropzone";
import { MdFileUpload } from "react-icons/md";
import Stepper from "./Stepper";
import StepperComponent from "./Stepper";
import BasicInfo from "./uploads/BasicInfo";
import MoreInfo from "./uploads/MoreInfo";
import Preview from "./uploads/Preview";
export default function UploadVideoInfoDialog() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };
  const onDrop = () => {};
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="dialog-super-container">
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className="upload-dialog-container"
      >
        <DialogTitle
          id="responsive-dialog-title"
          className="upload-dialog-title"
        >
          <h1 className="upload-title">Upload video</h1>{" "}
          <GrClose
            onClick={handleClose}
            className="upload-title-icon"
            color="white"
          />
        </DialogTitle>
        <DialogContent className="upload-info-dialog-content-container">
          <StepperComponent />
          {/* <BasicInfo /> */}
          {/* <MoreInfo /> */}
          <Preview />
        </DialogContent>
        <DialogActions>
          {/* <CircularProgress />  */}
          <Button>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
