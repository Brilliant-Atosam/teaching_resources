import React from "react";
import Navbar from "../components/nav/Navbar";
import UploadTeachingNotes from "../components/UploadTeachingNotes";
import Table from "../components/Table";
import { columns, rows } from "../data";

const TeachingNotes = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadTeachingNotes />
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
          <Table rows={rows} columns={columns} />
        </div>
      </div>
    </>
  );
};

export default TeachingNotes;
