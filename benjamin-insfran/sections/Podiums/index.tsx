import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";

const Podiums = () => {
  return (
    <section>
      <Title tag="h2">Podiums and numbers</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        incidunt nesciunt placeat.
      </Paragraph>
      <div className={s.numbersContainers}></div>
      <Link href="/podiums">
        <Button>See all podiums</Button>
      </Link>
    </section>
  );
};

export default Podiums;
