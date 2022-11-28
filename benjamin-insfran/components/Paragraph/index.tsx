import { ReactNode } from "react";
import s from "./styles.module.scss";

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className={s.paragraph}>{children}</p>;
};

export default Paragraph;
