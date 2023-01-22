import Image from "next/image";
import Title from "components/Title";
import { Card } from "./Card";
import s from "./styles.module.scss";

const Awards = () => {
  return (
    <section className={s.section}>
      <Title tag="h2">
        <div className={s.header}>
          <Image
            src="/awards/awards.svg"
            alt="Icon Awards"
            width={64}
            height={80}
            aria-hidden="true"
          />
          Individual Awards
        </div>
      </Title>

      <ul className={s.cards}>
        <Card>Rookie of the Year - 1999 - Brazilian Beach Volleyball</Card>
        <Card>
          Most Valuable Player (MVP) - 2000 - Brazilian Beach Volleyball
        </Card>
        <Card>Best Spiker - 2002 - Brazilian Beach Volleyball</Card>
        <Card>Best Blocker - 2002 - Brazilian Beach Volleyball</Card>
        <Card>
          Most Valuable Player (MVP) - 2002 - Brazilian Beach Volleyball
        </Card>
      </ul>
    </section>
  );
};

export default Awards;
