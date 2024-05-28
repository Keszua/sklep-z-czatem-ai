import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundBoczneMenu, BackgroundSushi, mapaRegionu, sushi1, sushi10, sushi11, sushi12, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9, sushiMenu1, sushiMenu2, sushiMenu3, sushiMenu4, sushiMenu5 } from "../assets";
import './SushiView2.scss';
import { faAngleDown, faAngleUp, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

type ExpandedSectionsType = {
    [key: number]: boolean;
};

export const SushiViev2 = () => {

    const [expandedSections, setExpandedSections] = useState<ExpandedSectionsType>({});
    const sushiLiast1 = [
        {
            id: 1,
            title: "Aburi Salmon California 8szt",
            price: 25.00,
            img: sushi1,
        },
        {
            id: 2,
            title: "Aperitif box 12szt",
            price: 40.99,
            img: sushi2,
        },
        {
            id: 3,
            title: "California z krewetką i prażoną cebulką",
            price: 29.99,
            img: sushi3,
        },
        {
            id: 4,
            title: "California z pieczonym łososiem w sezamie",
            price: 29.99,
            img: sushi4,
        },
        {
            id: 5,
            title: "California z surowym łososiem w sezamie",
            price: 20.99,
            img: sushi5,
        },
        {
            id: 6,
            title: "Carnival 48szt",
            price: 131.99,
            img: sushi6,
        },
        {
            id: 7,
            title: "Ebi dragon roll",
            price: 36.99,
            img: sushi7,
        },
        {
            id: 8,
            title: "Ebi panko 8szt",
            price: 29.99,
            img: sushi8,
        },
        {
            id: 9,
            title: "Geisha 40szt",
            price: 119.99,
            img: sushi9,
        },
        {
            id: 10,
            title: "Green Dragon Sushi Box 8szt",
            price: 24.99,
            img: sushi10,
        },
        {
            id: 11,
            title: "Grill Bento Box - Kurczak Teryaki",
            price: 36.99,
            img: sushi11,
        },
        {
            id: 12,
            title: "Happy Sushi Box 40szt",
            price: 99.99,
            img: sushi12,
        },
    ];

    const sushiLiast2 = [
        {
            id: 1,
            title: "Aburi Salmon California 8szt",
            price: 25.00,
            img: sushi1,
        },
        {
            id: 2,
            title: "Aperitif box 12szt",
            price: 40.99,
            img: sushi2,
        },
        {
            id: 3,
            title: "California z krewetką i prażoną cebulką",
            price: 29.99,
            img: sushi3,
        },
        {
            id: 4,
            title: "California z pieczonym łososiem w sezamie",
            price: 29.99,
            img: sushi4,
        },
        {
            id: 5,
            title: "California z surowym łososiem w sezamie",
            price: 20.99,
            img: sushi5,
        },
    ]

    const boxShadowOfLink = ({isActive}: {isActive: boolean}) => 
    ({color: isActive ? '#C19D56' : '#FFF'})

    const toggleSection = (sectionId: number) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId] // Przełącza wartość true/false dla danej sekcji
        }));
    };

    return (
        <div  className="sushi-view flex flex-col items-center w-full text-white" >

            <h1 className="sushi-view__baner w-full">
                <img src={BackgroundSushi} alt="Sushi " />
            </h1>


            <div className="sushi2-contener mt-4">

                <div className="sushi2-view__content flex flex-col m-4">
                    <div className="offer__item--catering flex text-black h-[70px] m-0" >Catering Sushi</div>
                    <div className="offer__item--romb "></div>
                    <div className="offer__item--line w-full mb-4"></div>
                    <div className="offer__item--text text-black">
                        Sprawdź już dzisiaj ofertę i wybierz zestaw najlepszy dla siebie. 
                        Sushi Radom będzie najlepszym rozwiązaniem na twoją uroczystość.
                    </div>
                </div>



                <div className="sushi2-contener__pozycja_menu"
                    style={{ backgroundImage: `url(${sushiMenu1})` }}
                    onClick={() => toggleSection(1)}
                >
                    <div> </div>
                    <div className="sushi2-contener__pozycja_menu--napis">CALIFORNIA</div>
                    {
                        expandedSections[1] 
                        ? <FontAwesomeIcon icon={faAngleUp} className="h-[30px] text-white mr-4" />
                        :<FontAwesomeIcon icon={faAngleDown} className="h-[30px] text-white mr-4" />
                    }
                </div>
                <div className={`sushi2-contener__content ${expandedSections[1] ? 'expanded' : ''}`} >
                    <div className="sushi2_cards">
                        { 
                            sushiLiast1.map((sushi) => ( 
                                expandedSections[1] && (
                                <div key={sushi.id} className="sushi2_card flex flex-col items-center ">  
                                    <img src={sushi.img} alt="" />
                                    <div className="sushi2_card--title">{sushi.title}</div>
                                    <div className="sushi2_card--romb mx-4"></div>
                                    <div className="sushi2_card--line w-[40%] bg-[#eee] mx-4 mb-4"></div>
                                    <div className="sushi2_card--price">{sushi.price}zł</div>
                                    <button className="sushi2_card--button  text-sm px-6 py-2 my-4">
                                        DODAJ DO KOSZYKA
                                        &nbsp;<FontAwesomeIcon icon={faBasketShopping} className="text-[#9aa]" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div
                    className="sushi2-contener__pozycja_menu"
                    style={{ backgroundImage: `url(${sushiMenu2})` }}
                    onClick={() => toggleSection(2)}
                >
                    <div className="ml-4">&nbsp;</div>
                    <div className="sushi2-contener__pozycja_menu--napis">DODATKI DO ZESTAWÓW</div>
                    {
                        expandedSections[2] 
                        ? <FontAwesomeIcon icon={faAngleUp} className="h-[30px] text-white mr-4" />
                        :<FontAwesomeIcon icon={faAngleDown} className="h-[30px] text-white mr-4" />
                    }
                </div>
                <div className={`sushi2-contener__content ${expandedSections[2] ? 'expanded' : ''}`} >
                    <div className="sushi2_cards">
                        { 
                            sushiLiast2.map((sushi) => ( 
                                expandedSections[2] && (
                                <div key={sushi.id} className="sushi2_card flex flex-col items-center ">  
                                    <img src={sushi.img} alt="" />
                                    <div className="sushi2_card--title">{sushi.title}</div>
                                    <div className="sushi2_card--romb mx-4"></div>
                                    <div className="sushi2_card--line w-[40%] bg-[#eee] mx-4 mb-4"></div>
                                    <div className="sushi2_card--price">{sushi.price}zł</div>
                                    <button className="sushi2_card--button  text-sm px-6 py-2 my-4">
                                        DODAJ DO KOSZYKA
                                        &nbsp;<FontAwesomeIcon icon={faBasketShopping} className="text-[#9aa]" />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div
                    className="sushi2-contener__pozycja_menu"
                    style={{ backgroundImage: `url(${sushiMenu3})` }}
                >
                    <div></div>
                    <div className="sushi2-contener__pozycja_menu--napis">FUTOMAKI</div>
                    <FontAwesomeIcon icon={faAngleDown} className="h-[30px] text-white mr-4" />
                </div>

                <div
                    className="sushi2-contener__pozycja_menu"
                    style={{ backgroundImage: `url(${sushiMenu4})` }}
                >
                    <div></div>
                    <div className="sushi2-contener__pozycja_menu--napis">NA CIEPŁO</div>
                    <FontAwesomeIcon icon={faAngleDown} className="h-[30px] text-white mr-4" />
                </div>

                <div
                    className="sushi2-contener__pozycja_menu"
                    style={{ backgroundImage: `url(${sushiMenu5})` }}
                >
                    <div></div>
                    <div className="sushi2-contener__pozycja_menu--napis">NIGIRI</div>
                    <FontAwesomeIcon icon={faAngleDown} className="h-[30px] text-white mr-4" />
                </div>

                <div className="sushi2-contener__zamow-mapa">

                    <div className="sushi2-contener__zamow-mapa__obj flex items-center justify-center text-center text-white relative bg-black">
                        <img src={BackgroundBoczneMenu} alt="Zamów" />    
                        <div className="opis flex flex-col items-center text-center absolute inset-0 flex justify-center items-center">
                            <div className="offer__item--catering flex text-white">Zamów</div>
                            <div className="text-white text-base">Catering okolicznościowy</div>
                            <button className="text-white border-2 text-sm font-bold border-white px-6 py-2 my-4">ZAMÓW TERAZ</button>
                        </div>
                    </div>

                    <div className="sushi2-contener__zamow-mapa__obj bg-black"
                        style={{alignSelf: "center"}}>
                        <NavLink to="/mapa"  style={boxShadowOfLink} 
                            className="flex items-center justify-center text-center text-white relative mx-auto"
                        >
                            <img src={mapaRegionu} alt="Mapa" /> 
                            <div className="opis flex flex-col items-center text-center absolute inset-0 flex justify-center items-center">
                                <div className="offer__item--catering flex text-black">Strefy dostawy</div>
                            </div>
                        </NavLink>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
