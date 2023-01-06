import Image from "next/image";

type PropsList =
  | "olympicPosition"
  | "gold"
  | "silver"
  | "bronze"
  | "fivbValues";

type Props = Record<PropsList, number> & { name: string; brazilian?: boolean };

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
        <h3>Philip Dalhausser</h3>
        <p>Gold: 3 | Silver: 2 | Bronze: 1</p>
      </div>
      <div>
        <div>
          <Image
            src="/ranking/og-logo.png"
            alt="Olympic Games Logo"
            height={16}
            width={33}
          />
          Atena - 3º
        </div>
        <p>FIVB Values: $2,686,800</p>
      </div>
    </li>
  );
};
