import * as React from "react";
import { useHistory } from "react-router-dom";

const GetStarted: React.FC<IGetStartedProps> = (props: any) => {
  const history = useHistory();

  const changePage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    history.push("/payment_info");
  };

  return (
    <div className="col-md-10 mx-auto d-flex flex-column justify-content-between">
      <h1 className="text-dark text-center mb-3">Scrum Mastery Course</h1>
      <div className="welcomeContent row justify-content-start align-items-center">
        <div className="welcomeVideo col-md-6 align-self-start my-2 w-100">
          <iframe
            src="https://player.vimeo.com/video/445081038"
            width="100%"
            height="auto"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="my-5 mx-auto col-md-6">
            <button
              className="btn btn-lg btn-primary d-block w-100"
              onClick={changePage}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="welcomeContent col-md-6 d-flex justify-content-center align-items-center">
          <ol className="list-group-flush w-100 p-0">
            <li className="list-group-item d-flex flex-column justify-content-start align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user mx-2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Taught By: Steve Hallman</span>
            </li>
            <li className="list-group-item d-flex flex-column justify-content-start align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span>
                Date: August 15th and 22nd, 2020 (Sessions from 8:00 AM – 12:00
                PM and 2:00 PM – 4:00 PM each day)
              </span>
            </li>
            <li className="list-group-item d-flex flex-column justify-content-start align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather mx-2 feather-eye"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Location: Virtual Through Zoom</span>
            </li>
            <li className="list-group-item d-flex flex-column justify-content-start align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather mx-2 feather-bookmark mx-2"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>
                This 2-day, 6-hours per day course will guide participants
                through the world of Scrum Mastery. Participants will gain
                hands-on knowledge and will grow their ability to embrace Scrum
                and guide their teams to doing twice the work in half the time.
                At the end of the class, participants will be eligible to sit
                for the Scrum Inc. Scrum Master certifications, the Scrum-worlds
                only certifications that are recognized by Scrum co-founder Jeff
                Sutherland.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

interface IGetStartedProps {}

export default GetStarted;
