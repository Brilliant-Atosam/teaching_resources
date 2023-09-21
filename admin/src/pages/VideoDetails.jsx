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
const VideoDetails = () => {
  return (
    <>
      <Navbar />
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
        <div className="stats-container">
          <div className="stats-left">
            <span className="stats">
              <HiOutlineClock /> 2 hours ago
            </span>
            <span className="stats">
              <HiOutlineEye /> 2 views
            </span>
            <span className="stats">
              <TfiDownload /> 5 downloads
            </span>
          </div>

          <div className="stats-right">
            <div className="like-dislike-container">
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
          </div>
        </div>
        <Accordion className="description">
          <AccordionSummary
            expandIcon={<GridExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
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
