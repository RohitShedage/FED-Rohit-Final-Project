import React from "react";
import { NavLink } from "react-router-dom";
const Header = props => {
  return (
    <div className="page-header">
      <div className="title">React Training Final Project</div>
      <nav className="nav-menu">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
