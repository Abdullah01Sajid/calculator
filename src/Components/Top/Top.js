import React from "react";
import "./top.css";
function Top({ first, second }) {
  return (
    <div className="top_bar">
      <div className="prev">{second}</div>
      <div className="aft">{first}</div>
    </div>
  );
}

export default Top;
