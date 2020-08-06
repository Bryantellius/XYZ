import * as React from "react";
import BasicInfo from "../components/BasicInfo";
import ThankYou from "../components/ThankYou";
import DisplayLogo from "../components/DisplayLogo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GetStarted from "../components/GetStarted";

const Home: React.FC<IHomeProps> = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [cardName, setCardName] = React.useState<string>("");
  const [error, setError] = React.useState<string>("An Error has occurred.");
  const [classDate, setClassDate] = React.useState<string>(
    "Scrum Mastery Course"
  );

  return (
    <main className="container d-flex justify-content-center align-items-center">
      <div
        id="contentDiv"
        className="card justify-content-start align-items-center"
      >
        <DisplayLogo />
        <BrowserRouter>
          <Switch>
            <Route path="/signup">
              <GetStarted />
            </Route>
            <Route path="/payment_info">
              <BasicInfo
                status={{
                  name,
                  email,
                  cardName,
                  error,
                }}
                methods={{
                  setName,
                  setEmail,
                  setError,
                  setCardName,
                }}
              />
            </Route>
            <Route path="/signup_completed">
              <ThankYou name={name} classDate={classDate} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  );
};

interface IHomeProps {}

export default Home;
