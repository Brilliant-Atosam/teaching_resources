import "../styles/homepage.css";
import Navbar from "../components/nav/Navbar";
import UploadVideos from "../components/UploadVideo";
import Table from "../components/Table";
import { columns, rows } from "../data";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadVideos />
        </div>
        <div className="dashboard-right">
          <Table rows={rows} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
