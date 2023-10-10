import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { request } from "../request";
import { loadVideos } from "../redux/videosSlice";
const useUploadVideo = () => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos.videos);

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
    tags: [],
  });
  console.log(lesson);
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
  const setTags = (e) =>
    setLesson((prev) => ({ ...prev, tags: e.target.value.split(", ") }));
  // steps
  const [step, setStep] = useState(1);
  const setAnyStep = (index) => setStep(index);
  const steps = ["Choose file", "Basic info", "More info", "Upload lesson"];
  //   handling onDrop event
  const onDrop = (selectedFile) => {
    setVideo(selectedFile[0]);
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
      await setLesson((prev) => ({
        ...prev,
        video_url: videoResponse.data.secure_url,
      }));

      const thumbnailResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/dqwtfxjbg/image/upload",
        thumbnailData
      );
      await setLesson((prev) => ({
        ...prev,
        thumbnail_url: thumbnailResponse.data.secure_url,
      }));
      // add to redux
      await dispatch(loadVideos([...videos, lesson]));
      // save data to db
      const apiResponse = await request.post("/materials/video", lesson);
      window.alert(apiResponse.data);
    } catch (err) {
      console.log(err.response ? err.response.data : "Network error");
    }
  };
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
    setTags,
  };
};

export default useUploadVideo;
