import React from "react";
import { NavLink } from "react-router-dom";

import "./house.css";

const House = ({ houseData }) => {
  return (
    <NavLink
      className="house-link"
      exact
      activeStyle={{ color: " #b10000" }}
      to={`/details/${houseData.id}`}
    >
      <div className="house-link__img-container">
        <img
          className="house-link__img"
          src="https://via.placeholder.com/300x150/FF6666/FFFFFF?text=title"
          alt={houseData.id}
        />

        <span
          className={`house-link__type ${
            houseData.type === "IndependentLiving" ? "" : "house-link__type_alt"
          }`}
        >
          {houseData.type === "IndependentLiving"
            ? "Independent living"
            : "Restaurant & Support available"}
        </span>
      </div>
      <div className="house-link__info">
        <p className="house-link__title">{houseData.title}</p>
        <p className="house-link__address">{houseData.address}</p>
        <p className="house-link__price">
          New Properties for Sale from <span>£{houseData.price}</span>
        </p>
        <p className="house-link__small-text">Shared Ownership Available</p>
      </div>
    </NavLink>
  );
};

export default House;
