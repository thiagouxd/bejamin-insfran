import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";
import data from "../../db/numbers.json";

const Podiums = () => {
  return (
    <section className={s.section}>
      <Title secondary tag="h2">
        Podiums and numbers
      </Title>

      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        incidunt nesciunt placeat.
      </Paragraph>

      <div className={s.numbersContainers}>
        {data.map((item, i) => {
          return (
            <div key={"number" + i}>
              <div>{item.number}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div>

      <Link href="/podiums">
        <Button secondary>See all podiums</Button>
      </Link>
    </section>
  );
};

export default Podiums;
