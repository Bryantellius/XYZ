import * as React from "react";
import Home from "./views/Home";

const App: React.FC<IAppProps> = () => {
  return (
    <Home />
  );
};

interface IAppProps {}

export default App;
