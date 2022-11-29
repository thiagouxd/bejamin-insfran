import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./style.module.scss";

const NextSteps = () => {
  return (
    <section className={s.section}>
      <div className={s.primaryContainer}>
        <Title tag="h3">Next career steps</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          libero non quam vulputate, ac tincidunt lectus cursus. Cras iaculis et
          nisi at euismod. Sed sagittis turpis dui, eu tincidunt est euismod at.
          Praesent eget sapien sagittis.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          libero non quam vulputate, ac tincidunt lectus cursus. Cras iaculis et
          nisi at euismod. Sed sagittis turpis dui, eu tincidunt est euismod at.
          Praesent eget sapien sagittis.
        </Paragraph>
      </div>

      <div className={s.contact}>
        <Title tag="h3">Contact</Title>
        <a>+1 212-353-1246</a>
        <a>benjamin.insfran@gmail.com</a>
        <a>@benjamin.insfran</a>
      </div>
    </section>
  );
};

export default NextSteps;
