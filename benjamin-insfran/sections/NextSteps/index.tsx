import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./style.module.scss";

const Contribution = () => {
  return (
    <section className={s.section}>
      <Title tag="h3">Contribution to sport</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
        libero non quam vulputate, ac tincidunt lectus cursus.
      </Paragraph>
      <div>
        {/* <img />
        <img />
        <img /> */}
      </div>
    </section>
  );
};

export default Contribution;
