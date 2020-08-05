import * as React from "react";
import BasicInfo from "../components/BasicInfo";
import BillingInfo from "../components/BillingInfo";
import ThankYou from "../components/ThankYou";

const Home: React.FC<IHomeProps> = () => {
  const [progress, setProgress] = React.useState<number>(0);
  const [name, setName] = React.useState<string>("John Doe");
  const [email, setEmail] = React.useState<string>("");
  const [number, setNumber] = React.useState<number>(0);
  const [classDate, setClassDate] = React.useState<string>("August 17th Full-time");

  const displayInfo = () => {
    if (progress == 0) {
      return <BasicInfo status={progress} method={{setProgress, setName, setEmail, setNumber, setClassDate}} updateBar={changeProgressBar}/>;
    } else if (progress == 25) {
      return <BillingInfo status={progress} method={setProgress} updateBar={changeProgressBar}/>;
    } else if (progress == 50) {
      return <BasicInfo status={progress} method={setProgress} updateBar={changeProgressBar}/>;
    } else {
      return (
        <ThankYou
          name={name}
          classDate={classDate}
        />
      );
    }
  };

  const changeProgressBar = (num: number) => {
    document.getElementById("progressBar").style.width = num.toString() + "%";
  } 

  React.useEffect(() => {}, []);

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <div className="card row justify-content-center align-items-center">
        <img
          id="tcLogo"
          src="/assets/TrueCodersLogo.png"
          alt="TrueCoders Logo"
        />
        <div className="progress col-md-6 mx-auto p-0">
          <div
            id="progressBar"
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        {displayInfo()}
      </div>
    </main>
  );
};

interface IHomeProps {}

export default Home;
