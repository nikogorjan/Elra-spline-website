import React, { useState, useEffect } from "react";
import './Navbar.css'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import SlovenianFlag from '../../Resources/Images/slovenia.png';
import GermanFlag from '../../Resources/Images/germany.png';
import Logo from '../../Resources/Images/Asset 1.svg'

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isFlagOpen, setFlagOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleFlagToggle = () => {
        setFlagOpen(!isFlagOpen);
    };

    const handleFlagChange = (language) => {
        i18n.changeLanguage(language);
        setFlagOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Close the menu if it's open and the click is outside of the menu
            if (isMenuOpen && !event.target.closest(".navbar-menu-link")) {
                setMenuOpen(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("click", handleOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen]);

    const handleDomClick = () => {
        navigate('/');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <div className='navbar-main'>
            <div className='navbar-layout'>
                <div className='navbar-company-name' onClick={handleDomClick}>
                    <img src={Logo} alt="thesvg" className="logo-img" />
                </div>
                <div className='navbar-company-service'>{t("elin")}</div>
                <div className='navbar-navigation-links'>


                    <div className='navbar-link' onClick={handleDomClick}>
                        <a className="flip-animate" target="_blank">
                            <span data-hover={t("dom")}>{t("dom")}</span>
                        </a>
                    </div>

                    <div className='navbar-link' >
                        <a className="flip-animate" target="_blank">
                            <span data-hover={t("services")}>{t("services")}</span>
                        </a>
                    </div>

                    <div className='navbar-link' onClick={handleAboutClick}>
                        <a className="flip-animate" target="_blank">
                            <span data-hover={t("aboutUs")}>{t("aboutUs")}</span>
                        </a>
                    </div>
                    <div className='navbar-link green-link' onClick={handleContactClick}>
                        <a className="flip-animate2 contact-animate" target="_blank">
                            <span data-hover={t("contact")}>{t("contact")}</span>
                        </a>
                    </div>

                    <div
                        className={`navbar-link flag-link ${isFlagOpen ? "open" : ""}`}
                        onClick={handleFlagToggle}
                    >
                        <div className='flag-circle'>
                            <img src={i18n.language === 'sl' ? SlovenianFlag : GermanFlag} alt='Flag' />
                        </div>
                        <div className='flag-dropdown'>
                            <div
                                className={`flag-option ${i18n.language === 'sl' ? "active" : ""}`}
                                onClick={() => handleFlagChange('sl')}
                            >
                                <img src={SlovenianFlag} alt='Slovenian Flag' />
                            </div>
                            <div
                                className={`flag-option ${i18n.language === 'de' ? "active" : ""}`}
                                onClick={() => handleFlagChange('de')}
                            >
                                <img src={GermanFlag} alt='German Flag' />
                            </div>
                        </div>
                    </div>

                    <div className='navbar-menu-link'>
                        <div
                            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                            onClick={handleMenuToggle}
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        <div className={`menu ${isMenuOpen ? "open" : ""}`}>

                            <div>
                                <div className='navbar-link-open' onClick={handleDomClick}>{t("dom")}</div>
                                <div className='navbar-link-open'>{t("services")}</div>
                                <div className='navbar-link-open' onClick={handleAboutClick}>{t("aboutUs")}</div>

                                <div className='navbar-link-open green-link ' onClick={handleContactClick}>{t("contact")}</div>

                                <div
                                    className={`navbar-link-open flag-margin flag-link ${isFlagOpen ? "open" : ""}`}
                                    onClick={handleFlagToggle}
                                >
                                    <div className='flag-circle'>
                                        <img src={i18n.language === 'sl' ? SlovenianFlag : GermanFlag} alt='Flag' />
                                    </div>
                                    <div className='flag-dropdown'>
                                        <div
                                            className={`flag-option ${i18n.language === 'sl' ? "active" : ""}`}
                                            onClick={() => handleFlagChange('sl')}
                                        >
                                            <img src={SlovenianFlag} alt='Slovenian Flag' />
                                        </div>
                                        <div
                                            className={`flag-option ${i18n.language === 'de' ? "active" : ""}`}
                                            onClick={() => handleFlagChange('de')}
                                        >
                                            <img src={GermanFlag} alt='German Flag' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;