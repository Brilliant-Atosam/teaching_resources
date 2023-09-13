import { useEffect, useState } from "react";
import "../styles/watch.css";
import "../styles/library.css";
import vid from "../videos/vid.mp4";
import cover from "../images/cover.jpg";
import Videos from "../components/library/Videos";
import { BiLike, BiDislike, BiShare } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi";
const WatchLesson = () => {
  const [watched, setWatched] = useState(0);
  console.log(watched);
  useEffect(() => {
    const vid = document.getElementsByTagName("video")[0];

    vid.addEventListener("contextmenu", (e) => e.preventDefault());
    // vid.addEventListener("play", (e) => setWatched(watched + 1));
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
          <div className="video-stats">
            <div className="video-stat-left">
              <span className="stat">
                <HiOutlineClock /> 2 hours ago
              </span>
              <span className="stat">
                <HiOutlineEye /> 2 views
              </span>
              <span className="stat">
                <TfiDownload /> 5 downloads
              </span>
            </div>
            <div className="video-stat-right">
              <div className="like-dislike-container ">
                <button className=" watch-like">
                  <BiLike /> 2
                </button>
                <button className=" watch-like dislike">
                  <BiDislike />
                </button>
              </div>
              <button className="watch-btn">
                <IoMdShareAlt /> share
              </button>
              <button className="watch-btn">
                <TfiDownload /> download
              </button>
            </div>
          </div>
          <h2 className="video-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            dolores suscipit accusantium quos at et ducimus hic? Porro ex
            voluptatem fuga aut accusamus omnis officiis repellat sit explicabo
            nesciunt. Modi tenetur veniam perspiciatis pariatur libero.
          </h2>
          <div className="comments-container">
            <div className="comments-form-container">
              <div className="comment-input-container">
                <input
                  type="text"
                  className="comment-input"
                  placeholder="Add a comment"
                />
              </div>
            </div>
          </div>
          {/* <div className="video-tags">
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
          </div> */}
        </div>
      </div>
      <div className="other-videos-container">
        <div className="other-videos-top">
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
        <div className="other-video-container">
          <img src={cover} alt="" className="other-video-thumbnail" />
          <div className="other-video-details">
            <h1 className="other-video-title">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              dolores ducimus accusamus.
            </h1>
            <div className="other-video-stat">2h ago * 2 views * 5 downloads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLesson;
