import "./topbar.css";
import { CiBrightnessUp, CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAddLink } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { Avatar } from "@mui/material";
import useMenu from "../../custom_hooks/useMenu";
import SideMenu from "./SideMenu";
import SideMenuToggled from "./SideMenuToggled";
const Topbar = () => {
  const { handleToggle, toggleMenu } = useMenu();
  return (
    <>
      <div className="top-bar-container">
        <div className="top-bar-left">
          <SlMenu className="menu-toggler" onClick={handleToggle} />
          <div className="logo-container">
            {" "}
            <CiBrightnessUp className="logo-icon" />
            <h1 className="logo-text">Brilliant SC</h1>
          </div>
        </div>
        <div className="top-bar-center">
          {/* <div className="search-form"> */}
          <CiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search through your channel"
          />
          <AiOutlineClose className="close-icon" />
          {/* </div> */}
        </div>
        <div className="top-bar-right">
          <button className="create-btn">
            <MdOutlineAddLink className="upload-icon" /> Upload
          </button>
          <Avatar className="top-bar-avatar" />
        </div>
        <div className="mb-search-toggler">
          <CiSearch className="search-icon" />
        </div>
      </div>
      {toggleMenu ? <SideMenuToggled /> : <SideMenu />}
    </>
  );
};

export default Topbar;
