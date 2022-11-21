import Image from "next/image";
import styles from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={styles.box} data-aos="fade-up">
      <div className={styles.rowElement1}>
        <div className={styles.iconBox}>
          <Image
            src={props.icons}
            className={styles.icons}
            width={87.85}
            height={58.25}
            alt=""
          />
        </div>
      </div>

      <p className={styles.content}>{props.content}</p>
    </div>
  );
}
