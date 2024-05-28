import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { OpinionCard } from './OpinionCard';
import { OpinionForm } from './OpinionForm';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SliderSwiper.scss';
// import { sliderAw1, sliderAw2, sliderAw3 } from "../assets";

const Opinions = () => {
    // const {t} = useTranslation();
  
    const opinions = [
        {
          id: 1,
          author: "Michał W.",
          date: "29 stycznia 2024",
          title: "Meble na wymiar, Warszawa",
          content: "Profesjonalnie i sprawnie, terminowo, a do tego miło.",
          rating: 5,
        },
        {
            id: 2,
            author: "Piotr S.",
            date: "20 stycznia 2024",
            title: "Dam zlecenie na wykonanie kuchni na wymiar, 4-5mb, Warszawa",
            content: "Pan Marcin jest solidny i znajduje rozwiązania meblarskie i projektowe jak z rękawa. Dużym plusem jest bardzo dobra komunikacja i tempo działania.",
            rating: 5,
        },
        {
            id: 3,
            author: "Julia N.",
            date: "2023-12-05",
            title: "Zapotrzebowanie na wykonanie szafy wnękowej, Warszawa",
            content: "Firma godna polecenia. Zwłaszcza ze względu na: szybkość kontaktu i sprawne zrealizowanie zlecenia. W piątek zepsuła się szafa. Od razu wrzuciłam zapytanie na Oferteo. 10 minut później skontaktował się ze mną wykonawca. W poniedziałek szafa już była naprawiona. Szybko i sprawnie. To kolejny wykonawca z Oferteo, z którym zrealizuję kolejne projekty. Poprzednio przetestowałam firmę na malowaniu 1 pokoju, a skończyło się na generalnym remoncie mieszkania. I za to lubię Oferteo i cenię wykonawców, którzy sprawnie podejmują również małe zlecenia. Po prostu warto. Jest problem - jest rozwiązanie.",
            rating: 5
        },
        {
            id: 4,
            author: "Urszula A.",
            date: "2023-11-14",
            title: "Dam zlecenie na wykonanie regału, drewno, Warszawa",
            content: "Jestem bardzo zadowolona z moich regałów, otrzymałam produkt najwyższej jakości. Do tego szybkie wykonanie (zgodnie z ustaleniami), super kontakt i porządek po wykonanej pracy. Polecam bardzo gorąco, na pewno jeszcze z korzystam z Państwa usług! Pozdrawiam serdecznie.",
            rating: 5
        },
        {
            id: 5,
            author: "Patrycja H.",
            date: "2023-10-30",
            title: "Dam zlecenie na wykonanie kuchni na wymiar, płyta meblowa lakierowana, 2-3mb, Warszawa",
            content: "Pan Marcin Neska jest osobą godną zaufania i bardzo dokładną. Poświęca całą uwagę klientowi i przykłada wielką wagę do szczegółów. Cała komunikacja w sprawie projektu kuchni i innych mebli na zamówienie przebiega bardzo sprawnie i transparentnie. Doceniam, że Pan Marcin jest proaktywny i zawsze jest na czas. Byłam w kontakcie z kilkoma innymi firmami stolarskimi podczas poszukiwań wykonawcy, ale nikt nie był tak dokładny i godny zaufania jak Pan Marcin, dlatego zdecydowałam się skorzystać z usług firmy BIIURMEBL.",
            rating: 5
        },

        {
            id: 6,
            author: "Barbara M.",
            date: "2023-10-04",
            title: "Zlecenie na meble na wymiar, Warszawa",
            content: "Realizacja zamówienia przed terminem, bardzo staranne wykonanie. Montaż dokładny i szybki, profesjonalnie.",
            rating: 5
        },
        {
            id: 7,
            author: "Zofia P.",
            date: "2023-09-12",
            title: "Opinia bez tytułu",
            content: "Firma BIURMEBL wykonała moje duże zlecenie perfekcyjnie, solidnie i co w obecnym czasie niespotykane terminowo. Rzeczowość, perfekcja, sumienność, punktualność i przeogromne doswiadczenie oraz kultura w kontaktach dawalo mi pewność, że wybralam najwłaściwszą firmę. Współpraca jak już wspomniałam przebiegała sprawnie i bez zarzutu. Projektant uwzglednil wszystkie moje prośby odnosnie funkcjonalnosci mebli oraz sam zasugerowal kilka bardzo ciekawych rozwiązań z których postanowilam skorzystać. Wysoka jakość wykonania mebli, dbałość o kazdy detal oraz perfekcyjna obsługa powodują iż niewątpliwie jest to firma godna rekomendacji.",
            rating: 5
        },
        {
            id: 8,
            author: "Teresa K.",
            date: "2023-08-23",
            title: "Zapotrzebowanie na wykonanie mebli na wymiar, Warszawa",
            content: "Szybka reakcja, aktywnosc w ustalaniu szczególow zlecenia, szeroka informacja dotyczaca roznych wariantów uzycia materiałów itp. Zlecenie pozostaje w trakcie realizacji, wiec koncową opinie o wspólpracy moge przedstawic po wykonaniu usługi.",
            rating: 5
        },
        {
            id: 9,
            author: "Daniel R.",
            date: "2023-08-18",
            title: "Zlecenie na meble na wymiar, Warszawa",
            content: "Szybko, sprawnie, konkurencyjnie cenowo. Dobry kontakt i rzeczowość.",
            rating: 5
        },
        {
            id: 10,
            author: "Karolina C.",
            date: "2022-12-09",
            location: "Radom",
            title: "Dam zlecenie na wykonanie komody lub szafki",
            content: "Szybki termin realizacji. Kontakt bez zastrzeżeń. Meble wykonane według ustalonego projektu. Polecam w 100%",
            rating: 5
        },
        {
            id: 11,
            author: "Patryk P.",
            date: "2022-12-05",
            title: "Dam zlecenie na wykonanie biurka, Warszawa",
            content: "Realizacja, czas i cena bardzo dobra. Kontakt bezproblemowy wraz z możliwością delikatnych zmian podczas realizacji. Bardzo polecam tego wykonawcę.",
            rating: 5
        },

        {
            id: 13,
            author: "Jan W.",
            date: "2022-02-26",
            location: "Radom",
            title: "Dam zlecenie na wykonanie szafy wolnostojącej",
            content: "Pomysłowość w projektowaniu mebli. Skuteczne doradztwo. Umiejętność rozmowy z klientem",
            rating: 5
        },
        {
            id: 14,
            author: "Jacek T.",
            date: "2021-01-03",
            title: "Opinia bez tytułu",
            content: "Uczciwość, terminowość, profesjonalizm, konkurencyjność.",
            rating: 5
        },
        {
            id: 15,
            author: "Dominik",
            date: "2010-08-07",
            location: "Radom",
            title: "Opinia bez tytułu",
            content: "Jestem bardzo zadowolony z fachowości i usługi świadczonej przez firmę Biurmebl. Choć nie byłem przekonany, ale po pierwszym spotkaniu byłam mile zaskoczony. Po dokonaniu wyceny możliwość negocjacji i wykonali projekt który przekonał mnie do tej firmy gdyż pokazał dokładnie to jak ma wyglądać moja kuchnia został wykonany przez firmę za darmo. Polecam tą firmę każdemu, rzetelni i fachowi w każdym calu.",
            rating: 5
        },

    ];
  

    const handleFormSubmit = (name: string, rating: number, message: string, termsAccepted: boolean) => {
        // Tutaj możesz obsłużyć zdarzenie wysyłania formularza, na przykład wysyłając dane do API
        console.log(name, rating, message, termsAccepted);
        // Dodaj logikę do wysyłania danych do API lub innej obsługi formularza
    };

    return (
        <div className={`mb-20`}>
            <motion.div
                variants={fadeIn("", "", 0.1, 2)}
                className='m-[20px] text-secondary text-[17px] text-center  leading-[30px]'
            >
                <div className={`${styles.sectionHeadText}, text-center`}>Opinie</div>
            </motion.div>

            <div
                className={`text-center`}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '300px',
                    margin: 'auto',
                    marginTop: '40px',
                }}
            >
                <Swiper
                
                    modules={[Autoplay, EffectCreative]}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    grabCursor={true}
                    effect={'creative'}
                    speed={1000}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    style={{
                        width: '95%',
                        height: '100%',
                    }}
                    >
                    {opinions.map((opinion, index) => (
                        <SwiperSlide
                            key={opinion.id}
                            className="bg-black text-left"                  
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <OpinionCard key={index} {...opinion} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    margin: 'auto',
                    marginTop: '40px',
                }}
            >
                <motion.div
                    variants={fadeIn("", "", 0.1, 3)}
                    className='m-[20px] text-secondary text-[17px] text-center leading-[30px]'
                >
                    <div className={`${styles.heroSubText}, text-center`}>Jestes już naszym klientem? Zostaw opinie.</div>
                </motion.div>
                <motion.div
                    variants={fadeIn("", "", 0.1, 2)}
                >
                    <OpinionForm onSubmit={handleFormSubmit} />
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Opinions, "opinions");