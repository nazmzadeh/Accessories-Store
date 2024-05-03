import React from "react";
import "./Title.scss";
import { ITitleProps } from "../../types";

const Title = (props: ITitleProps) => {
  return (
    <div className="section-title">
      <h2>{props.text}</h2>
    </div>
  );
};

export default Title;
