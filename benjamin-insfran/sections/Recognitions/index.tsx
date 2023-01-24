import Paragraph from "components/Paragraph";
import Title from "components/Title";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import s from "./styles.module.scss";

const plaques = [
  {
    text: (
      <>
        <Paragraph>
          The Government of the State of Maranhão, by means of this Secretariat
          of Sports and Recreation (Sedel), honors the athlete Benjamin Insfran
          for all his contribution to the Brazilian volleyball.
        </Paragraph>
        <Paragraph>Hewerton Carlos Rodrigues Pereira</Paragraph>
        <Paragraph>State Secretary of Sports and Recreation</Paragraph>
      </>
    ),
    name: "04.png",
  },
  {
    text: (
      <>
        <Paragraph>
          The Municipal Chamber of Dourados grants Benjamin Insfran this homage
          for his excellent performance in the sports scenario. The Municipal
          Chamber of Dourados honors on this date the athletes who turn their
          efforts and work into a reason that makes us all proud.
        </Paragraph>
        <Paragraph>Humberto Teixeira Junior - President</Paragraph>
      </>
    ),
    name: "03.png",
  },
  {
    text: (
      <>
        <Paragraph>
          To Benjamin Insfran as recognition and jubilation for the personal
          projection achieved in the national scenario, carrying with him the
          name of our State, reason of pride to all of us.
        </Paragraph>

        <Paragraph>
          Board of the Volleyball Federation of Mato Grosso do Sul
        </Paragraph>
      </>
    ),

    name: "02.png",
  },
  {
    text: (
      <>
        <Paragraph>
          The Government of Mato Grosso do Sul and Fundesporte congratulate
          athlete Benjamin as recognition of the merits achieved.
        </Paragraph>
        <Paragraph>José Orcirio Miranda dos Santos</Paragraph>
        <Paragraph>Governor of the State of Mato Grosso do Sul</Paragraph>
      </>
    ),

    name: "01.png",
  },
];

const Recognitions = () => {
  return (
    <section className={s.section}>
      <div className={s.cbvLetter}>
        <Title>RECOGNITIONS</Title>
        <Title tag="h4">CBV RECOMMENDATION</Title>
        <Paragraph>Rio de Janeiro, November 04, 2022.</Paragraph>
        <Paragraph>
          Since 1954 and 1988, respectively, we have been the institution
          responsible for creating, developing, and managing the indoor and
          beach volleyball tournaments in Brazil.
        </Paragraph>
        <Paragraph>
          We attest that athlete Benjamin Insfran played the Brazilian Beach
          Volleyball National Tournaments from 1996 through 2018, being the
          National Champion in the year of 2000, and winning Second Place in the
          years of 2001, 2002 and 2003.
        </Paragraph>
        <Paragraph>
          Furthermore, we attest that athlete Benjamin Insfran was elected by
          this institution for the following individual awards:
        </Paragraph>
        <Paragraph>
          Rookie of the Year - 1999 - Brazilian Beach Volleyball National
          Tournament
        </Paragraph>
        <Paragraph>
          Most Valuable Player (MVP) - 2000 - Brazilian Beach Volleyball
          National Tournament
        </Paragraph>
        <Paragraph>
          Best Spiker - 2002 - Brazilian Beach Volleyball National Tournament
        </Paragraph>
        <Paragraph>
          Best Blocker - 2002 - Brazilian Beach Volleyball National Tournament
        </Paragraph>
        <Paragraph>
          Most Valuable Player (MVP) - 2002 - Brazilian Beach Volleyball
          National Tournament
        </Paragraph>
        <Paragraph>
          Benjamim represented Brazil in several international competitions on
          the FIVB Beach Volleyball Tours from 1999 through 2012, having won for
          Brazil 19 gold medals, 15 silver medals and 32 bronze medals in a
          total of 66 podiums on these international competitions.
        </Paragraph>
        <Paragraph>
          The double Marcio Araujo - Benjamin Insfran won the bronze medal at
          the FIVB World Beach Volleyball Championships of 2003 and the silver
          medal at the FIVB Beach Volleyball World Tours of 2002 and 2003.
        </Paragraph>
        <Paragraph>
          We further confirm that the double Marcio Araújo - Benjamin Insfran
          represented Brazil in the 2004 Summer Olympic Games in Athens, Greece,
          finishing in 9th place in that competition.
        </Paragraph>
        <Paragraph>
          Benjamin is one of the greatest beach volleyball players that Brazil
          ever produced, and one of the best in the world, having won more than
          1,000 matches in official beach volleyball competitions, and his great
          deeds and example of determination, fairplay and love for the game
          continue to inspire generations of youngsters who love the sport of
          beach volleyball in Brazil and abroad.
        </Paragraph>
        <Paragraph>
          Benjamin is a natural leader and has a great talent for developing and
          helping transform young players into professional athletes.
          <br />
          <br />
          Sincerely,
        </Paragraph>

        <div className={s.letterFooter}>
          <Image
            className={s.signature}
            src="/recognitions/signature.png"
            width={100}
            height={100}
            alt="Walter Pitombo's signature"
          />
          <Image
            className={s.logoCbv}
            src="/recognitions/logo.png"
            width={100}
            height={100}
            alt="CBV's logo"
          />
        </div>
      </div>

      <div className={s.plaques}>
        <PhotoProvider>
          {plaques.map((item, index) => (
            <div className={s.plaqueWrapper} key={"plaques" + index}>
              <PhotoView src={`/recognitions/homage-plaque/${item.name}`}>
                <Image
                  width={100}
                  height={100}
                  className={s.plaque}
                  src={`/recognitions/homage-plaque/${item.name}`}
                  alt=""
                />
              </PhotoView>

              <legend>{item.text}</legend>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Recognitions;
