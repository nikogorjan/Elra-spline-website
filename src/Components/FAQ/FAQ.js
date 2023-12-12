import React from 'react'
import './FAQ.css'
import { useTranslation } from "react-i18next";

const FAQ = () => {
    const { t } = useTranslation();

  return (
    <div className='faq-main'>
        <div className='faq-wrapper'>
            <div className='faq'>
                <div className='thefqwrapper'>
                <h2 className='faq-h'>{t("question1")}</h2>
                <p className='faq-p'>{t("answer1")}</p>
                </div>
            </div>
            <div className='faq'>
            <h2 className='faq-h'>{t("question2")}</h2>
                <p className='faq-p'>{t("answer2")}</p>
            </div>
            <div className='faq'>
            <h2 className='faq-h'>{t("question3")}</h2>
                <p className='faq-p'>{t("answer3")}</p>
            </div>
            <div className='faq'>
            <h2 className='faq-h'>{t("question4")}</h2>
                <p className='faq-p'>{t("answer4")}</p>
            </div>
            <div className='faq'>
            <h2 className='faq-h'>{t("question5")}</h2>
                <p className='faq-p'>{t("answer5")}</p>
            </div>
        </div>
    </div>
  )
}

export default FAQ
