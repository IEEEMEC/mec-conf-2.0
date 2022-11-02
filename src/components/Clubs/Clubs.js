import styles from "./Clubs.module.css";
import { data } from "../../data/clubData";
import bg from "../../assets/clubs/Group_9.svg";
import Card from "./Card";
export default function Clubs() {
  return (
    <div className={styles.clubs}>
      <div
        className={styles.styling}
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <p className={styles.Par}>Clubs</p>
      <div className={styles.clubCards}>
        {data.map((x, id) => (
          <Card icons={x.url} content={x.content} key={id} />
        ))}
      </div>
    </div>
  );
}
