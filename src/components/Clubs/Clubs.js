import styles from "./Clubs.module.css";
import { data } from "../../data/clubData";
import bottomleft from "../../assets/clubs/bottomleft.svg";
import bottomright from "../../assets/clubs/bottomright.svg";
import centerleft from "../../assets/clubs/centerleft.svg";
import centerright from "../../assets/clubs/centerright.svg";
import topleft from "../../assets/clubs/topleft.svg";
import topright from "../../assets/clubs/topright.svg";
import Card from "./Card";
import Image from "next/image";
export default function Clubs() {
  return (
    <>
    <section id="clubs">
    <div className={styles.clubs}>
      <div
        className={styles.styling}
      >
         <Image src={topleft} alt="" className={styles.topleft} />
        <Image src={topright} alt="" className={styles.topright} />
        <Image src={bottomleft} alt="" className={styles.bottomleft} />
        <Image src={bottomright} alt="" className={styles.bottomright} />
        <Image src={centerright} alt="" className={styles.centerright} />
        <Image src={centerleft} alt="" className={styles.centerleft} />
      </div>
      <p className={styles.Par}>Clubs</p>
      <div className={styles.clubCards}>
        {data.map((x, id) => (
          <Card icons={x.url} content={x.content} key={id} />
        ))}
      </div>
    </div>
    </section>
    </>
  );
}
