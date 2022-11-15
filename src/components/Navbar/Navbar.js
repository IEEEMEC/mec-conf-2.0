import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../../assets/navbar/logo.png";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
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
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
      <div className={colorChange ? styles.nav__mob_1 : styles.nav__mob}>
        <div className={styles.nav__mob_container}>
          <div className={styles.title}>MEC CONF. 2.0</div>
          <button className={styles.nav_btn} onClick={handleDrawerOpen}>
            <HiOutlineMenuAlt3 className={styles.hamburger} />
          </button>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={styles.nav__drawer}>
          <div className={styles.nav__drawer_header}>
            <div
              className={styles.title_mob}
              // data-aos="fade-right"
              // data-aos-duration="600"
            >
              MEC CONF. 2.0
            </div>
            <div
              className={styles.navbar_items_mob}
              // data-aos="fade-right"
              // data-aos-duration="600"
            >
              <Link
                to="home"
                onClick={() => {
                  setActive("home");
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={
                  active === "home"
                    ? styles.navbar_item_active
                    : styles.navbar_item
                }
              >
                HOME
              </Link>
              <Link
                to="about"
                onClick={() => {
                  setActive("about");
                  handleDrawerClose();
                }}
                className={
                  active === "about"
                    ? styles.navbar_item_active
                    : styles.navbar_item
                }
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                ABOUT
              </Link>
              <Link
                to="speakers"
                onClick={() => {
                  setActive("speakers");
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
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
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
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
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
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
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
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
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={
                  active === "faq"
                    ? styles.navbar_item_active
                    : styles.navbar_item
                }
              >
                FAQ
              </Link>
              <Link
                to="contact"
                onClick={() => {
                  setActive("contact");
                  handleDrawerClose();
                }}
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className={
                  active === "contact"
                    ? styles.navbar_item_active
                    : styles.navbar_item
                }
              >
                CONTACT
              </Link>
            </div>
          </div>
          <Link
            to="home"
            onClick={() => {
              setActive("home");
              handleDrawerClose();
            }}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Image
              src={logo}
              alt=""
              width={200}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </Drawer>
    </>
  );
}
export default Navbar;
