import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

interface IAppProps {}

export default App;
