import Image from "next/image";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./styles.module.scss";

const About = () => {
  return (
    <section className={s.section}>
      <div className={s.about}>
        <div className={`${s.container} ${s.containerPrimary}`}>
          <div className={s.textContainer}>
            <Title>About</Title>

            <Paragraph>
              Benjamin was born in a small rural island close to the border of
              Brazil and Paraguay, his father was in the army and his mother a
              housewife with 6 children. Benjamin beat all odds and transformed
              his reality through volleyball.
            </Paragraph>

            <Paragraph>
              He left his parents home at 14 years of age, being drafted to play
              indoor volleyball at a team based on the capital of the state
              where he was born, Mato Grosso do Sul. He lived with other boys at
              the campus of the club, 150 miles away from home. With his
              outstanding performance, Benjamin was soon drafted by bigger teams
              in other states of the country and became a professional player at
              the age of 18.
            </Paragraph>

            <Paragraph>
              Through indoor volleyball, Benjamin traveled all corners of
              Brazil. His career was catapulting until a serious injury in 1995
              took him out of the courts. He heard from doctors at the time he
              would never be able to play at a professional level again.
            </Paragraph>

            <Paragraph>
              Once again Benjamin beat all odds. He was determined to heal and
              for more than a year he diligently exercised on the beach, where
              the impact on his body would be lower. This is when he was
              introduced to beach volleyball and fell in love with the game.
            </Paragraph>
          </div>
          <Image
            className={s.image}
            src="/about/about1.jpg"
            width={300}
            height={300}
            alt="Benjamin Picture"
          />
        </div>
      </div>

      <div className={`${s.container} ${s.containerSecondary}`}>
        <Image
          className={s.image}
          src="/about/about2.jpg"
          width={300}
          height={300}
          alt="Benjamin Picture"
        />
        <div className={s.textContainer}>
          <Paragraph>
            In 1999, already with Marcio Araújo as his partner, Benjamin was
            chosen “Rookie of the Year”, finishing 4th in the Brazilian National
            Tour. In 2000, they were Brazilian National Champions and in 2000
            and 2002 Benjamin was elected MVP of the Brazilian National Tour,
            which at the time included names such as Ricardo Santos and Emanuel
            Rego. In 2001, 2002 and 2003, Benjamin & Marcio finished second in
            the Brazilian National Tour. Benjamin was also awarded Best Spiker
            and Best Blocker of the Tour in 2002.
          </Paragraph>

          <Paragraph>
            Benjamin & Marcio were the first team from Brazil to qualify for the
            2004 Olympic Games in Athens, where they finished 9th after a
            disappointing defeat to the Swiss team Martin & Paul Laciga.
          </Paragraph>

          <Paragraph>
            Benjamin continued his international beach volleyball career playing
            in every continent of the world and bringing victories and pride to
            his home country, Brazil. He played the FIVB Beach Volleyball Tours
            for impressive 13 years, with a total of 66 podiums and more than
            USD1.4M in international prizes, including a silver medal at the
            FIVB Beach Volleyball World Tours of 2002 and 2003, and a bronze
            medal at the FIVB World Beach Volleyball Championships of 2003
            (World Cup).
          </Paragraph>

          <Paragraph>
            Benjamin is father of 5 children, and currently lives with his wife
            Mariana and stepson Bruno in Naperville, IL.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default About;
