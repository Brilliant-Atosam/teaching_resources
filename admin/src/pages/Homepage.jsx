import "../styles/homepage.css";
import Navbar from "../components/nav/Navbar";
import UploadVideos from "../components/UploadVideo";
const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadVideos />
        </div>
        <div className="dashboard-right">right</div>
      </div>
    </>
  );
};

export default Homepage;
