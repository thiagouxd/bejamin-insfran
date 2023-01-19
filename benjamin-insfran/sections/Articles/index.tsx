import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import s from "./styles.module.scss";
import data from "../../db/news.json";
import { Card } from "./Card";

const Articles = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.primaryContainer}>
          <Title tag="h3">Articles and News</Title>
          <Paragraph>
            Compilation of some articles and news in which Benjamin`s work is
            cited during his 20+ years of professional athletic career.
          </Paragraph>

          <Image width={576} height={640} src="/articles.jpg" alt="photo" />
        </div>

        <div className={s.secondaryContainer}>
          <ul className={s.newsList}>
            {data.slice(0, 3).map((item, i) => {
              return <Card key={"news" + i} item={item} />;
            })}
          </ul>
        </div>
      </div>
      <Link href="/articles" className={s.button}>
        <Button secondary>See all news</Button>
      </Link>
    </section>
  );
};

export default Articles;
