import Image from "next/image";
import Link from "next/link";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";

const Hero = () => {
  return (
    <section>
      <div className={s.primaryContainer}>
        <Image
          src="/hero-logo.svg"
          alt="Logo Benjamin"
          height="130"
          width="498"
        />

        <div>
          <Title>Presentation Benjamin</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium aliquam fuga quisquam commodi? Amet consequuntur
            consequatur dolores nam natus ad magni quos non laborum! Fugit
            tempora ad quis earum hic.
          </Paragraph>
        </div>

        <Link href="/#ranking">
          <button>Ranking in values</button>
        </Link>
      </div>

      <div className={s.secondaryContainer}>
        <Image
          src="/hero/benjamin-home.png"
          alt="Benjaming Playing Volley Ball"
          className={s.benjaminPic}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
