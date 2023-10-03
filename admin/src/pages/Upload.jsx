import "../styles/upload.css";
import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import CustomizedSteppers from "../components/Stepper";
import HorizontalStepperWithError from "../components/Stepper";
const Upload = () => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");
  console.log(file);
  console.log(image);
  const handleUpload = async (selectedFile) => {
    // const file = selectedFile[0];
    setFile(selectedFile[0]);
  };
  const handleActualUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "s0veifxe");
    let endpointURL = `https://api.cloudinary.com/v1_1/dqwtfxjbg/image/upload
  `;
    const res = await axios.post(endpointURL, formData);
    setImage(res.data.secure_url);
    setFile(null);
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleUpload });
  // console.log(getRootProps, getInputProps);
  return (
    <>
      <HorizontalStepperWithError />
     
    </>
  );
};

export default Upload;
