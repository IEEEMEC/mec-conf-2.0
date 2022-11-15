import Image from "next/image";
import WorkshopCard from "./WorkshopCard";
import styles from "./Workshops.module.css";
import lefttop from "../../assets/workshops/lefttop.svg";
import leftbottom from "../../assets/workshops/leftbottom.svg";
import righttop from "../../assets/workshops/righttop.svg";
import rightcenter from "../../assets/workshops/rightcenter.svg";
import rightbottom from "../../assets/workshops/rightbottom.svg";
function Workshops() {
  return (
    <>
      <div className={styles.workshops_container}>
        
        <div className={styles.workshops}>
          WORKSHOPS & <span className={styles.workshops_1}>TUTORIALS</span>
        </div>
        <div className={styles.cards}>
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
          <WorkshopCard />
        </div>
        <Image src={lefttop} alt="" className={styles.lefttop} />
        <Image src={leftbottom} alt="" className={styles.leftbottom} />
        <Image src={righttop} alt="" className={styles.righttop} />
        <Image src={rightcenter} alt="" className={styles.rightcenter} />
        <Image src={rightbottom} alt="" className={styles.rightbottom} />
      </div>
    </>
  );
}
export default Workshops;
