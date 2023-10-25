import "../styles/upload.css";
import { useState } from "react";
import {
  Button,
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
export default function UploadVideoDialog() {
  const [open, setOpen] = useState(false);
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
        <DialogContent className="upload-dialog-content-container">
          <div {...getRootProps()} className="drag-n-drop-container">
            <input {...getInputProps()} />

            <div className="drag-n-drop-label">
              <MdFileUpload className="select-file-icon" />
              <p>Drag and drop file to upload</p>
              <button className="select-file-btn">select file</button>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="upload-dialog-footer">
          <span className="upload-policy-agreement-notice">
            By uploading your file, you acknowledge that you agree to our terms
            and conditions.
          </span>
          <span className="upload-policy-agreement-notice">
            Do not violate others' copyright or privacy rights.
          </span>
        </DialogActions>
      </Dialog>
    </div>
  );
}
