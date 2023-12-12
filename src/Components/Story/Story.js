import React, { useEffect } from 'react'
import './Story.css'
import storyImg from '../../Resources/Images/story-img.webp'
import fenceImg from '../../Resources/Images/fence.webp'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);


const Story = () => {
    const { t } = useTranslation();

    useEffect(() => {


        let ctx = gsap.context(() => {
            let timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.story-main',
                    start: 'top+=-60% center',
                    scrub: true,
                    markers: false,
                },
            });


            // Animate the image to move up as we scroll
            timeline.to('.story-img', { y: '-30%', ease: 'power1.out', });
            timeline.to('.fence-img', { y: '200%', rotation: 540, transformOrigin: 'center center', ease: 'power1.out' }, 0); // The second parameter '0' ensures both animations start at the same time

            // Animation for changing story numbers on entering .story-div
            gsap.timeline({
                scrollTrigger: {
                  trigger: '.story-div',
                  onEnter: () => {
                    // Reset the innerHTML to 0 before animating to 100
                    document.querySelectorAll('.story-numbers').forEach((el) => {
                      el.innerHTML = '0';
                    });
        
                    // Animate the story numbers gradually from 0 to 100 without decimal numbers
                    gsap.to('.years', { duration: 2, innerHTML: '+=7', snap: 'years', roundProps: 'innerHTML' });
                    gsap.to('.procent', { duration: 2, innerHTML: '+=100', snap: 'procent', roundProps: 'innerHTML' });
                    gsap.to('.projekti', { duration: 2, innerHTML: '+=200', snap: 'projekti', roundProps: 'innerHTML' });

                  },
                  markers: false,
                },
              });
        });

        return () => ctx.revert();

    }, []);

    return (
        <div className='story-main'>
            <div className='story-wrapper'>
                <div className='image-column'>
                    <img alt='our-story' src={fenceImg} className='fence-img' />
                    <img alt='our-story' src={storyImg} className='story-img' />
                </div>
                <div className='story-column'>
                    <div className='story-div'>
                        <h2 className='story-header'>{t("zgodba")}</h2>
                        <h3 className='story-subheader'>{t("podnaslov")}</h3>
                        <p className='story-paragraph'>{t("aboutelra2")}</p>
                        <div className='stats-row'>
                            <div className='stats-column'>
                                <div className='story-numbers-row'>
                                    <p className='story-numbers years'>0</p>
                                    <p className='plus'>+</p>
                                </div>

                                <p className='numbers-paragraph'>{t("iz")}</p>
                            </div>
                            <div className='stats-column'>
                            <div className='story-numbers-row'>
                                    <p className='story-numbers projekti'>0</p>
                                    <p className='plus'>+</p>
                                </div>
                                <p className='numbers-paragraph'>{t("zp")}</p>
                            </div>
                            <div className='stats-column'>
                            <div className='story-numbers-row'>
                                    <p className='story-numbers procent'>0</p>
                                    <p className='plus'>%</p>
                                </div>
                                <p className='numbers-paragraph'>{t("cs")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story
