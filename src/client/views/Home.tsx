import * as React from "react";

const Home: React.FC<IHomeProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Welcome to the TrueCoders Application Page</h1>
    </main>
  );
};

interface IHomeProps {}

export default Home;