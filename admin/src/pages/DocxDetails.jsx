import "../styles/details.css";
import Navbar from "../components/nav/Navbar";
import poster from "../images/thumbnail.png";
import { Typography } from "@mui/material";
import { MdDeleteOutline, MdMovieEdit } from "react-icons/md";
import AccordionComponent from "../components/Accordion";
import MediaStats from "../components/MediaStats";
const DocxDetails = () => {
  return (
    <>
      <div className="details-container">
        <img src={poster} alt="" className="video-player" />
        <Typography className="video-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et
          quas eligendi ex veniam!
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

export default DocxDetails;
