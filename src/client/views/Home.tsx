import * as React from "react";
import BasicInfo from "../components/BasicInfo";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container d-flex justify-content-center align-items-center">
      <div className="card row justify-content-center align-items-center">
        <img
          id="tcLogo"
          src="/assets/TrueCodersLogo.png"
          alt="TrueCoders Logo"
        />
        <div className="progress col-md-6 mx-auto">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <BasicInfo />
      </div>
    </main>
  );
};

interface IHomeProps {}

export default Home;
