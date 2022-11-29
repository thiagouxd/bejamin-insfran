import { ReactNode } from "react";
import s from "./styles.module.scss";

type TitleProps = {
  children: ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4";
};

const Title = ({ children, tag = "h1" }: TitleProps) => {
  const CustomTag = tag;
  const sizeModifier = () => {
    if (tag === "h1") return s.large;
    if (tag === "h2") return s.medium;
    if (tag === "h3") return s.small;
    if (tag === "h4") return s.xsmall;
  };

  return (
    <CustomTag className={`${s.title} ${sizeModifier()}`}>{children}</CustomTag>
  );
};

export default Title;
