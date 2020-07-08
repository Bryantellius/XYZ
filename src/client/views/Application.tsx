import * as React from "react";

const Application: React.FC<IApplicationProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Application Questions</h1>
    </main>
  );
};

interface IApplicationProps {}

export default Application;
