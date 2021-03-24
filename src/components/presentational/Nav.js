import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="App-header">
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: " #b10000" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ color: " #b10000" }}
              to="/numbers-list"
            >
              Numbers list
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: " #b10000" }} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
