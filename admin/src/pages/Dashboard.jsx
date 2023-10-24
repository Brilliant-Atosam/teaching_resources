import "../styles/dashboard.css";
import { TfiUpload } from "react-icons/tfi";
import event from "../img/events.png";
import { FiBarChart2 } from "react-icons/fi";
import { BiCommentDetail, BiLike } from "react-icons/bi";
import { BiSolidDashboard, BiSolidInfoCircle } from "react-icons/bi";
import {
  MdOndemandVideo,
  MdOutlineFeedback,
  MdPlayLesson,
  MdSettingsSuggest,
} from "react-icons/md";
import {
  GiTeacher,
  GiDirectionSigns,
  GiCash,
  GiReceiveMoney,
} from "react-icons/gi";
import { TbListDetails, TbMoneybag } from "react-icons/tb";
import { BsFillPenFill } from "react-icons/bs";
import { MdDelete, MdMovieEdit, MdRemoveRedEye } from "react-icons/md";
import Table from "../components/Table";
import { salesColumn, salesRow } from "../data";
const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="sub-container">
        <div className="dash-top">
          <h1 className="dash-top-title">Channel dashboard</h1>
          <button className="dash-top-btn">
            <TfiUpload className="dash-top-upload-icon" />
          </button>
        </div>
        <div className="dashboard-containers">
          <div className="latest-video-container">
            <h1 className="dash-item-title">Latest video performance</h1>
            <div className="thumbnail-title-container">
              <img src={event} alt="" className="dash-thumbnail" />
              <h1 className="video-title">Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="video-analytics-container">
              <div className="video-analytics-item">
                <FiBarChart2 className="video-analytic-icon" />{" "}
                <span className="video-analytic-data">2.2k</span>
              </div>
              <div className="video-analytics-item">
                <BiCommentDetail className="video-analytic-icon" />{" "}
                <span className="video-analytic-data">2.2k</span>
              </div>
              <div className="video-analytics-item">
                <BiLike className="video-analytic-icon" />{" "}
                <span className="video-analytic-data">2.2k</span>
              </div>
            </div>
            <div className="video-action-container">
              <MdMovieEdit className="video-action-icon" />
              <MdDelete className="video-action-icon" />
              <MdRemoveRedEye className="video-action-icon" />
            </div>
          </div>
          <div className="channel-analytics-container">
            <h1 className="dash-item-title">Channel performance</h1>
            <div className="channel-content-container">
              <h1 className="sub-title">Channel Content</h1>
              <div className="channel-content-sub-container">
                <div className="channel-analytic-item-container">
                  <MdOndemandVideo className="channel-analytic-icon" />{" "}
                  <span className="channel-analytic-data">33</span>
                </div>
                <div className="channel-analytic-item-container">
                  <MdPlayLesson className="channel-analytic-icon" />
                  <span className="channel-analytic-data">33</span>
                </div>
                <div className="channel-analytic-item-container">
                  <GiTeacher className="channel-analytic-icon" />
                  <span className="channel-analytic-data">33</span>
                </div>
                <div className="channel-analytic-item-container">
                  <BsFillPenFill className="channel-analytic-icon" />
                  <span className="channel-analytic-data">33</span>
                </div>
                <div className="channel-analytic-item-container">
                  <GiDirectionSigns className="channel-analytic-icon" />
                  <span className="channel-analytic-data">33</span>
                </div>
                <div className="channel-analytic-item-container">
                  <TbListDetails className="channel-analytic-icon" />
                  <span className="channel-analytic-data">33</span>
                </div>
              </div>
            </div>
            <div className="channel-content-container">
              <h1 className="sub-title">Channel Revenue</h1>
              <div className="channel-content-sub-container">
                <div className="revenue-container">
                  <div className="revenue-item">
                    <div className="revenue-item-left">
                      <GiCash className="revenue-icon" />{" "}
                      <h2 className="revenue-title">Total Revenue</h2>:
                    </div>
                    <h2 className="revenue-value">300.00</h2>
                  </div>
                  <div className="revenue-item">
                    <div className="revenue-item-left">
                      <GiReceiveMoney className="revenue-icon" />{" "}
                      <h2 className="revenue-title">Amount withdrawn</h2>:
                    </div>
                    <h2 className="revenue-value">300.00</h2>
                  </div>
                  <div className="revenue-item">
                    <div className="revenue-item-left">
                      {" "}
                      <TbMoneybag className="revenue-icon" />{" "}
                      <h2 className="revenue-title">Balance</h2>:
                    </div>
                    <h2 className="revenue-value">300.00</h2>
                  </div>
                  <button className="revenue-btn">withdraw</button>
                </div>
              </div>
            </div>
          </div>
          <div className="published-videos-container">
            <h1 className="dash-item-title published-title">
              Published videos
            </h1>
            <div className="published-videos">
              <div className="published-video">
                <img src={event} alt="" className="published-video-thumbnail" />
                <div className="published-video-details">
                  <h1 className="published-video-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium.
                  </h1>
                  <div className="published-video-analytics">
                    <div className="video-analytics-item">
                      <FiBarChart2 className="video-analytic-icon" />{" "}
                      <span className="video-analytic-data">2.2k</span>
                    </div>
                    <div className="video-analytics-item">
                      <BiCommentDetail className="video-analytic-icon" />{" "}
                      <span className="video-analytic-data">2.2k</span>
                    </div>
                    <div className="video-analytics-item">
                      <BiLike className="video-analytic-icon" />{" "}
                      <span className="video-analytic-data">2.2k</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="revenue-btn">see all videos</button>
            </div>
          </div>
          <div className="sales-history-container">
            <h1 className="dash-item-title">Sales history</h1>
            <Table columns={salesColumn} rows={salesRow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
