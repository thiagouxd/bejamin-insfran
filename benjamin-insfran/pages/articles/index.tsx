import Link from "next/link";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import data from "../../db/news.json";
import s from "./styles.module.scss";

const Articles = () => {
  return (
    <section className={s.section}>
      <Title>Articles and news</Title>

      <div className={s.cards}>
        {data
          .filter((item) => !item.international)
          .map((item, i) => {
            return (
              <div className={s.card} key={"article" + i}>
                <Title tag="h2">{item.title}</Title>
                <Paragraph>{item.text}</Paragraph>
                <Link className={s.link} target="_blank" href={item.link}>
                  Go to website
                </Link>
              </div>
            );
          })}
      </div>

      <Title>around the world</Title>

      <div className={s.cards} style={{ maxHeight: 2200 }}>
        {data
          .filter((item) => item.international)
          .map((item, i) => {
            return (
              <div className={s.card} key={"international" + i}>
                <Title tag="h2">{item.title}</Title>
                <Paragraph>{item.text}</Paragraph>
                <Link className={s.link} target="_blank" href={item.link}>
                  Go to website
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Articles;
