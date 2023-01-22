import Image from "next/image";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import s from "./style.module.scss";

const NextSteps = () => {
  return (
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.primaryContainer}>
          <Title tag="h2">Next Career Steps</Title>

          <Paragraph>
            Benjamin and his family moved from Brazil to Naperville, IL, in
            March 2022, where they intend to settle. Benjamin was immediately
            captivated by the way people love the game of volleyball in the
            region, specially young teenagers.
          </Paragraph>

          <Paragraph>
            “Volleyball has taken me to all parts of the world, but I had never
            seen a complex with 70 side-to-side courts, all full of children
            playing”, says Benjamin. And he completes: “I am blown away, this is
            volleyball heaven.”
          </Paragraph>

          <Paragraph>
            Benjamin wants to add his experience and knowledge on both indoor
            and beach volleyball to reach children who want to develop and play
            the sport competitively. He is currently in the process of creating
            his own volleyball club, where he plans to offer training and
            coaching all year round.
          </Paragraph>
        </div>

        <Image
          className={s.image}
          width={500}
          height={700}
          src="/next-steps/photo.png"
          alt="Benjamin"
        />
      </div>
    </section>
  );
};

export default NextSteps;
