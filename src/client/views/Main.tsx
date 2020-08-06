import * as React from "react";
import DisplayLogo from "../components/DisplayLogo";
import { NavLink } from "react-router-dom";

const Main: React.FC<IMainProps> = () => {
  return (
    <div className="col-md-10 mx-auto justify-content-center align-items-center shadow-sm rounded text-center">
      <h2 className="p-2 border-bottom border-info mb-2">Courses</h2>

      <NavLink id="selectScrum" to="/signup" className="nav-link text-dark h5">
        <img
          src="/assets/ScrumLogo.png"
          alt="Scrum Master Logo"
        />
      </NavLink>
      <NavLink to="/signup" className="nav-link text-dark h5">
        Scrum Master
      </NavLink>
    </div>
  );
};

interface IMainProps {}

export default Main;
