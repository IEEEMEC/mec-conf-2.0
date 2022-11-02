import styles from "./About.module.css";
import Image from "next/image";
import down from "../../assets/about-image.jpg";
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading1}>
          ABOUT <span className={styles.heading2}>MEC CONF.</span>
        </div>
        <div className={styles.content}>
          <div className={styles.content_left}>
            <div className={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className={styles.button}>BUY<br/>TICKETS</div>
          </div>
          <div>
            <Image src={down} alt="conference-image" className={styles.img} />{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
