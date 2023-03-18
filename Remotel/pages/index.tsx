import HomeSection from "../components/Hero/Kezdőlap/HomeSection";
import AboutUs from "../components/Hero/Rólunk/AboutUs";
import Contact from "../components/Hero/Kapcsolat/Contact";
import Fogyaszto from "../components/Hero/Fogyasztói vélemény/Fogyaszto";
import Services from "../components/Hero/Szolgáltatás/Services";
import Header from "../components/Navbar/Header";
import MobileHeader from "../components/Navbar/MobileHeader";
import Image from "next/image";
const Home = () => {
  return (
    <>
      {/* Mobilos Header */}
      <MobileHeader />
      <header className="relative">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/kezdolap.jpg"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        {/* Header */}
        <Header />
        {/* A kezdőlapi rész */}
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
    </>
  );
};
export default Home;
