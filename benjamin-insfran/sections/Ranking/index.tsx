import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { Card } from "./Card";
import s from "./styles.module.scss";
import data from "../../db/ranking-fivb.json";

const Ranking = () => {
  return (
    <section>
      <div>
        <Title tag="h2">FIVB Official Ranking</Title>
        <div>
          <Paragraph>
            The Volleyball International Federation - FIVB is the entity
            responsible for the regulation of all modalities of volleyball in
            the world. It keeps individualized public records of players of all
            nationalities who reach international relevance.
          </Paragraph>

          <Paragraph>
            To illustrate the magnitude of Benjamin`s achievements in his
            career, the chart below compiles and compares his FIVB records
            (prizes and podiums) to the records of the US beach volleyball most
            prominent players of his and younger generations.
          </Paragraph>
        </div>
      </div>

      <ul className={s.cardList}>
        {data.map((item) => {
          return <Card key={item.name} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Ranking;
