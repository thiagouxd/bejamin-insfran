import Image from "next/image";
import s from "./styles.module.scss";

type Props = {
  name: string;
  gold?: number;
  silver?: number;
  bronze?: number;
  fivbValues: number;
  olympicPosition?: string;
  brazilian?: boolean;
};

type PropItem = { item: Props; number: number };

export const Card = ({ item, number }: PropItem) => {
  return (
    <li className={`${s.card} ${item.brazilian && s.highlight}`}>
      <span className={s.number}>{number}</span>
      <Image
        src={`/ranking/flag-${item.brazilian ? "br" : "usa"}.png`}
        alt="Flag Country"
        height={24}
        width={24}
        className={s.flag}
      />
      <div className={s.content}>
        <div>
          <h3>{item.name}</h3>
          <p className={s.medals}>
            {item.gold && `Gold: ${item.gold} `}
            {item.silver && `| Silver: ${item.silver} `}
            {item.bronze && `| Bronze: ${item.bronze}`}
          </p>
        </div>
        <div>
          {item.olympicPosition && (
            <p className={s.og}>
              <Image
                src="/ranking/og-logo.png"
                alt="Olympic Games Logo"
                height={16}
                width={33}
              />
              {item.olympicPosition}
            </p>
          )}
          <p className={s.values}>
            FIVB Values:<strong> ${item.fivbValues}</strong>
          </p>
        </div>
      </div>
    </li>
  );
};
