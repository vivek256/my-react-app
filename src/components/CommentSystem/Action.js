import React from "react";

const Action = ({ handleClick, type, className }) => {
  return (
    <span className={className} onClick={handleClick}>
      {type}
    </span>
  );
};

export default Action;
