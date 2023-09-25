import React from "react";
import Navbar from "../components/nav/Navbar";
import UploadTeachingNotes from "../components/UploadTeachingNotes";
import Table from "../components/Table";
import { notecolumns, noterows } from "../data";
import Stats from "../components/Stats";

const TeachingNotes = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadTeachingNotes />
        </div>
        <div className="dashboard-right">
        <Stats />
          <Table rows={noterows} columns={notecolumns} />
        </div>
      </div>
    </>
  );
};

export default TeachingNotes;
