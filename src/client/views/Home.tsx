import * as React from "react";
import DashboardGraph from "../components/DashboardGraph";
import TotalGraphic from "../components/TotalGraphic";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container mb-5">
      <h1 className="text-light text-center p-2 border-bottom border-primary">TrueCoders Dashboard</h1>
      <TotalGraphic />
      <DashboardGraph />
    </main>
  );
};

interface IHomeProps {}

export default Home;
