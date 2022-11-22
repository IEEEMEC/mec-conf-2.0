import styles from "./Sponsors.module.css";
import Image from "next/image";
import sponsorImg from "../../assets/sponsors/sponsor.svg";
function Sponsors() {
  return (
    <>
    <section id="sponsors">
      <div className={styles.sponsors_container}>
        <div className={styles.heading} data-aos="fade-down">SPONSORS</div>
        <div className={styles.sponsors}>
          <div className={styles.img} data-aos="fade-left">
            <Image className={styles.img} src={sponsorImg} alt="" />
          </div>
          <div className={styles.img} data-aos="fade-right">
            <Image className={styles.img} src={sponsorImg} alt="" />
          </div>
          <div className={styles.img} data-aos="fade-left">
            <Image className={styles.img} src={sponsorImg} alt="" />
          </div>
          <div className={styles.img} data-aos="fade-right">
            <Image className={styles.img} src={sponsorImg} alt="" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default Sponsors;
