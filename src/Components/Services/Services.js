import React from 'react';
import './Services.css'
import Slika1 from '../../Resources/Images/slika1.jpg';
import Slika2 from '../../Resources/Images/slika2.jpg';
import Slika3 from '../../Resources/Images/slika3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Services = () => {
    return (
        <div className='services-main'>
            <div className='services-layout'>
                <div className='services-container'>
                    <div className='services-service'>
                        <div className='services-service-image' style={{ backgroundImage: `url(${Slika1})`, backgroundSize: 'cover' }}></div>
                        <div className='service-hook'>
                            <h1 className='service-hook-header'>Lorem Ipsum</h1>
                            <p className='service-hook-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            
                        </div>
                        <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#74ffbc" }} />
                            </div>
                    </div>
                </div>
                <div className='services-container'>
                    <div className='services-service'>
                        <div className='services-service-image' style={{ backgroundImage: `url(${Slika2})`, backgroundSize: 'cover' }}></div>
                        <div className='service-hook'>
                            <h1 className='service-hook-header'>Lorem Ipsum</h1>
                            <p className='service-hook-paragraph'>Viverra adipiscing at in tellus integer feugiat scelerisque varius.</p>
                            
                        </div>
                        <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#74ffbc" }} />
                            </div>
                    </div>
                </div>
                <div className='services-container'>
                    <div className='services-service'>
                        <div className='services-service-image' style={{ backgroundImage: `url(${Slika3})`, backgroundSize: 'cover' }}></div>
                        <div className='service-hook'>
                            <h1 className='service-hook-header'>Lorem Ipsum</h1>
                            <p className='service-hook-paragraph'>Nibh mauris cursus mattis molestie. Dolor sit amet consectetur adipiscing elit.</p>
                            
                        </div>
                        <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faArrowRight} style={{ color: "#74ffbc" }} />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;