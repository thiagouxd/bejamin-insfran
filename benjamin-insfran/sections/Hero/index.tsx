import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";

const Hero = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.primaryContainer}>
          <Image
            src="/hero-logo.svg"
            alt="Logo Benjamin"
            height={130}
            width={300}
            className={s.logo}
          />

          <div className={s.text}>
            <Title>Who is Benjamin</Title>
            <Paragraph>
              Benjamin is one of the greatest beach volleyball players of all
              times. Born in Brazil, he played indoor volleyball in prominent
              clubs such as Banespa, Suzano and Chapecó until an injury took him
              to recover on the beach.
            </Paragraph>
            <Paragraph>
              Falling in love with the game, he stayed and played the Brazilian
              Beach Volleyball National Tournaments and the FIVB Beach
              Volleyball Tours for more than two decades, having competed for
              his country in the 2004 Olympic Games, in Athens.
            </Paragraph>
            <Paragraph>
              Benjamin currently lives with his family in Naperville, IL (USA),
              where he plans to continue his legacy by creating a volleyball
              club where he will train and coach the future generations of the
              sport.
            </Paragraph>

            <div className={s.contact}>
              <Title tag="h4">CONTACT</Title>

              <Link type="email" href="benjamin.insfran@gmail.com">
                benjamin.insfran@gmail.com
              </Link>
            </div>
          </div>

          <Link href="/#ranking">
            <Button>About</Button>
          </Link>
        </div>
        <div className={s.secondaryContainer}>
          <Image
            src="/hero/benjamin-home.png"
            alt="Benjaming Playing Volley Ball"
            className={s.benjaminPic}
            width={1096}
            height={774}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
