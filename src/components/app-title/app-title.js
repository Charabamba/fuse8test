import React from "react";
import "./app-title.css";

const AppTitle = ({ title }) => {
  return (
    <div className="container">
      <h2 className="app-title">{title}</h2>
    </div>
  );
};

export default AppTitle;
