import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPhoneFlip, faShippingFast, faUser } from '@fortawesome/free-solid-svg-icons'

// import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import { flag_en_icon, flag_pl_icon } from "./LangIconFlags";


export const Topbar = () => {
//   const {t} = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const handleLanguageChange = (selectedLanguage: string) => {
//     i18next.changeLanguage(selectedLanguage);
//     setIsLanguageOpen(false);
//   };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 120) { // przewijanie w dół
        setScrolled(true);
      } else { // przewijanie w górę
        setScrolled(false);
      }
      // Aktualizuj ostatnią pozycję przewijania, ale nie gdy jesteśmy na górze strony
      if (scrollTop > 0) {
        setLastScrollTop(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);


  return (
    <header className="block z-10 mx-auto h-14 p-5 bg-black-111" >
        <div className="flex flex-row flex-wrap justify-between w-full pr-4 pl-4 mx-auto text-white"
            style={{     
                maxWidth: '1240px',
            }}
        >
            <div className="flex flex-wrap text-gold -mr-4 -ml-4" >
                    <FontAwesomeIcon icon={faShippingFast} />
                    &nbsp;Darmowa dostawa od 500zł lub odbiór osobisty
            </div>
            <div></div>
            <div className="flex flex-row justify-end items-center px-2" 
                style={{ fontFamily: "Montserrat, sans-serif" }}
            >
                <div className="px-2" >
                    <FontAwesomeIcon icon={faUser} className="text-gold" />
                    &nbsp;Zaloguj się / Zarejstruj się
                </div>

                <div className="px-2" >
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>

                <div className="px-2" >
                    <FontAwesomeIcon icon={faYoutube} />
                </div>

                <div className="font-semibold px-2" >
                    <FontAwesomeIcon icon={faPhoneFlip} className="text-gold" />
                    &nbsp;507 XXX 510
                </div>

            </div>
        </div>    



        {/* <div className='w-full flex flex-col justify-between items-center max-w-7xl mx-auto'> */}

            {/* Language dropdown */}
            {/* <li
              key="lang"
              className={` relative flex 
                ${active === "lang" ? "text-secondary" : "text-primary"} 
                hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              { i18next.language  === 'en' ? flag_en_icon() : flag_pl_icon()  }
              
              <svg
                className="w-4 h-6 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {!isLanguageOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                )}
              </svg>

              <div className="relative">
                {isLanguageOpen && (
                  <div className="absolute top-10 right-0 mt-2 py-2 border border-gray-300 rounded shadow-md">
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-900 focus:outline-none"
                      onClick={() => handleLanguageChange('pl')}
                    >
                      { flag_pl_icon() }
                    </button>
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-indigo-900 focus:outline-none"
                      onClick={() => handleLanguageChange('en')}
                    >
                      { flag_en_icon() }
                    </button>
                  </div>
                )}
              </div>
            </li> */}
         
        {/* </div>  */}
    </header>
  );
};
