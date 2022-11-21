import styles from "./AreYouReady.module.css";
import bottomleft from "../../assets/areyouready/bottom-left.svg";
import bottomright from "../../assets/areyouready/bottom-right.svg";
import centerright from "../../assets/areyouready/center-right.svg";
import center from "../../assets/areyouready/center.svg";
import topleft from "../../assets/areyouready/top-left.svg";
import topright from "../../assets/areyouready/top-right.svg";
import Image from "next/image";
function AreYouReady() {
  return (
    <>
    <section id="registration">
      <div className={styles.areyouready}>
        <Image src={topleft} alt="" className={styles.topleft} />
        <Image src={topright} alt="" className={styles.topright} />
        <Image src={bottomleft} alt="" className={styles.bottomleft} />
        <Image src={bottomright} alt="" className={styles.bottomright} />

        <div className={styles.ready}>
          <div className={styles.heading} data-aos="fade-down">ARE YOU READY ?</div>
          <div className={styles.content} data-aos="zoom-in">
            Get Early Access to
            <br />
            MEC.conf
          </div>

          <div className={styles.button} data-aos="fade-up">Buy Tickets</div>
        </div>
        <Image src={centerright} alt="" className={styles.centerright} />
        <Image src={center} alt="" className={styles.center} />
      </div>
      </section>
    </>
  );
}
export default AreYouReady;
