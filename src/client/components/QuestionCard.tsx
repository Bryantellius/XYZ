import * as React from "react";

const QuestionCard: React.FC<IQuestionCardProps> = (props) => {
  return (
    <div className="card my-3 p-2">
      <div className="card-title">Question {props.QuestionNumber}</div>
      <div className="card-body">
        <div className="card-text">
          <h4>{props.Question}</h4>
          <input type={props.answerType} />
        </div>
      </div>
    </div>
  );
};

interface IQuestionCardProps {
  QuestionNumber: number;
  Question: string;
  answerType: string;
}

export default QuestionCard;
