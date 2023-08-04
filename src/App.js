import './App.css';
import React, { useEffect, useState } from "react";
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import axios from "axios";

import deTranslation from "../src/Resources/Translations/de/translation.json";
import slTranslation from "../src/Resources/Translations/sl/translation.json";
import enTranslation from "../src/Resources/Translations/en/translation.json"; // Import your translation files
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    de: { translation: deTranslation },
    sl: { translation: slTranslation },
  },
  fallbackLng: "sl", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const [isSplineLoading, setIsSplineLoading] = useState(false);

    const handleSplineLoaded = () => {
        setIsSplineLoading(true);
    };


  useEffect(() => {
    axios
      .get("https://ipinfo.io")
      .then((response) => {
        const userLocation = response.data.country;
        const defaultLanguage = userLocation === "SI" ? "sl" : "de";

        i18n.changeLanguage(defaultLanguage); // Change language here
      })
      .catch((error) => {
        console.error("Error fetching user's location:", error);
      });
  }, []);

  return (

    <div>
      <Navbar/>
      <Hero onSplineLoaded={handleSplineLoaded}/>
      <Services/>
      {!isSplineLoading && <LoadingScreen />}
    </div>
  );
}

export default App;
