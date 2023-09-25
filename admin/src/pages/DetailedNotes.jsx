import React from "react";
import { notecolumns, noterows } from "../data";
import Navbar from "../components/nav/Navbar";
import UploadLessonPlan from "../components/UploadLssonPlan";
import Table from "../components/Table";
import Stats from "../components/Stats";

const DetailedNotes = () => {
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

export default DetailedNotes;
