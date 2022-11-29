import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const Podiums = () => {
  return (
    <>
      <Title>International Podiums</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ab fugiat
        ut ipsam quidem, voluptate vel laborum a repudiandae rerum laboriosam
        eos itaque excepturi laudantium velit. Dignissimos quis accusamus
        distinctio.
      </Paragraph>

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

        <tbody>
          <tr>
            <td>1</td>
            <td>2012</td>
            <td>August 17</td>
            <td>Open</td>
            <td>Stare Jablonki</td>
            <td>Santos</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Podiums;
