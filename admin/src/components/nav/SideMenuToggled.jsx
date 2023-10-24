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
import { TbListDetails } from "react-icons/tb";
import { BsFillPenFill } from "react-icons/bs";
import { useState } from "react";
import useMenu from "../../custom_hooks/useMenu";
const SideMenuToggled = () => {
  //   let { toggleMenu } = useMenu();
  //   console.log(toggleMenu);
  return (
    <div className="side-menu-container side-menu-container-toggled">
      {/* <div className="side-menu-top-toggled">
        <Avatar className="side-menu-avatar-toggled" />
      </div> */}
      <div className="side-menu-nav-container-toggled">
        <li className="side-menu-nav-item">
          <BiSolidDashboard className="side-menu-nav-icon" />
        </li>
        <li className="side-menu-nav-item">
          <MdOndemandVideo className="side-menu-nav-icon" />{" "}
        </li>
        <li className="side-menu-nav-item">
          <MdPlayLesson className="side-menu-nav-icon" />
        </li>
        <li className="side-menu-nav-item">
          <GiTeacher className="side-menu-nav-icon" />{" "}
        </li>
        <li className="side-menu-nav-item">
          <BsFillPenFill className="side-menu-nav-icon" />{" "}
        </li>
        <li className="side-menu-nav-item">
          <GiDirectionSigns className="side-menu-nav-icon" />{" "}
        </li>
        <li className="side-menu-nav-item">
          <TbListDetails className="side-menu-nav-icon" />{" "}
        </li>
      </div>
      <div className="side-menu-bottom">
        <li className="side-menu-nav-item">
          <MdSettingsSuggest className="side-menu-nav-icon" />{" "}
        </li>
        <li className="side-menu-nav-item">
          <MdOutlineFeedback className="side-menu-nav-icon" />{" "}
        </li>
      </div>
    </div>
  );
};

export default SideMenuToggled;
