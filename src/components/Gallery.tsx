import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './SliderSwiper.scss';
import { slider1, slider2, slider3, slider4 } from "../assets";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const Gallery = () => {
    // const {t} = useTranslation();
  
    const slides = [
        {
            "id": 1,
            "image": slider1,
            "title": "1 aranżacja wnętrz",
            "subtitle": "Subtitle 1",
            "interwal": 2000,
        },
        {
            "id": 2,
            "image": slider2,
            "title": "2 meble biurowe",
            "subtitle": "meble biurowe",
            "interwal": 2000,
        },
        {
            "id": 3,
            "image": slider3,
            "title": "3 meble kuchenne",
            "subtitle": "Subtitle 3",
            "interwal": 2000,
        },
        {
            "id": 4,
            "image": slider4,
            "title": "4 meble gabinetowe",
            "subtitle": "Subtitle 4",
            "interwal": 2000,
        }
    ].reverse();


    return (
        <div className={`flex flex-col w-full gap-5 mx-auto pt-[80px]`}>
            <motion.div
                variants={fadeIn("", "", 0.1, 2)}
                className='mt-4 text-secondary text-[17px] text-center leading-[30px]'
            >
                <div className={`${styles.sectionHeadText}, text-center`}>Galeria</div>
            </motion.div>

            <div
                // className={`absolute inset-0 top-[260px] mx-auto flex flex-row items-start gap-5`}
            >
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                        },
                    }}
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

        </div>
  );
};

export default SectionWrapper(Gallery, "gallery");