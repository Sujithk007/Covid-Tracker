import React from "react";

const StatusCard = ({ title, topColor, bottomColor, data }) => {
  return (
    <div className="statusCard">
      <div className="top-card" style={{ backgroundColor: topColor }}>
        <h1>{title}</h1>
      </div>
      <div className="bottom-card" style={{ backgroundColor: bottomColor }}>
        <h1>{data}</h1>
      </div>
    </div>
  );
};

export default StatusCard;
