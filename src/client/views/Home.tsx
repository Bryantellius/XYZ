import * as React from "react";
import DashboardGraph from "../components/DashboardGraph";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-dark text-center p-2 border-bottom border-primary">TrueCoders Dashboard</h1>
      <DashboardGraph />
    </main>
  );
};

interface IHomeProps {}

export default Home;
