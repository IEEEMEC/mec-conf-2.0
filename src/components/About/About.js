import styles from './About.module.css'
import Image from 'next/image';
import down from '../../assets/about-image.jpg'
function About()
{
    return(
        <>
        <div className={styles.container}>
        <div className={styles.heading1}>ABOUT</div>
        <div className={styles.heading2}>MEC.CONF</div>
        <div className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <button className={styles.button}>BUY TICKETS</button>
        </div>
        </>
    );
}
export default About