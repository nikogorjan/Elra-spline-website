import React, {useState, useEffect} from "react";
import './Navbar.css'
import { useTranslation } from "react-i18next";


const Navbar = () => {
    const { t } = useTranslation();

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
      };

      useEffect(() => {
        const handleOutsideClick = (event) => {
            // Close the menu if it's open and the click is outside of the menu
            if (isMenuOpen && !event.target.closest(".navbar-menu-link")) {
                setMenuOpen(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("click", handleOutsideClick);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <div className='navbar-main'>
            <div className='navbar-layout'>
                <div className='navbar-company-name'>ELRA</div>
                <div className='navbar-company-service'>{t("elin")}</div>
                <div className='navbar-navigation-links'>
                    <div className='navbar-link'>{t("services")}</div>
                    <div className='navbar-link'>{t("aboutUs")}</div>
                    <div className='navbar-link'>{t("galerija")}</div>
                    <div className='navbar-link green-link'>{t("contact")}</div>

                    <div className='navbar-menu-link'>
                        <div
                            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
                            onClick={handleMenuToggle}
                        >
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                            
                            <div className='navbar-link-open'>{t("services")}</div>
                    <div className='navbar-link-open'>{t("aboutUs")}</div>
                    <div className='navbar-link-open'>{t("galerija")}</div>
                    <div className='navbar-link-open green-link '>{t("contact")}</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;