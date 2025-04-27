import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/league-list">League List</Link>
        </li>
        <li>
          <Link to="/cup-list">Cup List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
