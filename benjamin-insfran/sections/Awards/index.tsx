import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { Card } from "./Card";
import s from "./styles.module.scss";

const Awards = () => {
  return (
    <section>
      <Title tag="h2">
        <Image
          src="/awards/awards.svg"
          alt="Icon Awards"
          width={64}
          height={80}
          aria-hidden="true"
        />
        Individual Awards
      </Title>
      <ul>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          incidunt nesciunt placeat.
        </Card>
      </ul>
    </section>
  );
};

export default Awards;
