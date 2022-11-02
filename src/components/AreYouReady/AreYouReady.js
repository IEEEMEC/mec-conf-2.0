import styles from "./AreYouReady.module.css";
import bottomleft from "../../assets/svg/bottom-left.svg";
import bottomright from "../../assets/svg/bottom-right.svg";
import centerright from "../../assets/svg/center-right.svg";
import center from "../../assets/svg/center.svg";
import topleft from "../../assets/svg/top-left.svg";
import topright from "../../assets/svg/top-right.svg";
import Image from "next/image";
function AreYouReady() {
  return (
    <>
      <div className={styles.areyouready}>
        <Image src={topleft} alt="" className={styles.topleft} />
        <Image src={topright} alt="" className={styles.topright} />
        <Image src={bottomleft} alt="" className={styles.bottomleft} />
        <Image src={bottomright} alt="" className={styles.bottomright} />

        <div className={styles.ready}>
          <div className={styles.heading}>ARE YOU READY ?</div>
          <div className={styles.content}>
            Get Early Access to
            <br />
            MEC.conf
          </div>

          <div className={styles.button}>Buy Tickets</div>
        </div>
        <Image src={centerright} alt="" className={styles.centerright} />
        <Image src={center} alt="" className={styles.center} />
      </div>
    </>
  );
}
export default AreYouReady;
