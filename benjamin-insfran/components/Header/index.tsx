import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <nav>
        <Link href="/" className={s.logo}>
          <Image src="/header-logo.svg" alt="Logo" width={200} height={100} />
        </Link>

        <Link className={s.link} href="podiums">
          Podiums
        </Link>
        <Link className={s.link} href="gallery">
          Photo Gallery
        </Link>
        <Link className={s.link} href="articles">
          Articles and Reports
        </Link>
      </nav>
    </header>
  );
};

export default Header;
