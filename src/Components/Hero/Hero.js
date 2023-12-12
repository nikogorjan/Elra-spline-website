import React, {  useEffect, useRef} from 'react';
import './Hero.css'
import { useTranslation } from "react-i18next";
import MainVideo from '../../Resources/Video/webm2.webm';
import MainVideoSafari from '../../Resources/Video/hevc2.mov';

const Hero = ({ onVideoLoaded }) => {
    const { t } = useTranslation();
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVideoLoaded = () => {
            if (videoRef.current) {
                // Get information about the loaded video
                const videoInfo = {
                    duration: videoRef.current.duration,
                    width: videoRef.current.videoWidth,
                    height: videoRef.current.videoHeight,
                    // Add any other information you need
                };

                // Send the information to the parent component
                onVideoLoaded(videoInfo);
            }
        };

        if (videoRef.current) {
            videoRef.current.addEventListener('loadeddata', handleVideoLoaded);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadeddata', handleVideoLoaded);
            }
        };
    }, [onVideoLoaded]);

    return (
        <div className='hero-main'>

            <div className='hero-desktop'>
                <video ref={videoRef} autoPlay muted loop playsInline className='hero-video'>
                    <source src={MainVideo} type='video/webm' />
                    <source src={MainVideoSafari} type='video/mp4; codecs="hvc1"' />
                </video>

                <div className='hero-layout-desktop'>
                    <div className='hero-headers'>
                        <div className='hero-headers-content'>
                            <h1 className='hero-main-header'>{t("welcomeMessage")}</h1>
                            <p className='hero-main-subheader'>{t("subheader")}</p>
                            <div className='buttons-row-hero'>
                                <button className='hero-main-button'>{t("onasmain")}</button>
                                <button className='hero-main-button2'>{t("kontaktmain")}</button>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <div className='hero-mobile'>
                <video autoPlay muted loop playsInline className='hero-video'>
                    <source src={MainVideo} type='video/webm' />
                    <source src={MainVideoSafari} type='video/mp4; codecs="hvc1"' />
                </video>

                <div className='hero-layout'>
                    <div className='hero-headers'>
                        <div className='hero-headers-content'>
                            <h1 className='hero-main-header'>{t("welcomeMessage")}</h1>
                            <p className='hero-main-subheader'>{t("subheader")}</p>
                            <div className='buttons-row-hero'>
                                <button className='hero-main-button'>{t("onasmain")}</button>
                                <button className='hero-main-button2'>{t("kontaktmain")}</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;