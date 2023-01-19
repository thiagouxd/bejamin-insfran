import Link from "next/link";
import { ReactNode } from "react";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import s from "./styles.module.scss";

type Props = { item: { text: string; title: string; link: string } };

export const Card = ({ item }: Props) => {
  return (
    <li className={s.card}>
      <div className={s.header}>
        <Title tag="h3">{item.title}</Title>
        <Link href={item.link}>Link</Link>
      </div>

      <Paragraph>{item.text}</Paragraph>
    </li>
  );
};
