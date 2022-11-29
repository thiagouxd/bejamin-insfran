import { ReactNode } from "react";
import s from "./styles.module.scss";

type TitleProps = {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4";
};

const Title = ({ children, tag = "h1" }: TitleProps) => {
  const CustomTag = tag;
  return <CustomTag className={s.title}>{children}</CustomTag>;
};

export default Title;
