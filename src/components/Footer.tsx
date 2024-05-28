// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.scss';
import { faEnvelope, faMapMarker, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { logoFooterSushi, logoSushi, platnosci } from '../assets';
// import { flag_en_icon, flag_pl_icon } from "./LangIconFlags";


export const Footer = () => {
//   const {t} = useTranslation();


  return (
    <>
        <div className="footer p-8">
                <div className="footer__zadzwon flex flex-col m-8">
                    <div className='flex flex-row p-4'>
                        <FontAwesomeIcon icon={faPhoneFlip} className="h-[52px] text-white mx-4" />
                        <div className='flex flex-col'>
                            <div className='text-gold'>Zadzwon do nas!</div>
                            <div className='text-white font-bold'
                                style={{fontSize: '27px'}}>(48) 507 XXX 510</div>
                        </div>
                    </div>
                    <div>
                        <img src={logoFooterSushi} alt="logo" className="object-contain my-4" />
                        <div>
                            <FontAwesomeIcon icon={faMapMarker} className="" />
                            &nbsp;ul. Gastronomiczna 72 | 26-600 Radom
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} className="" />
                            &nbsp;keszua@gmail.com
                        </div>
                    </div>
                </div>

                <div className="footer__na_skroty m-8 ">
                    <div className='text-gold font-bold my-4'> NA SKRÓTY</div>
                    <div className='my-2'> MOJE KONTO</div>
                    <div className='my-2'> KOSZYK</div>
                    <div className='my-2'> ZAMÓWIENIE</div>
                    <div className='my-2'> REGULAMIN</div>
                    <div className='my-2'> POLITYKA PRYWATNOSCI</div>
                </div>

                <div className="footer__na_skroty m-8">
                    <div className='text-gold font-bold my-4'>AKCEPTUJEMY PŁATNOŚCI</div>
                    <img src={platnosci} alt="Płatnośći" />         
                </div>

        </div> 

        <div className="footer2 flex justify-center text-white bg-black p-2"
            style={{
                fontSize: '12px',
                alignItems: 'flex-end'
            }}
        >
            2024 | Realizacja Michalczyk.it
        </div> 
    </>
);
};
