import Link from "next/link";
import Button from "components/Button";
import Title from "components/Title";
import s from "./styles.module.scss";
import data from "../../db/numbers.json";

const Podiums = () => {
  return (
    <section className={s.section}>
      <Title secondary tag="h2">
        Podiums and numbers
      </Title>

      <div className={s.numbersContainers}>
        {data.map((item, i) => {
          return (
            <div
              className={s.card}
              key={"number" + i}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h3>{item.number}</h3>
              <p>{item.text}</p>
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
