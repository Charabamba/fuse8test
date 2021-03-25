import React from "react";
import "./house-list.css";
import House from "../house";

const HouseList = ({ data }) => {
  return (
    <div className="container">
      <div className="house-list">
        {data.map((item, i) => (
          <li className="house-list__item" key={i}>
            <House houseData={item} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default HouseList;
