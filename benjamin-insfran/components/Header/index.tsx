import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import pages from "./pages.json";
import s from "./styles.module.scss";

const Header = () => {
  const router = useRouter();
  const [modalAsOpen, setModalAsOpen] = useState<boolean>(false);

  const activeLink = (path: string) => {
    return path === router.pathname && s.active;
  };

  const changePage = (newRoute: string) => {
    router.push(newRoute);
  };

  const openMenu = () => {
    setModalAsOpen(true);
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

      <button className={s.menuButton} onClick={() => openMenu()}>
        <Image
          src="/header/menu.svg"
          height={24}
          width={24}
          alt="Icon menu. Click to open."
          aria-hidden="true"
        />
      </button>

      {modalAsOpen && (
        <div className={s.modalMenu}>
          <button onClick={() => setModalAsOpen(false)}>✕</button>
          {pages.map((page) => {
            return (
              <button
                key={page.path}
                className={`${s.link} ${activeLink(page.path)}`}
                onClick={() => {
                  changePage(page.path);
                  setModalAsOpen(false);
                }}
              >
                {page.name}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Header;
