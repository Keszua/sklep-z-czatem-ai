import { NavLink } from "react-router-dom";
import { ArrowOferta, BackgroundOferta, ofertaSushi1, ofertaSushiIco1, ofertaSushi2, ofertaSushiIco2, ofertaSushi3, ofertaSushiIco3 } from "../assets";
import './Oferta.scss';


export const Oferta = () => {

    return (
        <div className="offer__background"
            style={{
                backgroundImage: `url(${BackgroundOferta})`,
            }}
        >
            <div className="offer__arrow " >
                <img src={ArrowOferta} alt="logo" className="h-5" />
            </div>

            <div className="offer__heading">
                <span className="offer__heading--nasza text-gold">
                    Nasza
                </span>

                <div className="offer__heading--romb "></div>
                <div className="h-[1px] w-[100px] bg-gold "></div>

                <div className="offer__heading--oferta">
                    Oferta
                </div>

                <div className="offer__heading--description">
                    Zapraszamy Państwa do zapoznania się z pełną naszą ofertą. 
                    Wszystkie produktu przygotowywane są przez Nasz wykwalifikowany zespół z wysokiej jakości składników.
                    Posiadamy własną wędzarnie łososia na zimno oraz gorąco.
                </div>
            </div>

            <div className="offer__tiles max-w-[1240px]">
                <div className="offer__tile">
                    <img src={ofertaSushi1} alt="Oferta słodki" className="offer__image" />
                    <div className="offer__item">
                        <img src={ofertaSushiIco1} alt="Ikona" className="offer__icon" />
                        <div className="offer__item--catering" >Sushi</div>
                        <div className="offer__item--romb"></div>
                        <div className="offer__item--line"></div>
                        <h2 className="offer__item--title">CALIFORNIA</h2>
                        <NavLink to="/kategorie/catering-sushi"  className="offer__button"> SPRAWDZ OFERTĘ </NavLink>
                    </div>
                </div>
                <div className="offer__tile">
                    <img src={ofertaSushi2} alt="Oferta słodki" className="offer__image" />
                    <div className="offer__item">
                        <img src={ofertaSushiIco2} alt="Ikona" className="offer__icon" />
                        <div className="offer__item--catering" >Sushi</div>
                        <div className="offer__item--romb"></div>
                        <div className="offer__item--line"></div>
                        <h2 className="offer__item--title">FUTOMAKI</h2>
                        <NavLink to="/kategorie/catering-sushi"  className="offer__button"> SPRAWDZ OFERTĘ </NavLink>
                    </div>
                </div>
                <div className="offer__tile">
                    <img src={ofertaSushi3} alt="Oferta słodki" className="offer__image" />
                    <div className="offer__item">
                        <img src={ofertaSushiIco3} alt="Ikona" className="offer__icon" />
                        <div className="offer__item--catering" >Sushi</div>
                        <div className="offer__item--romb"></div>
                        <div className="offer__item--line"></div>
                        <h2 className="offer__item--title">NIGIRI</h2>
                        <NavLink to="/kategorie/catering-sushi"  className="offer__button"> SPRAWDZ OFERTĘ </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
};
