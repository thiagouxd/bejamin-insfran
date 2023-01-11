import { ReactNode } from "react";
import Paragraph from "../../components/Paragraph";
import s from "./styles.module.scss";

type Props = { children: ReactNode };

export const Card = ({ children }: Props) => {
  return <li className={s.card}>{children}</li>;
};
