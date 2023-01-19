import Image from "next/image";
import Link from "next/link";
import Button from "components/Button";
import Paragraph from "components/Paragraph";
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
        <Card>MVP do Circuito Brasileiro de Vôlei de Praia Open de 2002</Card>
        <Card>
          Melhor Bloqueio do Circuito Brasileiro de Vôlei de Praia Open de 2002
        </Card>
        <Card>
          Melhor Ataque do Circuito Brasileiro de Vôlei de Praia Open de 2002
        </Card>
        <Card>MVP do Circuito Brasileiro de Vôlei de Praia Open de 2000</Card>
        <Card>
          Revelação do Circuito Brasileiro de Vôlei de Praia Open de 1999
        </Card>
      </ul>
    </section>
  );
};

export default Awards;
