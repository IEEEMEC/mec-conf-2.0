import styles from "./CodeofConduct.module.css";
import Image from "next/image";
import down from "../../assets/codeofconduct/download.svg";
function CodeOfConduct() {
  return (
    <>
      <div className={styles.codeofconduct_container}>
        <div className={styles.heading}> CODE OF CONDUCT</div>
        <div className={styles.code}>
          <div>Download Code of Conduct for MEC.conf</div>
          <div className={styles.img}>
            <Image src={down} alt="download image" />
          </div>
        </div>
      </div>
    </>
  );
}
export default CodeOfConduct;
