import { useEffect } from "react";
import "../styles/watch.css";
import "../styles/library.css";
import vid from "../videos/vid.mp4";
import Videos from '../components/library/Videos'
const WatchLesson = () => {
  useEffect(() => {
    document
      .getElementsByTagName("video")[0]
      .addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);
  function clickTag(e) {
    console.log(e.target.innerText);
  }
  return (
    <div className="watch-container">
      <div className="video-container">
        <video
          src={vid}
          controls
          title=""
          controlsList="nodownload"
          className="video-player"
          // loop
          // onClick={function (e) {
          //   e.preventDefault();
          // }}
          // onContextMenu="return false"
        ></video>
        <div className="video-details">
          <h1 className="video-title">Lorem ipsum dolor sit amet.</h1>
          <h2 className="video-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            dolores suscipit accusantium quos at et ducimus hic? Porro ex
            voluptatem fuga aut accusamus omnis officiis repellat sit explicabo
            nesciunt. Modi tenetur veniam perspiciatis pariatur libero.
          </h2>
          <div className="video-tags">
            <span className="tag-pill" onClick={clickTag}>
              science
            </span>
            <span className="tag-pill" onClick={clickTag}>
              maths
            </span>
            <span className="tag-pill" onClick={clickTag}>
              english
            </span>
            <span className="tag-pill" onClick={clickTag}>
              french
            </span>
          </div>
        </div>
      </div>
      <Videos />
    </div>
  );
};

export default WatchLesson;
