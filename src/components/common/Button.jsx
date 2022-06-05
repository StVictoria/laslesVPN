import clsx from "clsx";
import "./Button.scss";

const Button = ({ isOutlined, text, onClick }) => (
  <button className={clsx("Button", { "Button-Outlined": isOutlined })} onClick={onClick}>
    {text}
  </button>
);

export default Button;