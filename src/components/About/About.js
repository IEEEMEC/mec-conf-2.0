import styles from "./About.module.css";
import Image from "next/image";
import down from "../../assets/about/about-image.jpg";
import React,{useState,useEffect} from "react";
function About() {
  const [width, setWidth] = useState(0);
  useEffect(()=>{
    addEventListener("resize", ()=>(setWidth(window.innerWidth)));
  })
  useEffect(()=>{
    setWidth(window.innerWidth);
  })
  return (
    <>
    <section id="about">
      <div className={styles.container}>
        <div className={styles.left_flex} data-aos={width>900 ? "fade-right" : "fade-up"}>
          <div className={styles.heading}>
            ABOUT <span className={styles.heading_1}>MEC.CONF</span>
          </div>
          <div className={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className={styles.buy_btn} data-aos={width>600 ? "" : "fade-up"}>
            BUY
            <div className={styles.break}><br/></div>
            <div className={styles.space}> </div>
            TICKETS
          </div>
        </div>
        <div className={styles.right_flex} data-aos={width>900 ? "fade-left" : "fade-up"}>
          <div className={styles.img_wrapper}>
            <Image src={down} alt="" className={styles.img} />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default About;
