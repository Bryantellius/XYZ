import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Admin from "./views/Admin";
import Navbar from "./components/Navbar";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
};

interface IAppProps {}

export default App;
