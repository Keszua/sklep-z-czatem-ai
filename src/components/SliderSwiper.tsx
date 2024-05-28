import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import './SliderSwiper.scss';
import { register } from 'swiper/element/bundle';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import { slider1, slider2, slider3, slider4 } from "../assets";




register();

export const SliderSwiper = () => {
    // const swiper = useSwiper();

    const slides = [
        {
            "image": slider1,
            "title": "Title 1",
            "subtitle": "Subtitle 1",
            "interwal": 2000,
        },
        {
            "image": slider2,
            "title": "Title 2",
            "subtitle": "Subtitle 2",
            "interwal": 2000,
        },
        {
            "image": slider3,
            "title": "Title 3",
            "subtitle": "Subtitle 3",
            "interwal": 2000,
        },
        {
            "image": slider4,
            "title": "Title 4",
            "subtitle": "Subtitle 4",
            "interwal": 2000,
        }
    ]



    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[260px] mx-auto flex flex-row items-start gap-5`}
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
                            <img src={slide.image} alt={slide.title} />
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </section>
  );
};
