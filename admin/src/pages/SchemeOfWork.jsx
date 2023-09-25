import React from "react";
import Navbar from "../components/nav/Navbar";
import Table from "../components/Table";
import { notecolumns, noterows } from "../data";
import UploadExams from "../components/UploadExams";
import UploadSchemeOfWork from "../components/UploadScheme";
import Stats from "../components/Stats";

const SchemeOfWork = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-left">
          <UploadSchemeOfWork />
        </div>
        <div className="dashboard-right">
        <Stats />
          <Table rows={noterows} columns={notecolumns} />
        </div>
      </div>
    </>
  );
};

export default SchemeOfWork;
