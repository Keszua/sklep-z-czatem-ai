import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SliderSwiper.scss';
import { sliderAw1, sliderAw2, sliderAw3 } from "../assets";

const Awards = () => {
//   const {t} = useTranslation();
  
  return (
        <div >
            <motion.div
                variants={fadeIn("", "", 0.1, 2)}
                className='mt-4 text-secondary text-[17px] text-center leading-[30px]'
            >
                <div className={`${styles.sectionHeadText}, text-center`}>Nagrody</div>
            </motion.div>

            <div
                className={`bg-[black] text-center`}
                style={{
                    width: '100%',
                    maxWidth: '800px',
                    height: '300px',
                    // backgroundColor: 'red',
                    margin: 'auto',
                    marginTop: '40px',
                }}
            >
                <Swiper
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    // pagination={true}
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    coverflowEffect={{
                      rotate: 40,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                      }}
                    // modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={sliderAw1} alt="Nagroda 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderAw2} alt="Nagroda 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderAw1} alt="Nagroda 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderAw3} alt="Nagroda 3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default SectionWrapper(Awards, "awards");