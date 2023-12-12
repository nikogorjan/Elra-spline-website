import React from 'react'
import './Tribulet.css'
import customer from '../../Resources/Icons/customer.png'
import flash from '../../Resources/Icons/flash.png'
import shield from '../../Resources/Icons/shield.png'
import { useTranslation } from "react-i18next";


const Tribulet = () => {
    const { t } = useTranslation();

    return (
        <div className='tribulet-main'>
            <div className='tribulat-wrapper'>
                <div className='tribulet-row'>
                    <div className='tribulet'>
                        <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={flash} alt='Flash' className='icon-img' />
                            </div>
                            <p className='tribulet-heade'>{t("kakovosth")}</p>
                        </div>
                        <p className='tribulet-paragraph'>{t("kakovostp")}</p>
                    </div>
                    <div className='tribulet'>
                    <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={shield} alt='Flash' className='icon-img' />
                            </div>
                            <p className='tribulet-heade'>{t("varnosth")}</p>
                        </div>
                        <p className='tribulet-paragraph'>{t("varnostp")}</p>
                    </div>
                    <div className='tribulet'>
                    <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={customer} alt='Flash' className='icon-img' />
                            </div>
                            <p className='tribulet-heade'>{t("komunikacijah")}</p>
                        </div>
                        <p className='tribulet-paragraph'>{t("komunikacijap")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tribulet
