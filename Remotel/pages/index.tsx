// import type { NextPage } from "next";
import HomeSection from "../components/Hero/Kezdőlap/HomeSection";
import AboutUs from "../components/Hero/Rólunk/AboutUs";
import Contact from "../components/Hero/Kapcsolat/Contact";
import Fogyaszto from "../components/Hero/Fogyasztói vélemény/Fogyaszto";
import Services from "../components/Hero/Szolgáltatás/Services";
import Header from "../components/Navbar/Header";
import MobileHeader from "../components/Navbar/MobileHeader";
import Head from "next/head";
import Image from "next/image";
const Home = () => {
  return (
    <>
      <Head>
        <title>Remotel takarítás</title>
        <meta name="title" content="Remotel takarítás" />
        <meta
          name="description"
          content="Remotel takarítás olcsón, airbnb-s lakások"
        />
        <link rel="icon" type="image/x-icon" href="/remotelfav.png" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="airbnb, takarítás" />
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Type" content="text/html;" />
        <meta name="viewport" content="initial-scale=1.0" />
        <meta name="language" content="English" />
      </Head>
      <>
        <MobileHeader />
        <header className="relative">
          <Image
            src="/kezdolap.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
          <Header />
          <HomeSection />
        </header>
        <main>
          {/* Szolgáltatásaink */}
          <Services />
          {/* Fogyasztói vélemények */}
          <Fogyaszto />
          {/* Rólunk */}
          <AboutUs />
          {/* Kapcsolat */}
          <Contact />
        </main>
        {/* <footer></footer> */}
      </>
    </>
  );
};

export default Home;
