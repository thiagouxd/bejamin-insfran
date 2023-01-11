import { ReactNode } from "react";
import Paragraph from "../../components/Paragraph";

type Props = { children: ReactNode };

export const Card = ({ children }: Props) => {
  return (
    <li>
      <Paragraph>{children}</Paragraph>
    </li>
  );
};
