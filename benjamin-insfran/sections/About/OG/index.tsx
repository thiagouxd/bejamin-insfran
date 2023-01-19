import Image from "next/image";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import s from "./styles.module.scss";

const OG = () => {
  return (
    <section className={s.section}>
      <div className={s.primaryContainer}>
        <div className={s.content}>
          <div className={s.photoContainer}>
            <Image
              className={s.logo}
              src="/about/og/athens-logo.png"
              width={100}
              height={100}
              alt=""
            />
            <Image
              className={s.photo}
              src="/about/og/01.jpg"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className={s.textContainer}>
            <Image
              className={s.logo}
              src="/about/og/logo.png"
              width={100}
              height={100}
              alt=""
            />
            <Title tag="h2">Olympic games</Title>
            <Paragraph>
              Benjamin turned his dream into reality in 2004, when he and his
              partner Marcio Araújo qualified to be one of the two teams to
              represent Brazil in the Olympic Games, held in Athens. The team
              had a realistic chance of an Olympic medal, even gold.
            </Paragraph>
            <Paragraph>
              His dream, however, was interrupted by an unexpected dramatic 2x1
              loss (23x21, 19x21, 15x13) to the Swiss brothers Martin & Paul
              Laciga, whom Benjamin & Marcio had defeated so many times before.
            </Paragraph>
            <Paragraph>
              Benjamin said at the time: “[Inserir fala aqui] <br />
            </Paragraph>
            <Paragraph>
              Benjamin & Marcio finished 9th in the competition.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OG;
