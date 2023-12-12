import './App.css';
import React, { useEffect} from "react";

import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import axios from "axios";

import deTranslation from "../src/Resources/Translations/de/translation.json";
import slTranslation from "../src/Resources/Translations/sl/translation.json";
import enTranslation from "../src/Resources/Translations/en/translation.json"; // Import your translation files

import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import Pages from './Pages';
import { HelmetProvider } from 'react-helmet-async';
import ContactPage from './Components/ContactPage/ContactPage';
import AboutUs from './Components/AboutUs/AboutUs';


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
    <HelmetProvider>
      <Router> {/* Wrap your entire app with Router */}
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
    </HelmetProvider>

    
  );
}

export default App;
