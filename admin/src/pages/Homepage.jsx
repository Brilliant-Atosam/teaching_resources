import "../styles/homepage.css";
import Navbar from "../components/nav/Navbar";
import UploadVideos from "../components/UploadVideo";
import Table from "../components/Table";
import { columns, rows } from "../data";
import Stats from "../components/Stats";
import useUploadVideo from "../custom_hooks/useUploadVideo";
const Homepage = () => {
  const { lesson } = useUploadVideo();
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadVideos />
        </div>
        <div className="dashboard-right">
          <Stats />
          <Table rows={rows} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
