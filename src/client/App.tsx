import * as React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";

const App: React.FC<IAppProps> = () => {
  return (
    <Home />
  );
};

interface IAppProps {}

export default App;
