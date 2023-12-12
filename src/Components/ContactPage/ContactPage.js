import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ContactComponent from './Components/ContactComponent'

const ContactPage = () => {
  return (
    <div>
      <>
        <Helmet>
          <title>Kontakt</title>
          <link rel='canonical' href='/contact'></link>
          <meta name='description' content="Kontaktieren Sie Elektro Elra für erstklassigen Service. Wir stehen Ihnen für alle Fragen zu Elektroinstallationen, Beleuchtung, Wärmepumpen und Smart-Home gerne zur Verfügung."></meta>
        </Helmet>
        <Navbar />

        <ContactComponent/>

        <Footer />
        {/*<div className="test" style={{ height: '100vh' }}></div>*/}
      </>
    </div>
  )
}

export default ContactPage
