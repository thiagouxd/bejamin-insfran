import Paragraph from "components/Paragraph";
import Title from "components/Title";
import Image from "next/image";
import s from "./styles.module.scss";

const Letter = () => {
  return (
    <section className={s.section}>
      <div className={s.textContainer}>
        <Title>Márcio`s letter</Title>
        <Paragraph>
          I am Marcio Araujo, beach volleyball Olympic silver medalist in 2008,
          Beijing.
        </Paragraph>
        <Paragraph>
          Benjamin was my longest partner during my career as a beach volleyball
          professional player, we played for more than 6 years together.
        </Paragraph>
        <Paragraph>
          We started young, unknown and dreaming big, and have won dozens of
          tournaments together in Brazil and on the FIVB World Tour. We played
          together my first Olympic Games in 2004, Athens.
        </Paragraph>
        <Paragraph>
          Benjamin is one of the most complete players Brazil has ever produced,
          always with a differentiated reading and understanding of the game,
          studious, strategist, disciplined, talented and totally dedicated to
          his own improvement and improvement of his team.
        </Paragraph>
        <Paragraph>
          With his drive and attitude of a coach, Benjamin has helped not only
          me, but also other relevant names of the sport to develop themselves
          and achieve victory and stardom.
        </Paragraph>
        <Paragraph>
          If you want to evolve your volleyball skills, either indoor or on the
          beach, I guarantee you have come to the right place. Enjoy your
          practices!
        </Paragraph>
      </div>
      <div className={s.imagesContainer}>
        <Image
          className={s.medal}
          width={100}
          height={100}
          src="/about/letter/medal.png"
          alt="Benjamin Medal"
        />
        <div className={s.marcio}>
          <Image
            src="/about/letter/marcio.png"
            className={s.photo}
            width={144}
            height={144}
            alt="Marcio playing beach volley."
          />
          <div className={s.marcioSignature}>
            <Image
              className={s.signature}
              width={100}
              height={100}
              src="/about/letter/signature.png"
              alt="Marcio's Signature"
            />
            <p>Márcio Henrique Barroso Araújo </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
