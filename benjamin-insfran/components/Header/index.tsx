import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import pages from "./pages";
import s from "./styles.module.scss";

const Header = () => {
  const router = useRouter();

  const activeLink = (path: string) => {
    return path === router.pathname && s.active;
  };

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <Link href="/" className={s.logo}>
          <Image src="/header-logo.svg" alt="Logo" width={131} height={34} />
        </Link>

        {pages.map((page) => {
          return (
            <Link
              key={page.path}
              className={`${s.link} ${activeLink(page.path)}`}
              href={page.path}
            >
              {page.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
