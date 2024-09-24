import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Magazine</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News/Features</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          {/* <li>
            <Link to="/forums">Online Forums</Link>
          </li> */}
          <li>
            <Link to="/publications">Publications</Link>
          </li>
          <li>
            <Link to="/subscriptions">Subscriptions</Link>
          </li>
          {/* <li>
            <Link to="/guides">Guides</Link>
          </li> */}
          <li>
            <Link to="/newsletters">Newsletters</Link>
          </li>
          {/* <li>
            <Link to="/directories">Directories</Link>
          </li> */}
          <li>
            <Link to="/memberships">Memberships</Link>
          </li>
          <li>
            <Link to="/advertising">Advertising</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
