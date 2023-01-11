import Image from "next/image";
import Title from "../../components/Title";
import s from "./styles.module.scss";
import data from "../../db/podiums.json";

const medalType: any = (position: number) => {
  if (position === 1) return "/podiums/medals/gold.png";
  if (position === 2) return "/podiums/medals/silver.png";
  if (position === 3) return "/podiums/medals/bronze.png";
};

const Podiums = () => {
  return (
    <section className={s.section}>
      <Title>International Podiums</Title>

      <div className={s.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Year</th>
              <th>Date</th>
              <th>Type</th>
              <th>Tournament</th>
              <th>Partiners</th>
            </tr>
          </thead>

          {/* "line": 28,
    "season": 2011,
    "date": "August 17",
    "type": "Open",
    "tournament": "Aland (FI)",
    "partners": "Marcio Araujo",
    "points": 300,
    "rank": 1,
    "money": 30000 */}

          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={"podium" + i}>
                  <td>
                    {item.rank <= 3 && (
                      <Image
                        className={s.icon}
                        width={24}
                        height={25}
                        src={medalType(item.rank)}
                        alt="Gold Medal"
                      />
                    )}
                    {item.rank}
                  </td>
                  <td>{item.season}</td>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.tournament}</td>
                  <td>{item.partners}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Podiums;
