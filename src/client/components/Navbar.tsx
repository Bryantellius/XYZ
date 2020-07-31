import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <main className="container-fluid p-2 shadow-lg d-flex">
      <h3 className="col-3 text-danger text-left">ONEPLUS</h3>
      <div className="col-6 d-flex justify-content-between align-items-center">
        <NavLink to="/phones" className="nav-link text-dark">
          Phones <span className="badge badge-dark">New</span>
        </NavLink>
        <NavLink to="/phones" className="nav-link text-dark">
          Store <span className="badge badge-dark">New</span>
        </NavLink>
        <NavLink to="/phones" className="nav-link text-dark">
          About
        </NavLink>
        <NavLink to="/phones" className="nav-link text-dark">
          Support
        </NavLink>
        <NavLink to="/phones" className="nav-link text-dark">
          Community
        </NavLink>
        <NavLink to="/phones" className="nav-link text-dark">
          Find A Store
        </NavLink>
      </div>
      <div className="col-3 d-flex justify-content-end align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-user mx-3"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shopping-bag mx-3"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </div>
    </main>
  );
};

interface INavbarProps {}

export default Navbar;
