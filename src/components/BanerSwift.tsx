import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './SliderSwiper.scss';
import { logoCatering2, slider1, slider2, slider3, slider4 } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";


export const BanerSwift = () => {
    // const {t} = useTranslation();
  
    const [isHovered, setIsHovered] = useState(false);

    const slides = [
        {
            "id": 1,
            "image": slider1,
            "title": "Smak Japonii na wyciągnięcie ręki",
            "interwal": 3000,
        },
        {
            "id": 2,
            "image": slider2,
            "title": "Zanurz się w smaku orientu",
            "interwal": 3000,
        },
        {
            "id": 3,
            "image": slider3,
            "title": "Wybierz się w kulinarną podróż",
            "interwal": 3000,
        },
        {
            "id": 4,
            "image": slider4,
            "title": "Prawdziwe sushi, prawdziwa pasja",
            "interwal": 3000,
        },
    ]

    return (
        <div className={`flex flex-col w-full gap-5 mx-auto h-[555px] `}>
            <div className="w-full h-full" 
                onMouseEnter={() => setIsHovered(true)} // Ustaw stan na true, gdy mysz wchodzi
                onMouseLeave={() => setIsHovered(false)} // Ustaw stan na false, gdy mysz opuszcza
            >
                <Swiper
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    effect="fade"
                    speed={1000}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={isHovered}
                    >
                    { slides.map((slide) => (
                        <SwiperSlide key={slide.image}>
                            <div className={'w-full h-full flex items-end justify-center bg-cover'} 
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    paddingBottom: '30px'
                                }}
                            >
                                <div className="flex flex-col justify-center items-center w-full h-full absolute top-0 left-0 bg-black bg-opacity-45">

                                    <img src={logoCatering2} alt="logo" className=" h-[25%] m-8" />

                                    <div className={'text-center '} 
                                        style={{ 
                                            maxWidth: '480px',
                                            color: 'white',
                                            fontSize: '42px',
                                            fontWeight: '700',
                                        }}
                                    >
                                        {slide.title.toUpperCase()}
                                    </div>

                                    {/* <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-gold text-white px-8 py-4 bg-opacity-90"
                                        style={{
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            margin: '20px 0',
                                        }}
                                    >
                                        SPRAWDSZ NASZĄ OFERTĘ
                                    </motion.button> */}

                                    <NavLink to="/kategorie/catering-sushi"  
                                        className="bg-gold text-white px-8 py-4 bg-opacity-90 hover:bg-black"
                                        style={{
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            margin: '20px 0',
                                        }} 
                                    > 
                                        SPRAWDSZ NASZĄ OFERTĘ
                                    </NavLink>


                                </div>

                            </div>
                        </SwiperSlide>            
                    ))}
                </Swiper>
            </div>

        </div>
  );
};
