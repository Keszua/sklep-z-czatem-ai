import { useState } from "react";
import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn} from "../utils/motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { ContactForm } from "./ContactForm";

const MapComponent = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}> {/* Możesz dostosować styl wedle potrzeb */}
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1778834315774!2d21.15069841571477!3d51.41533708162059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47185c06751562cd%3A0x3bee02e1ca921698!2sBIURMEBL!5e0!3m2!1spl!2spl!4v1649264978184!5m2!1spl!2spl"
                allowFullScreen
            ></iframe>
        </div>
    );
};


const Contakt = () => {
    // const {t} = useTranslation();
 
    const [showPhoneNumber, setshowPhoneNumber] = useState(false);
    const [showFaxNumber, setshowFaxNumber] = useState(false);


    const companyDetails = {
        'Nazwa firmy': 'BIURMBEL Marcin Neska',
        'Ulica': 'Radosna 6A',
        'Miejscowość': '26-600 Radom',
        '\n': ' ',
        'NIP': '948-124-98-05',
        'Regon': '673004979',
    };

    const handleFormSubmit = (subject: string, email: string, phone: string, message: string, captcha: string, termsAccepted: boolean) => {
        // Here, you would handle the submission, such as sending the data to a server
        console.log('Form submitted with the following data:');
        console.log('Subject:', subject);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
        console.log('Captcha:', captcha);
        console.log('Terms accepted:', termsAccepted);
    
        // Example: Post to a backend server (not functional without a backend endpoint)
        // fetch('your-backend-endpoint', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ subject, email, phone, message, captcha, termsAccepted }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //   console.log('Success:', data);
        // })
        // .catch((error) => {
        //   console.error('Error:', error);
        // });
    };


    const handleshowPhoneNumber = () => {
        setshowPhoneNumber(true);
    };
    
    const handleshowFaxNumber = () => {
        setshowFaxNumber(true);
    };

    
    return (
        <div className="text-center overflow-hidden">
            <motion.div
                variants={fadeIn("", "", 0.1, 2)}
                className='m-[20px] text-secondary text-[17px] text-center'
            >
                <div className={`${styles.sectionHeadText}, text-center`}>Kontakt</div>
            </motion.div>

            <div className={'mb-20'}>

                <div className={`overflow-x-auto mt-6 overflow-hidden`}>
                    <table className="table-auto w-full bg-black overflow-hidden" style={{borderRightWidth: '0px', borderLeftWidth: '0px'}}>
                        <tbody>
                            {Object.entries(companyDetails).map(([key, value]) => (
                                <tr key={key} >
                                    <td className={`p-1 text-gold font-medium`} style={{borderRightWidth: '0px', borderLeftWidth: '0px', textAlign: 'right',  width: '40%', backgroundColor: 'black'}}>
                                        {key}
                                    </td>
                                    <td className={`p-1 `} style={{width: '60%', backgroundColor: 'black', borderRightWidth: '0px', textAlign: 'left',borderLeftWidth: '0px'}}>
                                        <motion.div variants={fadeIn('left', '', 0, 1)}>
                                            {value}
                                        </motion.div>
                                    </td>
                                </tr>
                            ))}

                            <tr >
                                <td className={`p-1 text-gold font-medium`} style={{borderRightWidth: '0px', borderLeftWidth: '0px', textAlign: 'right',  width: '50%', backgroundColor: 'black'}}>
                                    Telefon
                                </td>
                                <td className={`p-1 `} style={{width: '50%', backgroundColor: 'black', borderRightWidth: '0px', textAlign: 'left',borderLeftWidth: '0px'}}>
                                    <motion.div variants={fadeIn('left', '', 0, 1)}>
                                        {showPhoneNumber ? (
                                            <div>+48 500 188 918</div>
                                        ) : (
                                            <div className={`flex flex-row`}>
                                                <div>+48 500 *** *** &nbsp;</div> 
                                                <button
                                                    className="underline hover:text-gold"
                                                    onClick={handleshowPhoneNumber}
                                                >
                                                    Pokaż numer
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                </td>
                            </tr>

                            <tr >
                                <td className={`p-1 text-gold font-medium`} style={{borderRightWidth: '0px', borderLeftWidth: '0px', textAlign: 'right',  width: '50%', backgroundColor: 'black'}}>
                                    Fax
                                </td>
                                <td className={`p-1 `} style={{width: '50%', backgroundColor: 'black', borderRightWidth: '0px', textAlign: 'left',borderLeftWidth: '0px'}}>
                                    <motion.div variants={fadeIn('left', '', 0, 1)}>
                                        {showFaxNumber ? (
                                            <div>+48 500 188 918</div>
                                        ) : (
                                            <div className={`flex flex-row`}>
                                                <div>+48 500 *** *** &nbsp;</div> 
                                                <button
                                                    className="underline hover:text-gold"
                                                    onClick={handleshowFaxNumber}
                                                >
                                                    Pokaż numer
                                                </button>
                                            </div>
                                        )}
                                    </motion.div>
                                </td>
                            </tr>

                            <tr>
                                <td className={`p-10`} style={{borderRightWidth: '0px', borderLeftWidth: '0px', textAlign: 'right', width: '50%', backgroundColor: 'black'}}>
                                    <motion.div variants={fadeIn("right", "", 0, 1.5)}>
                                        <a href="https://www.facebook.com/biurmeb" target="_blank" rel="noopener noreferrer" 
                                            className="text-white hover:text-gold transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faFacebookSquare} size="lg" className="h-[70px]" />
                                        </a>
                                    </motion.div>
                                </td>
                                <td className={`p-10`} style={{width: '50%', backgroundColor: 'black', borderRightWidth: '0px', textAlign: 'left',borderLeftWidth: '0px'}}>
                                    <motion.div variants={fadeIn("left", "", 0, 1.5)}>
                                        <a href="https://www.instagram.com/biurmebl" target="_blank" rel="noopener noreferrer" 
                                            className="text-white hover:text-gold transition-colors">
                                            <FontAwesomeIcon icon={faInstagram} size="lg"  className="h-[70px]"/>
                                        </a>
                                    </motion.div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className={`flex flex-col items-center justify-center`} 
                style={{
                    zIndex: '1',
                }}
            >
                <MapComponent />
            </div>

            <div className='text-secondary text-center' 
                style={{
                    maxWidth: '400px',
                    margin: 'auto',
                    marginTop: '5px',
                    zIndex: '-1',
                }}
            >
                Wjazd od firmy od strony cmentarza
                <motion.div
                    variants={fadeIn("", "", 1, 3)}
                >
                    <img src="/img/dojazd.jpg" alt="Dojazd"/>
                </motion.div>
            </div>

            <div className='flerx items-center justify-center' 
                style = {{
                    maxWidth: "500px",
                    margin: "auto",
                }}
            >
                <ContactForm onSubmit={handleFormSubmit} />
            </div>
        </div>
    );
};

export default SectionWrapper(Contakt, "contact");
// export default Kontakt;