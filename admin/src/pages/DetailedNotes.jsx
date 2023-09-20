import React from "react";
import { notecolumns, noterows } from "../data";
import Navbar from "../components/nav/Navbar";
import UploadLessonPlan from "../components/UploadLssonPlan";
import Table from "../components/Table";

const DetailedNotes = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadLessonPlan />
        </div>
        <div className="dashboard-right">
          <div className="stat-container">
            <div className="stat-item-container">
              <span className="stat-numbers">17</span>
              <span className="stat-title">downloads</span>
            </div>
            <div className="stat-item-container">
              <span className="stat-numbers">17</span>
              <span className="stat-title">downloads</span>
            </div>
            <div className="stat-item-container">
              <span className="stat-numbers">17</span>
              <span className="stat-title">downloads</span>
            </div>
            <div className="stat-item-container">
              <span className="stat-numbers">17</span>
              <span className="stat-title">downloads</span>
            </div>
          </div>
          <Table rows={noterows} columns={notecolumns} />
        </div>
      </div>
    </>
  );
};

export default DetailedNotes;
