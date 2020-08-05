import * as React from "react";
import BasicInfo from "../components/BasicInfo";
import BillingInfo from "../components/BillingInfo";
import ThankYou from "../components/ThankYou";
import ProgressBar from "../components/ProgressBar";
import DisplayLogo from "../components/DisplayLogo";
import { BrowserRouter, Route } from "react-router-dom";

const Home: React.FC<IHomeProps> = () => {
  const [progress, setProgress] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("John Doe");
  const [email, setEmail] = React.useState<string>("");
  const [number, setNumber] = React.useState<number>(0);
  const [classDate, setClassDate] = React.useState<string>(
    "August 17th Full-time"
  );

  const changeProgressBar = (num: number) => {
    document.getElementById("progressBar").style.width = num.toString() + "%";
  };

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <div
        id="contentDiv"
        className="card justify-content-start align-items-center"
      >
        <DisplayLogo />
        <ProgressBar progress={progress} />
        <BrowserRouter>
          <Route path="/basic_info">
            <BasicInfo
              status={{ progress, name, email, number }}
              methods={{ setProgress, setName, setEmail, setNumber }}
            />
          </Route>
        </BrowserRouter>
      </div>
    </main>
  );
};

interface IHomeProps {}

export default Home;
