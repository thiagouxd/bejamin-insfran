import Link from "next/link";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import data from "../../db/news.json";
import s from "./styles.module.scss";

const Articles = () => {
  return (
    <section className={s.section}>
      <Title>Articles and reports</Title>

      <div className={s.cards}>
        {data.map((item, i) => {
          return (
            <>
              <div className={s.card} key={"article" + i}>
                <Title tag="h2">{item.title}</Title>
                <Paragraph>{item.text}</Paragraph>
                <Link className={s.link} href={item.link}>
                  Go to report`s site
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Articles;
