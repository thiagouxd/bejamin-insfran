import Title from "../../components/Title";
import s from "./styles.module.scss";

const Ranking = () => {
  return (
    <section>
      <Title tag="h2">Ranking in values</Title>
      <div className={s.graphicContainer}></div>
    </section>
  );
};

export default Ranking;
