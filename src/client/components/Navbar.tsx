import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
      <NavLink to="/" className="navbar-brand">
        <img id="homeImage" src="https://xpresstiming.com/images/LOGO's/XprLogo2.png" alt="XpressTiming Logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/results" className="nav-link">
              Results
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pictures" className="nav-link">
              Pictures
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/calendar" className="nav-link">
              Calendar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-link"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

interface INavbarProps {}

export default Navbar;
