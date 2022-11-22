import Image from "next/image";
import logos from "../../assets/hero/logos.png";
import logo from "../../assets/hero/logo.png";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <>
      <section id="home">
        <div className={styles.hero}>
          <div className={styles.logos_wrapper} data-aos="fade-down">
            <Image src={logos} alt="logos" className={styles.logos} />
          </div>
          <div className={styles.hero_content}>
            <div className={styles.hero_left} data-aos="fade-right">
              <div className={styles.date}>26</div>
              <div className={styles.date}>27</div>
              <div className={styles.divider}></div>
              <div className={styles.month}>NOV</div>
              <div className={styles.year}>2022</div>
            </div>
            <div className={styles.hero_center} data-aos="fade-up">
              <div className={styles.center_text}>PRESENTS</div>
              <div className={styles.logo}>
                <Image src={logo} alt="" className={styles.logo} />
              </div>
            </div>
            <div className={styles.hero_right} data-aos="fade-left">
              <div>
                <div className={styles.right_text}>BUY</div>
                <div className={styles.right_text}>TICKETS</div>
              </div>

              <div className={styles.divider_1}></div>
              <div>
                <div className={styles.right_text}>LEARN</div>
                <div className={styles.right_text}>MORE</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hero_mob}>
          <div className={styles.logos_wrapper_mob}>
            <Image src={logos} alt="logos" className={styles.logos_mob} />
          </div>
          <div className={styles.hero_content_mob}>
            <div className={styles.hero_center_mob}>
              <div className={styles.center_text}>PRESENTS</div>
              <div className={styles.logo_mob}>
                <Image src={logo} alt="" className={styles.logo_mob} />
              </div>
            </div>
            <div className={styles.hero_left_mob}>
              <div className={styles.date_mob}>26 | 27 - NOV 2022</div>
            </div>
            <div className={styles.hero_right_mob}>
              <div className={styles.tickets_mob}>BUY TICKETS</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
