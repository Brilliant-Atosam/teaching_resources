import "../styles/details.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import Navbar from "../components/nav/Navbar";
import vid from "../vids/video.mp4";
import poster from "../images/thumbnail.png";
import { BiDislike, BiLike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { HiOutlineClock, HiOutlineEye } from "react-icons/hi2";
import { IoMdShareAlt } from "react-icons/io";
import { MdDeleteOutline, MdMovieEdit } from "react-icons/md";
import AccordionComponent from "../components/Accordion";
import MediaStats from "../components/MediaStats";
const VideoDetails = () => {
  return (
    <>
      <div className="details-container">
        <video
          src={vid}
          controls
          poster={poster}
          className="video-player"
        ></video>
        <Typography className="video-title">
          Lorem ipsum dolor sit amet.
        </Typography>
        <MediaStats />
        <AccordionComponent />
        <div className="action-container">
          <button className="action-btn">
            <MdMovieEdit className="action-icon" /> Edit
          </button>
          <button className="action-btn">
            <MdDeleteOutline className="action-icon" /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
