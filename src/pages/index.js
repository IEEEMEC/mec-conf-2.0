// import styles from '../styles/Home.module.css'

import About from "../components/About/About";
import AreYouReady from "../components/AreYouReady/AreYouReady";
import Clubs from "../components/Clubs/Clubs";
import CodeOfConduct from "../components/CodeofConduct/CodeofConduct";
import Contact from "../components/Contact/Contact";
import Devsprints from "../components/Devsprints/Devsprints";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Speakers from "../components/Speakers/Speakers";
import Sponsors from "../components/Sponsors/Sponsors";
import Timeline from "../components/Timeline/Timeline";
import Workshops from "../components/Workshops/Workshops";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Workshops />
      <CodeOfConduct />
      <AreYouReady />
      <Sponsors />
      <Devsprints />
      <Timeline />
      <Clubs />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
