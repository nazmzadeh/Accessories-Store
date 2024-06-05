import "./Button.scss";
import { IButtonProps } from "../../types";

const Button = (props: IButtonProps) => {
  return (
    <button className="product-btn">
      <a href="#">
        <span>{props.text}</span>
      </a>
    </button>
  );
};

export default Button;
