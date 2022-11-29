import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./styled.module.scss";

type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = {
  children: ReactNode;
} & ButtonElementProps;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={s.button} type={"button"} {...props}>
      {children}
    </button>
  );
};

export default Button;
