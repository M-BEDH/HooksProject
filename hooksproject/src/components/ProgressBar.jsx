import React from "react";

const ProgressBar = React.memo(function ProgressBar({ text, count, bgColor }) {

  const progress = { width: `${count}%`, backgroundColor: bgColor };
  return (
    <div>
      <p className="h1">{text} </p>
      <p>{count} %</p>
      <div className="progress">
        <div
          className={`progress-bar progress-bar-striped bg-${bgColor}`}
          role="progressbar"
          style={progress}
        ></div>
      </div>
      <p className="text-2xl font-bold mb-2">Pourcentage de progression</p>
    </div>
  );
});
export default ProgressBar;
