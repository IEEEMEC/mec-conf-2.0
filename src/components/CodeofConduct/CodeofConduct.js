import styles from "./CodeofConduct.module.css";
import Image from "next/image";
import down from "../../assets/codeofconduct/download.svg";
function CodeOfConduct() {
  return (
    <>
    <section id="codeofconduct">
      <div className={styles.codeofconduct_container}>
        <div className={styles.heading} data-aos="fade-down"> CODE OF CONDUCT</div>
        <div className={styles.code} data-aos="fade-up">
          <div>Download Code of Conduct for MEC.conf</div>
          <div className={styles.img}>
            <Image src={down} alt="download image" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default CodeOfConduct;
