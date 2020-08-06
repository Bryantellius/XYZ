import * as React from "react";
import Confetti from "react-confetti";
import { useHistory } from "react-router-dom";

const ThankYou: React.FC<IThankYouProps> = (props: any) => {
  const history = useHistory();

  React.useEffect(() => {
    if (props.name.length == 0) {
      history.push("/signup");
    }
  }, []);

  return (
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={250}
      />
      <div id="successMain" className="container my-2 col-md-6">
        <div className="mb-3">
          <div className="alert alert-success">Purchase Successful</div>
          <h2>You're a rockstar, {props.name}!</h2>
          <p>
            You have signed up for the <b>{props.classDate}</b>.
            <br />
            <br />
            Be on the look out for an email with class Zoom link. We encourage
            you to checkout Steve Hallman on LinkedIn and GitHub!
          </p>
        </div>

        <div className="steveIcons my-3 p-3 mx-auto border-top border-dark col-md-4 d-flex justify-content-around align-items-center">
          <a
            href="https://www.linkedin.com/in/stevehallman/"
            className="nav-link text-dark"
          >
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
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://github.com/hallmansm" className="nav-link text-dark">
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
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

interface IThankYouProps {
  name: any;
  classDate: string;
}

export default ThankYou;
