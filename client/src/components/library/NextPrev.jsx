import React from "react";
import "../../styles/library.css";
const NextPrev = () => {
  return (
    <div className=" next-page">
      <button disabled={true} className=" next-btn prev">
        prev
      </button>
      <span className="page-number">1</span>
      <button disabled className="next-btn next">next</button>
    </div>
  );
};

export default NextPrev;
