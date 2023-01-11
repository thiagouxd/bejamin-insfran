import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./styles.module.scss";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
  secondary?: boolean;
} & ButtonElementProps;

const Button = ({ children, secondary, ...props }: ButtonProps) => {
  return (
    <button
      className={`${s.button} ${secondary && s.button_secondary}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
