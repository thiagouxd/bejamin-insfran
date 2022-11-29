import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";

const Awards = () => {
  return (
    <section>
      <Title tag="h2">Awards</Title>
      <Title tag="h3">Individal</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        incidunt nesciunt placeat.
      </Paragraph>
      <ul className={s.awardsList}></ul>
      <Link href="/podiums">
        <Button>See all podiums</Button>
      </Link>
    </section>
  );
};

export default Awards;
