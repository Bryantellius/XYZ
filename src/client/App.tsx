import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Application from "./views/Application";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/application" component={Application} />
      </Switch>
    </BrowserRouter>
  );
};

interface IAppProps {}

export default App;
