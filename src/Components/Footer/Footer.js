import React from 'react';
import './Footer.css'
//import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../Resources/Images/Asset 1.svg'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();


    return (
        <div className='footer-main'>
            <div className='footer-layout'>
                <div className='footer-column1'>
                    <div className='logo-holder'>
                        <img src={logo} className='logo-foot' alt='the-logo'/>
                    </div>
                </div>
                <div className='footer-column1'>
                    <h2 className='fotter-h'>{t("services")}</h2>
                    <p className='storitev-footer-p'>&gt; {t("Elektroinštalacije")}</p>
                    <p className='storitev-footer-p'>&gt; {t("Razsvetljava")}</p>
                    <p className='storitev-footer-p'>&gt; {t("Toplotne črpalke")}</p>
                    <p className='storitev-footer-p'>&gt; {t("Sistemi pametne hiše")}</p>
                    <p className='storitev-footer-p'>&gt; {t("Strelovodi")}</p>

                </div>

                <div className='footer-column1'>
                    <h2 className='fotter-h'>{t("contact")}</h2>
                    <p className='storitev-footer-p'>&gt; 041 357 183</p>
                    <p className='storitev-footer-p'>&gt; info@elektro-elra.si</p>
                    <p className='storitev-footer-p'>&gt; Lipa 37, 9231 Beltinc</p>
                   

                </div>
                
            </div>
        </div>
    );
};

export default Footer;