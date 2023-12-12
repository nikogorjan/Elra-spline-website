import React, { useState } from "react";
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Tribulet from "./Components/Tribulet/Tribulet";
import Story from "./Components/Story/Story";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import Buildings from "./Components/Buildings/Buildings";
import Razlogi from "./Components/razlogi/Razlogi";
import Services from "./Components/Services/Services";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
import { Helmet } from 'react-helmet-async';

const Pages = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleVideoLoaded = ({ progress }) => {
    console.log('Video Loaded:', progress);

    if (progress === 100) {
      // If progress is 100, set isVideoLoaded to true after a delay
      setTimeout(() => {
        setIsVideoLoaded(true);
      }, 1000)
    }
  };

  return (
    <div>
      {isVideoLoaded === false && <LoadingScreen onVideoLoaded={handleVideoLoaded} />}

      <>
        <Helmet>
          <title>Elektro Elra</title>
          <link rel='canonical' href='/'></link>
          <meta name='description' content="Elektro Elra - Ihr Experte für Elektroinstallationen, Beleuchtung, Wärmepumpen, Blitzschutz und Smart-Home in Deutschland. Moderne Lösungen für Ihre Energieeffizienz."></meta>
        </Helmet>
        <Navbar />
        <Hero onVideoLoaded={handleVideoLoaded} />
        <Tribulet />
        <Story />
        <Buildings />
        <Razlogi />
        <Services />
        <FAQ />
        <Footer />
        {/*<div className="test" style={{ height: '100vh' }}></div>*/}
      </>
    </div>
  );
};

export default Pages;