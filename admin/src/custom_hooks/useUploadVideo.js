import React, { useState } from "react";

const useUploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [lesson, setLesson] = useState({
    title: "",
    subject: "",
    year: "",
    stream: "",
    playlist: "",
    price: "",
    video_url: "",
    thumbnail_url: "",
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
  console.log(lesson);
  //   handling onDrop event
  const onDrop = (selectedFile) => setVideo(selectedFile[0]);
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
  };
};

export default useUploadVideo;
