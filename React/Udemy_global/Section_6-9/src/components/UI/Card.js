import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  // Card component내부에서 정해진 class와 외부에서 받아온 props.className
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
