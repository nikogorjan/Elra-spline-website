import React, { useEffect } from 'react'
import './Services.css'
import instalacije from '../../Resources/Icons/webpinstalacije.webp'
import razsvetljava from '../../Resources/Icons/webprazsvetljava.webp'
import crpalke from '../../Resources/Icons/webpcrpalka.webp'
import smart from '../../Resources/Icons/webpsmart.webp'
import strelo from '../../Resources/Icons/webpstrelovod.webp'
import { useTranslation } from "react-i18next";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        let ctx = gsap.context(() => {
            document.querySelectorAll('.service-cell').forEach((cell) => {
                let timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: cell,
                        start: 'top center',
                        markers: false,
                        scrub: true,
                    },
                });

                timeline.to(cell.querySelector('.services-paragraph-container'), {
                    translateY: -80,
                    opacity: 1,
                    duration: 0.5,
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='services-main'>
            <div className='services-wrapper'>
                <div className='services-column1'>
                    <div className='service-cell'>
                        <img src={instalacije} className='service-img' alt='service-instalacija' />
                        <div className='services-paragraph-container'>
                            <p className='service-paragraph'>{t("instalacije")}</p>
                            <div className='more-div'>
                                <p className='services-link'>{t("read")}</p>
                                <p className='services-link arrow-margin'>&gt;&gt;</p>

                            </div>
                        </div>

                    </div>

                    <div className='service-cell'>
                        <img src={crpalke} className='service-img' alt='service-instalacija' />
                        <div className='services-paragraph-container'>
                            <p className='service-paragraph'>{t("crpalke")}</p>
                            <div className='more-div'>
                                <p className='services-link'>{t("read")}</p>
                                <p className='services-link arrow-margin'>&gt;&gt;</p>

                            </div>
                        </div>

                    </div>

                    <div className='service-cell'>
                        <img src={strelo} className='service-img' alt='service-instalacija' />
                        <div className='services-paragraph-container'>
                            <p className='service-paragraph'>{t("strelovod")}</p>
                            <div className='more-div'>
                                <p className='services-link'>{t("read")}</p>
                                <p className='services-link arrow-margin'>&gt;&gt;</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='services-column2'>
                    <div className='service-cell'>
                        <img src={razsvetljava} className='service-img' alt='service-razsvetlava' />
                        <div className='services-paragraph-container'>
                            <p className='service-paragraph'>{t("razsvetljava")}</p>
                            <div className='more-div'>
                                <p className='services-link'>{t("read")}</p>
                                <p className='services-link arrow-margin'>&gt;&gt;</p>

                            </div>
                        </div>
                    </div>
                    <div className='service-cell'>
                        <img src={smart} className='service-img' alt='service-razsvetlava' />
                        <div className='services-paragraph-container'>
                            <p className='service-paragraph'>{t("smart")}</p>
                            <div className='more-div'>
                                <p className='services-link'>{t("read")}</p>
                                <p className='services-link arrow-margin'>&gt;&gt;</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='super-button'>{t("kontaktzdaj")}</div>

        </div>
    )
}

export default Services
