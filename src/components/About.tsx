import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './SliderSwiper.scss';
import { slider1, slider2, slider3, slider4 } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const About = () => {
    // const {t} = useTranslation();
  
    const slides = [
        {
            "id": 1,
            "image": slider1,
            "title": "aranżacja wnętrz",
            "subtitle": "Subtitle 1",
            "interwal": 2000,
        },
        {
            "id": 2,
            "image": slider2,
            "title": "meble biurowe",
            "subtitle": "meble biurowe",
            "interwal": 2000,
        },
        {
            "id": 3,
            "image": slider3,
            "title": "meble kuchenne",
            "subtitle": "Subtitle 3",
            "interwal": 2000,
        },
        {
            "id": 4,
            "image": slider4,
            "title": "meble gabinetowe",
            "subtitle": "Subtitle 4",
            "interwal": 2000,
        }
    ]

    return (
        <div className={`flex flex-col w-full gap-5 mx-auto pt-[80px]`}>
            <div
                // className={`absolute inset-0 top-[260px] mx-auto flex flex-row items-start gap-5`}
            >
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                    { slides.map((slide) => (
                        <SwiperSlide key={slide.image}>
                            <div className={'bg-[red] '} 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    paddingBottom: '30px'
                                }}
                            >
                                <div className={styles.sectionHeadText} style={{ textShadow: '2px 1px 3px black' }}>
                                    {slide.title}
                                </div>
                            </div>
                        </SwiperSlide>            
                    ))}
                </Swiper>
            </div>

            <div 
                className={` flex flex-col`}
                style={{textAlign: 'justify', marginLeft: '3%', marginRight: '3%'}}
            >
                <motion.div variants={textVariant(0)}>
                    <p className={styles.sectionSubText}>
                        Firma BIURMEBL specjalizuje się w produkcji mebli na zamówienie: biurowych i do domu.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(0.3)}> 
                    <br />
                    <p className={styles.sectionSubText}>
                        Jesteśmy firmą, która łączy wiedzę z&nbsp;doświadczeniem w&nbsp;produkcji mebli. Dzięki połączeniu tych kluczowych elementów stworzyliśmy dobrą markę.
                        Zapewniamy Państwu najwyższą jakość mebli biurowych, gabinetowych oraz mebli kuchenny i&nbsp;szaf wnękowych.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(0.6)}>
                    <br />
                    <p className={styles.sectionSubText}>
                        Świadczymy usługi dla szerokiej grupy odbiorców. Naszymi Klientami są zarówno klienci indywidualni, jak i&nbsp;przedsiębiorstwa.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(0.9)}>
                    <br />
                    <p className={styles.sectionSubText}>
                        Oferujemy również możliwość aranżacji wnętrz i&nbsp;pomoc w doborze mebli oraz innych ważnych składników na zrealizowanie swoich marzeń.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(1.2)}>
                    <br />
                    <p className={styles.sectionSubText}>
                        Działamy na terenie całej Polski, dla nas każdy klient jest traktowany indywidualnie. Jesteśmy wstanie wykonać projekt i&nbsp;wyceny zdalnie. Zapraszamy każdego klienta do współpracy z&nbsp;nami.
                    </p>
                </motion.div>

                <motion.div variants={textVariant(1.5)}>
                    <br />
                    <p className={styles.sectionSubText}>
                        Zapraszamy do zapoznania się z naszą ofertą.
                    </p>
                </motion.div>
            </div>
        </div>
  );
};

export default SectionWrapper(About, "about");