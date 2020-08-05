import * as React from "react";

const ProgressBar: React.FC<IProgressBarProps> = (props: any) => {
  return (
    <div className="progress w-50">
      <div
        id="progressBar"
        className="progress-bar bg-success"
        role="progressbar"
        aria-valuenow={props.progress}
        aria-valuemin={0}
        aria-valuemax={100}
      ></div>
    </div>
  );
};

interface IProgressBarProps {
    progress: number;
}

export default ProgressBar;
