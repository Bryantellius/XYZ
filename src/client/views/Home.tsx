import * as React from "react";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container-fluid">
      <div id="homeBudsInfo">
        <div id="HBI">
          <div className="mb-5 h1">
            OnePlus Buds <br />
            Set your music free
          </div>
          <div className="h3">$79</div>
          <div>
            <button className="btn btn-outline-dark my-3">Buy Now</button>
          </div>
          <div>
            <a href="_blank" className="text-dark h5">
              Learn More >
            </a>
          </div>
        </div>
      </div>

      <div id="homeOnePlusEightInfo">
        <div id="HOPEI">
          <div className="mb-5 h1">
            OnePlus 8 <br />
            Lead with Speed
          </div>
          <div className="h3">$699 or $59/mo with 0% APR</div>
          <div>
            <button className="btn btn-outline-dark my-3">Buy Now</button>
          </div>
          <div>
            <a href="_blank" className="text-dark h5">
              Learn More >
            </a>
          </div>
        </div>
      </div>

      <div id="homeOnePlusEightProInfo">
        <div id="HOPEPI">
          <div className="mb-5 h1">
            OnePlus 8 Pro<br />
            Lead with Speed
          </div>
          <div className="h3">$899 or $39/mo with 0% APR</div>
          <div>
            <button className="btn btn-outline-dark my-3">Buy Now</button>
          </div>
          <div>
            <a href="_blank" className="text-dark h5">
              Learn More >
            </a>
          </div>
        </div>
      </div>

      
    </main>
  );
};

interface IHomeProps {}

export default Home;
