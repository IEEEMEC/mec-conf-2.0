import Image from "next/image";
import styles from "./Footer.module.css";
import logo from '../../assets/footer/logo.png';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.social_icons}> 
            <FaFacebook size={40} color="white"/>
            <FaInstagram size={40} color="white"/>
            <FaLinkedin size={40} color="white"/>
            <AiFillTwitterCircle size={40} color="white"/>
        </div>
        <Image src={logo} className={styles.logo} alt="" />
      </div>
    </>
  );
}
export default Footer;
