import axios from "axios";
import React, { useState } from "react";

const useUploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const handleThumbnail = (e) => setThumbnail(e.target.files[0]);
  const [lesson, setLesson] = useState({
    title: "",
    subject: "",
    year: "",
    stream: "",
    playlist: "",
    price: "",
    video_url: "",
    thumbnail_url: "",
    description: <></>,
  });
  const setTitle = (e) =>
    setLesson((prev) => ({ ...prev, title: e.target.value }));
  const setSubject = (e) =>
    setLesson((prev) => ({ ...prev, subject: e.target.value }));
  const setYear = (e) =>
    setLesson((prev) => ({ ...prev, year: e.target.value }));
  const setStream = (e) =>
    setLesson((prev) => ({ ...prev, stream: e.target.value }));
  const setPlaylist = (e) =>
    setLesson((prev) => ({ ...prev, playlist: e.target.value }));
  const setPrice = (e) =>
    setLesson((prev) => ({ ...prev, price: e.target.value }));
  // steps
  const [step, setStep] = useState(1);
  const setAnyStep = (index) => setStep(index);
  const steps = ["Choose file", "Basic info", "More info", "Upload lesson"];
  //   handling onDrop event
  const onDrop = (selectedFile) => {
    setVideo(selectedFile[0]);
    const newFormData = new FormData();
    newFormData.append("video", video);
    newFormData.append("upload_preset", "s0veifxe");
    newFormData.append("you", "ryrrr");
    console.log(newFormData);
  };
  const handleUpload = async () => {
    // upload video to cloudinary
    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "s0veifxe");
    // upload thumbnail to cloudinary
    const thumbnailData = new FormData();
    thumbnailData.append("file", thumbnail);
    thumbnailData.append("upload_preset", "zzgdjkat");

    try {
      const videoResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/dqwtfxjbg/video/upload`,
        formData
      );
      setLesson((prev) => ({
        ...prev,
        video_url: videoResponse.data.secure_url,
      }));

      const thumbnailResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dqwtfxjbg/image/upload",
        thumbnailData
      );
      setLesson((prev) => ({
        ...prev,
        thumbnail_url: thumbnailResponse.data.secure_url,
      }));
      // save data to db
    } catch (err) {
      console.log(err.response ? err.response.data : "Network error");
    }
  };
  console.log(lesson);
  return {
    setTitle,
    setSubject,
    setYear,
    setStream,
    setPlaylist,
    setPrice,
    step,
    setStep,
    setAnyStep,
    onDrop,
    steps,
    video,
    handleThumbnail,
    thumbnail,
    lesson,
    handleUpload,
    setLesson,
  };
};

export default useUploadVideo;
