import "./Button.scss";
import { IButtonProps } from "../../types";

const Button = (props: IButtonProps) => {
  return (
    <button className="product-btn" onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
