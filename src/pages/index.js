import React,{ useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
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
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
export default function Home() {
  useEffect(() => {
    AOS.init({offset: 120,delay: 0,duration: 1000});
  })
  return (
    <>
      <Head>
        <title>MEC Conf. 2.0</title>
      </Head>
      <div className={styles.landing}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Speakers />
      <Workshops />
      <CodeOfConduct />
      <AreYouReady />
      <Sponsors />
      {/* <Devsprints /> */}
      <Timeline />
      <Clubs />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
