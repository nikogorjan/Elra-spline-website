import React from 'react'
import './AboutUs.css'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const AboutUs = () => {
  return (
    <div>
      <Helmet>
          <title>Über uns</title>
          <link rel='canonical' href='/about'></link>
          <meta name='description' content="Erfahren Sie mehr über Elektro Elra – Ihr Experte für Elektroinstallationen, Beleuchtung, Wärmepumpen und Smart-Home-Lösungen. Entdecken Sie unser Fachwissen, Engagement und unser Streben nach erstklassigem Service."></meta>
        </Helmet>
        <Navbar />

        

        <Footer />
    </div>
  )
}

export default AboutUs
