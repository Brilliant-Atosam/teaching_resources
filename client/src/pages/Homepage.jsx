import React from "react";
import Intro from "../components/intro/Intro";
import Intro2 from "../components/intro/Intro2";
import Newsletter from "../components/Newsletter";
import RecentItems from "../components/RecentItems";

export default function Homepage() {
  return (
    <>
      <Intro />
      <Intro2 />
      <Newsletter />
      <RecentItems />
    </>
  );
}
