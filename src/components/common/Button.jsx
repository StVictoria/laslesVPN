import clsx from "clsx";
import "./Button.scss";

const Button = ({ isOutlined, text }) => (
  <button className={clsx("Button", { "Button-Outlined": isOutlined })}>
    {text}
  </button>
);

export default Button;