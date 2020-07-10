import * as React from "react";

const DashboardGraph: React.FC<IDashboardGraphProps> = (props) => {
  return (
    <main className="container">
      <div className="row row-cols-2">
        <div className="card p-1">
          <div className="card-body">
            <div className="card-text">
              <h3>Daniel Walsh</h3>
              <h6 className="text-center">Calls</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-100"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h6 className="text-center">Closes</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-1">
          <div className="card-body">
            <div className="card-text">
              <h3>Amy Metcalf</h3>
              <h6 className="text-center">Calls</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h6 className="text-center">Closes</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-1">
          <div className="card-body">
            <div className="card-text">
              <h3>Celia Simpson</h3>
              <h6 className="text-center">Calls</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h6 className="text-center">Closes</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-1">
          <div className="card-body">
            <div className="card-text">
              <h3>Ben Bryant</h3>
              <h6 className="text-center">Calls</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-100"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h6 className="text-center">Closes</h6>
              <div className="progress my-2">
                <div
                  className="progress-bar w-25"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

interface IDashboardGraphProps {}

export default DashboardGraph;
