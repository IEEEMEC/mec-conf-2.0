import styles from './AreYouReady.module.css'
import Image from 'next/image'
import ellipse18 from '../../assets/svg/ready/ellipse18.svg'
import ellipse19 from '../../assets/svg/ready/ellipse19.svg'
import ellipse20 from '../../assets/svg/ready/ellipse20.svg'
import ellipse21 from '../../assets/svg/ready/ellipse21.svg'
import ellipse22 from '../../assets/svg/ready/ellipse22.svg'
function AreYouReady()
{
    return(
        <>
        <div className={styles.areyouready}>
            {/* <Image className={styles.ellipse18} src={ellipse18} alt="ellipse 18"/>
            <Image className={styles.ellipse19 }src={ellipse19} alt="ellipse 19" /> */}
            <div className={styles.ready}>
            <div className={styles.heading}>
            Are You Ready
            </div>
            <div className={styles.content}>
                Get Early Access to MEC.conf
            </div>

            <div className={styles.button}>
            Buy Tickets
            </div>
           

            </div>
        </div>
        </>
    );
}
export default AreYouReady