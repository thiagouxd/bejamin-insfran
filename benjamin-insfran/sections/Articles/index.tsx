import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import s from "./style.module.scss";

const Articles = () => {
  return (
    <section>
      <div className={s.primaryContainer}>
        <Title tag="h3">Articles and Reports</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius
          libero non quam vulputate, ac tincidunt lectus cursus.
        </Paragraph>
        <Image width={100} height={100} src="" alt="photo" />
        <Link href="/articles">
          <Button>See all reports</Button>
        </Link>
      </div>
      <div className={s.secondaryContainer}>
        <ul className={s.reportList}>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Articles;
