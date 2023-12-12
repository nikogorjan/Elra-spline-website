import React, { useState } from 'react'
import './Buildings.css'
import { useTranslation } from "react-i18next";

const Buildings = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const { t } = useTranslation();

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleMouseOver2 = () => {
        setIsHovered2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovered2(false);
    };

    return (
        <div className='buildings-main'>
            <div
                className={`buildings-wrapper-desktop ${isHovered ? 'new-bg' : ''} ${isHovered2 ? 'new-bg2' : ''
                    }`}
            >
                <div className='buildings-cell'>
                    <p className='cell-paragraph'>{t("hisa1")}</p>             
                </div>
                <div className='buildings-cell'
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}>
                    <p className='cell-paragraph'>{t("hisa3")}</p>             

                </div>
                <div className='buildings-cell'
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}>
                    <p className='cell-paragraph'>{t("hisa5")}</p>             

                </div>

            </div>

            <div className='buildings-wrapper-mobile'>
                <div className='building-cell-mobile bg1'>
                    <p className='cell-paragraph'>{t("hisa1")}</p>             

                </div>
                <div className='building-cell-mobile bg2'>
                <p className='cell-paragraph'>{t("hisa3")}</p>             

                </div>
                <div className='building-cell-mobile bg3'>
                <p className='cell-paragraph'>{t("hisa5")}</p>             

                </div>

            </div>
        </div>
    )
}

export default Buildings
