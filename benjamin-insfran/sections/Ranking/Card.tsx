import Image from "next/image";

type Props = {
  name: string;
  gold?: number;
  silver?: number;
  bronze?: number;
  fivbValues: number;
  olympicPosition?: string;
  brazilian?: boolean;
};

type PropItem = { item: Props };

export const Card = ({ item }: PropItem) => {
  return (
    <li>
      <span>1</span>
      <Image
        src={`/ranking/flag-${item.brazilian ? "br" : "usa"}.png`}
        alt="Flag Country"
        height={24}
        width={24}
      />
      <div>
        <h3>{item.name}</h3>
        <p>
          {item.gold && `Gold: ${item.gold} `}
          {item.silver && `| Silver: ${item.silver} `}
          {item.bronze && `| Bronze: ${item.bronze}`}
        </p>
      </div>
      <div>
        {item.olympicPosition && (
          <div>
            <Image
              src="/ranking/og-logo.png"
              alt="Olympic Games Logo"
              height={16}
              width={33}
            />
            {item.olympicPosition}
          </div>
        )}
        <p>FIVB Values: $2,686,800</p>
      </div>
    </li>
  );
};
