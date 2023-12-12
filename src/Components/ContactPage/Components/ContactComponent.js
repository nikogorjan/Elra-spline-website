import React, { useState } from 'react'
import './ContactComponent.css'
import { useTranslation } from "react-i18next";
import hisa from '../../../Resources/Images/hisa2.webp'
import lokacija from '../../../Resources/Icons/location.webp'
import telefon from '../../../Resources/Icons/phone.webp'
import mail from '../../../Resources/Icons/mail2.png'

const ContactComponent = () => {
    const { t } = useTranslation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sporocilo, setSporocilo] = useState('');

    const [isTextbox1Active, setisTextbox1Active] = useState(false);
    const [isTextbox2Active, setisTextbox2Active] = useState(false);
    const [isTextbox3Active, setisTextbox3Active] = useState(false);
    const [isTextbox4Active, setisTextbox4Active] = useState(false);
    const [isTextbox5Active, setisTextbox5Active] = useState(false);

    

    return (
        <div className='contact-main'>
            <div className='contact-main-wrapper'>
                <div className='contact-left'>
                    <h1 className='contact-header'>{t("kontaktirajte")}</h1>
                    <div className='input-row'>
                        <div className='input-container'>
                            <label className={`input-label ${firstName !== '' ? 'is-populated' : ''} ${isTextbox1Active ? 'active' : ''}`} >
                                {t("IME")}
                            </label>
                            <input
                                type='text'
                                className='input-textbox textbox1'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                onFocus={() => setisTextbox1Active(true)}
                                onBlur={() => setisTextbox1Active(false)}
                            />
                        </div>
                        <div className='input-container'>
                            <label className={`input-label ${lastName !== '' ? 'is-populated' : ''} ${isTextbox2Active ? 'active' : ''}`} >
                                {t("PRIIMEK")}
                            </label>
                            <input
                                type='text'
                                className='input-textbox textbox2'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onFocus={() => setisTextbox2Active(true)}
                                onBlur={() => setisTextbox2Active(false)}
                            />
                        </div>
                    </div>

                    <div className='input-row'>
                        <div className='input-container'>
                            <label className={`input-label ${email !== '' ? 'is-populated' : ''} ${isTextbox3Active ? 'active' : ''}`} >
                                {t("EMAIL")}
                            </label>
                            <input
                                type='text'
                                className='input-textbox textbox3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setisTextbox3Active(true)}
                                onBlur={() => setisTextbox3Active(false)}
                            />
                        </div>
                        <div className='input-container'>
                            <label className={`input-label ${phone !== '' ? 'is-populated' : ''} ${isTextbox4Active ? 'active' : ''}`} >
                                {t("TELEFONSKA ŠTEVILKA")}
                            </label>
                            <input
                                type='text'
                                className='input-textbox textbox4'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                onFocus={() => setisTextbox4Active(true)}
                                onBlur={() => setisTextbox4Active(false)}
                            />
                        </div>
                    </div>
                    <div className='input-row2'>
                        <div className='input-container2'>
                            <label className={`input-label ${sporocilo !== '' ? 'is-populated' : ''} ${isTextbox5Active ? 'active' : ''}`}>
                                {t("SPOROČILO")}
                            </label>
                            <textarea
                                type='text'
                                className='input-textbox2 textbox5'
                                value={sporocilo}
                                onChange={(e) => setSporocilo(e.target.value)}
                                onFocus={() => setisTextbox5Active(true)}
                                onBlur={() => setisTextbox5Active(false)}
                            />
                        </div>
                    </div>

                    <div className='button-row'>
                        <button className='hero-main-button2'> {t("poslji")}</button>
                    </div>
                </div>
                <div className='contact-right'>
                    <img className='hisa-contact' alt='enlightened' src={hisa} />
                    <div className='info-div'>
                        <div className='contact-info-row'>
                            <div className='info-icon-wrapper'>
                                <img className='info-img' src={telefon} />
                            </div>
                            <p className='info-contact-paragraph'>041 357 183</p>
                        </div>
                        <div className='contact-info-row'>
                            <div className='info-icon-wrapper'>
                                <img className='info-img' src={mail} />
                            </div>
                            <p className='info-contact-paragraph'>info@elektro-elra.si</p>
                        </div>
                        <div className='contact-info-row'>
                            <div className='info-icon-wrapper'>
                                <img className='info-img' src={lokacija} />
                            </div>
                            <p className='info-contact-paragraph'>Lipa 37, 9231 Beltinc</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='contact-map'>
                <iframe
                    title='Location Map'
                    width='100%'
                    height='450'
                    loading='lazy'
                    allowFullScreen
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.848979118351!2d16.229479315782106!3d46.60130057912362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cf10b3f64cb9d%3A0x3f8c369d6cd4df0!2sLipa%2037%2C%209231%20Beltinci!5e0!3m2!1sen!2ssi!4v1641517484660!5m2!1sen!2ssi`}
                ></iframe>
            </div>
        </div>
    )
}

export default ContactComponent
