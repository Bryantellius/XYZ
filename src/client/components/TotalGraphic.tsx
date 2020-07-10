import * as React from "react";
import Chart from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Total", "Goal"],
  datasets: [
    {
      label: "Weekly",
      backgroundColor: ["#B21F00", "#ffffff"],
      hoverBackgroundColor: ["#501800", "#444444"],
      borderColor: "#444444",
      data: [17, 26 - 17],
    },
  ],
};

const state2 = {
  labels: ["Total", "Goal"],
  datasets: [
    {
      label: "Total",
      backgroundColor: ["#B21F00", "#ffffff"],
      hoverBackgroundColor: ["#501800", "#444444"],
      borderColor: "#444444",
      data: [163, 300 - 163],
    },
  ],
};

const TotalGraphic: React.FC<ITotalGraphicProps> = () => {
  return (
    <main className="my-3">
      <h3 className="text-light text-center">Sales Goal</h3>
      <div className="card d-flex justify-content-center align-items-center ">
        <div className="card-body d-flex justify-content-center align-items-center">
          <div>
            <Doughnut
              data={state}
              options={{ responsive: true, maintainAspectRatio: true }}
            />
          </div>
          <div>
            <Doughnut
              data={state2}
              options={{ responsive: true, maintainAspectRatio: true }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

interface ITotalGraphicProps {}

export default TotalGraphic;
