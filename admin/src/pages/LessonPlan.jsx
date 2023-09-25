import Stats from "../components/Stats";
import Table from "../components/Table";
import UploadLessonPlan from "../components/UploadLssonPlan";
import Navbar from "../components/nav/Navbar";
import { notecolumns, noterows } from "../data";

const LessonPlan = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadLessonPlan />
        </div>
        <div className="dashboard-right">
          <Stats />
          <Table rows={noterows} columns={notecolumns} />
        </div>
      </div>
    </>
  );
};

export default LessonPlan;
