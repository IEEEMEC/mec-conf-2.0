import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar/logo.png";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
function Navbar() {
  const [active, setActive] = useState("home");
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <>
      <div className={colorChange ? styles.navbar_offset : styles.navbar}>
        <Link
          to="home"
          onClick={() => {
            setActive("home");
          }}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={
            active === "home" ? styles.navbar_item_active : styles.navbar_item
          }
        >
          HOME
        </Link>
        <Link
          to="about"
          onClick={() => {
            setActive("about");
          }}
          className={
            active === "about" ? styles.navbar_item_active : styles.navbar_item
          }
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          ABOUT
        </Link>
        <Link
          to="speakers"
          onClick={() => {
            setActive("speakers");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "speakers"
              ? styles.navbar_item_active
              : styles.navbar_item
          }
        >
          SPEAKERS
        </Link>
        <Link
          to="codeofconduct"
          onClick={() => {
            setActive("codeofconduct");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "codeofconduct"
              ? styles.navbar_item_active
              : styles.navbar_item
          }
        >
          CODE OF CONDUCT
        </Link>
        <Link
          to="registration"
          onClick={() => {
            setActive("registration");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "registration"
              ? styles.navbar_item_active
              : styles.navbar_item
          }
        >
          REGISTRATION
        </Link>
        <Link
          to="sponsors"
          onClick={() => {
            setActive("sponsors");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "sponsors"
              ? styles.navbar_item_active
              : styles.navbar_item
          }
        >
          SPONSORS
        </Link>
        <Link
          to="faq"
          onClick={() => {
            setActive("faq");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "faq" ? styles.navbar_item_active : styles.navbar_item
          }
        >
          FAQ
        </Link>
        <Link
          to="contact"
          onClick={() => {
            setActive("contact");
          }}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={
            active === "contact"
              ? styles.navbar_item_active
              : styles.navbar_item
          }
        >
          CONTACT
        </Link>
        <Link
          to="home"
          onClick={() => {
            setActive("home");
          }}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Image src={logo} alt="" width={200} style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </>
  );
}
export default Navbar;
