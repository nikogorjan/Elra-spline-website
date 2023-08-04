import React from 'react';
import './Hero.css'
import SplineAnimation from './Spline';
import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className='hero-main'>
            <div className='hero-layout'>
                <div className='hero-headers'>
                    <div className='hero-headers-content'>
                        <h1 className='hero-main-header'>{t("welcomeMessage")}</h1>
                        <p className='hero-main-subheader'>{t("subheader")}</p>
                        <button className='hero-main-button'>{t("services")}</button>
                    </div>
                </div>
                <div className='hero-spline'>
                    <SplineAnimation/>
                </div>
            </div>
        </div>
    );
};

export default Hero;