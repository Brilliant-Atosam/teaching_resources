import { Avatar } from "@mui/material";
import "./sidemenu.css";
import { BiSolidDashboard, BiSolidInfoCircle } from "react-icons/bi";
import {
  MdOndemandVideo,
  MdOutlineFeedback,
  MdPlayLesson,
  MdSettingsSuggest,
} from "react-icons/md";
import { GiTeacher, GiDirectionSigns } from "react-icons/gi";
import { BsFillPenFill } from "react-icons/bs";
import { useState } from "react";
import useMenu from "../../custom_hooks/useMenu";
const SideMenu = ({toggleMenu}) => {
//   let { toggleMenu } = useMenu();
//   console.log(toggleMenu);
  return (
    <div
      className={`side-menu-container`}
    >
      <div className="side-menu-top">
        <div className="channel-info">
          <Avatar
            className={
              toggleMenu ? "side-menu-avatar" : "side-menu-avatar-toggle-off"
            }
          />
          {toggleMenu && (
            <>
              <h1 className="side-menu-channel-text">Your channel</h1>
              <h2 className="side-menu-channel-name">@Admin</h2>
            </>
          )}
        </div>
        <div className="side-menu-nav-container">
          <li className="side-menu-nav-item">
            <BiSolidDashboard className="side-menu-nav-icon" />
            <span className={toggleMenu ? "no-show" : "no-show"}>
              dashboard
            </span>
          </li>
          <li className="side-menu-nav-item">
            <MdOndemandVideo className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              video lessons
            </span>
          </li>
          <li className="side-menu-nav-item">
            <MdPlayLesson className="side-menu-nav-icon" />
            <span className={toggleMenu ? "no-show" : "no-show"}>
              lesson notes
            </span>
          </li>
          <li className="side-menu-nav-item">
            <GiTeacher className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              teaching notes
            </span>
          </li>
          <li className="side-menu-nav-item">
            <BsFillPenFill className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              exam questions
            </span>
          </li>
          <li className="side-menu-nav-item">
            <GiDirectionSigns className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              scheme of work
            </span>
          </li>
          <li className="side-menu-nav-item">
            <BiSolidInfoCircle className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              detailed notes
            </span>
          </li>
        </div>
        <div className="side-menu-bottom">
          <li className="side-menu-nav-item">
            <MdSettingsSuggest className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>settings</span>
          </li>
          <li className="side-menu-nav-item">
            <MdOutlineFeedback className="side-menu-nav-icon" />{" "}
            <span className={toggleMenu ? "no-show" : "no-show"}>
              send feedback{" "}
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
