import React from "react";
import Filter from "../components/library/Filter";
import Videos from "../components/library/Videos";
import NextPrev from "../components/library/NextPrev";

const VideosPage = () => {
  return (
    <>
      <Filter />
      <Videos />
      <NextPrev />
    </>
  );
};

export default VideosPage;
