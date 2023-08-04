import React from 'react';
import './Hero.css'
import SplineAnimation from './Spline';

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-layout'>
                <div className='hero-headers'>
                    <div className='hero-headers-content'>
                        <h1 className='hero-main-header'>Naše storitve vas bodo razsvetlile!</h1>
                        <p className='hero-main-subheader'>Bogate izkušnje in strokovnost za vrhunske električne rešitve.</p>
                        <button className='hero-main-button'>STORITVE</button>
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