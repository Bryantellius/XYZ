import * as React from "react";
import QuestionCard from "../components/QuestionCard";

const Application: React.FC<IApplicationProps> = () => {
  return (
    <main className="container my-5">
      <h1 className="text-primary text-center">Application Questions</h1>
      <QuestionCard
        QuestionNumber={1}
        Question={"First Name"}
        answerType={"text"}
      />
      <QuestionCard
        QuestionNumber={2}
        Question={"Last Name"}
        answerType={"text"}
      />
      <QuestionCard QuestionNumber={3} Question={"Age"} answerType={"number"} />
    </main>
  );
};

interface IApplicationProps {}

export default Application;
