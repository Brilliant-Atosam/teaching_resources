import React, { useState } from "react";

const useUploadTeachingNotes = () => {
  const [note, setNote] = useState({
    title: "",
    subject: "",
    stream: "",
    year: "",
    tags: [],
    price: "",
    description: "",
    thumbnail_url: "",
    video_url: "",
  });
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  console.log(thumbnail);
  const [step, setStep] = useState(1);
  const steps = ["Choose file", "Basic info", "Details", "Upload"];
  //   setState functions
  const setTitle = (e) =>
    setNote((prev) => ({ ...prev, title: e.target.value }));
  const setSubject = (e) =>
    setNote((prev) => ({ ...prev, subject: e.target.value }));
  const setStream = (e) =>
    setNote((prev) => ({ ...prev, stream: e.target.value }));
  const setYear = (e) => setNote((prev) => ({ ...prev, year: e.target.value }));
  const setPrice = (e) =>
    setNote((prev) => ({ ...prev, price: e.target.value }));
  const setDescription = (e) =>
    setNote((prev) => ({ ...prev, description: e.target.value }));
  const setTags = (e) =>
    setNote((prev) => ({ ...prev, tags: e.target.value.split(", ") }));
  const onDrop = (selectedFiles) => setFile(selectedFiles[0]);
  // SET STEPS
  const setAnyStep = (index) => setStep(index);
  const setNext = () => setStep(step + 1);
  const setPrev = () => setStep(step - 1);
  return {
    note,
    setNote,
    setTitle,
    setSubject,
    setStream,
    setYear,
    setPrice,
    setDescription,
    step,
    setStep,
    steps,
    thumbnail,
    setThumbnail,
    file,
    onDrop,
    setAnyStep,
    setNext,
    setPrev,
    setTags,
  };
};

export default useUploadTeachingNotes;
