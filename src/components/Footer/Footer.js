import Image from "next/image";
import styles from "./Footer.module.css";
import logo from '../../assets/footer/logo.png';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.social_icons} data-aos="fade-up"> 
            <FaFacebook size={40} color="white" cursor={"pointer"}/>
            <FaInstagram size={40} color="white" cursor={"pointer"}/>
            <FaLinkedin size={40} color="white" cursor={"pointer"}/>
            <AiFillTwitterCircle size={40} color="white" cursor={"pointer"}/>
        </div>
        <Image src={logo} className={styles.logo} alt="" data-aos="zoom-in-up" />
      </div>
    </>
  );
}
export default Footer;
