import React from 'react'
import './Razlogi.css'
import izkusnje from '../../Resources/Icons/izkusnje.png'
import inovativnost from '../../Resources/Icons/innovation.png'
import celovitost from '../../Resources/Icons/celovitost.png'
import zanesljivost from '../../Resources/Icons/zanesljivost.png'
import prilagodljivost from '../../Resources/Icons/prilagodljivost.png'
import strokovnost from '../../Resources/Icons/strokovnost.png'
import { useTranslation } from "react-i18next";


const Razlogi = () => {
    const { t } = useTranslation();

    return (
        <div className='razlogi-main'>
                           {/*} <h2 className='the-header-of-razlog'>{t("Razlogi")}</h2>*/}

            <div className='razlogi-wrapper'>

                <div className='razlogi-row'>
                    <div className='razlo-cell'>
                        <div className='icon-circle'>
                            <img src={izkusnje} className='icon-img' />
                        </div>
                        <p className='tribulet-heade nomargin'>{t("Izkušnje")}</p>
                        <p className='tribulet-paragraph'>{t("Izkušnjep")}</p>
                    </div>
                    <div className='razlo-cell'>
                        <div className='icon-circle'>
                            <img src={inovativnost} className='icon-img' />
                        </div>
                        <p className='tribulet-heade nomargin'>{t("Inovativnost")}</p>
                        <p className='tribulet-paragraph'>{t("Inovativnostp")}</p>
                    </div>
                    <div className='razlo-cell'>
                        <div className='icon-circle'>
                            <img src={celovitost} className='icon-img' />
                        </div>
                        <p className='tribulet-heade nomargin'>{t("Celovitost")}</p>
                        <p className='tribulet-paragraph'>{t("Celovitostp")}</p>
                    </div>
                </div>

                <div className='razlogi-row'>
                <div className='razlo-cell'>
                    <div className='icon-circle'>
                        <img src={zanesljivost} className='icon-img' />
                    </div>
                    <p className='tribulet-heade nomargin'>{t("Zanesljivost")}</p>
                    <p className='tribulet-paragraph'>{t("Zanesljivostp")}</p>
                </div>
                <div className='razlo-cell'>
                    <div className='icon-circle'>
                        <img src={prilagodljivost} className='icon-img' />
                    </div>
                    <p className='tribulet-heade nomargin'>{t("Prilagodljivost")}</p>
                    <p className='tribulet-paragraph'>{t("Prilagodljivostp")}</p>
                </div>
                <div className='razlo-cell'>
                    <div className='icon-circle'>
                        <img src={strokovnost} className='icon-img' />
                    </div>
                    <p className='tribulet-heade nomargin'>{t("Strokovnost")}</p>
                    <p className='tribulet-paragraph'>{t("Strokovnostp")}</p>
                </div>

            </div>

            </div>
            

        </div>

    )
}

export default Razlogi
