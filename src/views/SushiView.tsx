import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundBoczneMenu, BackgroundSushi, mapaRegionu, sushi1, sushi10, sushi11, sushi12, sushi2, sushi3, sushi4, sushi5, sushi6, sushi7, sushi8, sushi9 } from "../assets";
import './SushiView.scss';
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const SushiViev = () => {

    const sushiLiast = [
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

    const boxShadowOfLink = ({isActive}: {isActive: boolean}) => 
    ({color: isActive ? '#C19D56' : '#FFF'})


    return (
        <div  className="sushi-view flex flex-col items-center w-full text-white" >

            <h1 className="sushi-view__baner w-full">
                <img src={BackgroundSushi} alt="Sushi " />
            </h1>

            <div className="sushi-view__main-content flex flex-row max-w-[1240px] mt-4">
                {/* <div className="sushi-view__menu flex flex-col bg-navbar m-4 text-black  min-w-[260px] max-w-[280px]"
                    style={{fontSize: '20px'}}
                >
                    <div className="sushi-view__menu--header font-bold">
                        WYBIERZ RODZAJ
                    </div>

                    <div className="offer__item--romb mx-4"></div>
                    <div className="offer__item--line w-[80%] mx-4 mb-4"></div>
                    <div className="sushi-view__menu--item p-4">
                        <p  className="sushi-view__menu1"> CALIFORNIA </p> 
                        <p  className="sushi-view__menu1"> FUTOMAKI </p> 
                        <p  className="sushi-view__menu1"> NIGIRI </p> 
                        <p  className="sushi-view__menu1"> ZESTAWY </p> 
                    </div>

                    <div className="bg-white">
                        <div className="sushi-view__menu--header2 font-bold py-8 ">
                            FILTRUJ WG CENY
                        </div>
                        <div className="offer__item--romb mx-0"></div>
                        <div className="offer__item--line w-full mx-0 mb-4"></div>
                        <div className="flex flex-row items-center">
                            <div className="h-4 w-4 bg-gold">    </div>
                            <div className="h-2 w-full bg-[#DCDCDC]">    </div>
                            <div className="h-4 w-4 bg-white border-2 border-[#C19D56]">    </div>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <button className="text-gold border-2 text-sm font-bold border-[#C19D56] px-6 py-2 my-4">FILTRUJ</button>
                            <div className="flex text-base font-medium">
                                <div>Cena:&nbsp;</div>
                                <div className="text-gold">0zł</div>
                                <div>- 640zł</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-center text-white relative mx-auto">
                        <img src={BackgroundBoczneMenu} alt="Zamów" />    
                        <div className="opis flex flex-col items-center text-center absolute inset-0 flex justify-center items-center">
                            <div className="offer__item--catering flex text-white">Zamów</div>
                            <div className="text-white text-base">Catering okolicznościowy</div>
                            <button className="text-white border-2 text-sm font-bold border-white px-6 py-2 my-4">ZAMÓW TERAZ</button>
                        </div>
                    </div>

                    <div className="h-[50px] w-full bg-black my-8"
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

                </div> */}

                <div className="sushi-view__content flex flex-col m-4">
                    <div className="offer__item--catering flex text-black h-[70px] m-0" >Catering Sushi</div>
                    <div className="offer__item--romb "></div>
                    <div className="offer__item--line w-full mb-4"></div>
                    <div className="offer__item--text text-black">
                        Sprawdź już dzisiaj ofertę i wybierz zestaw najlepszy dla siebie. 
                        Sushi będzie najlepszym rozwiązaniem na twoją uroczystość.
                    </div>
                    <div className="flex flex-row justify-between text-sm text-[#999] my-4">
                        <div className="sushi-view__ilosc-wynikow">Wyświetlanie 1-12 z 50 wyników</div>
                        <div className="">
                            <span className="mx-4">Domyślne sortowanie</span> 
                            <span className="mx-4">12 produkty na stronie</span> 
                        </div>
                    </div>
                    {/* <div className="sushi_carts flex flex-row flex-wrap justify-between "> */}
                    <div className="sushi_cards">
                        { 
                            sushiLiast.map((sushi) => (
                                <div key={sushi.id} className="sushi_card flex flex-col items-center ">  
                                    <img src={sushi.img} alt="" />
                                    <div className="sushi_card--title">{sushi.title}</div>
                                    <div className="sushi_card--romb mx-4"></div>
                                    <div className="sushi_card--line w-[40%] bg-[#eee] mx-4 mb-4"></div>
                                    <div className="sushi_card--price">{sushi.price}zł</div>
                                    <button className="sushi_card--button  text-sm px-6 py-2 my-4">
                                        DODAJ DO KOSZYKA
                                        &nbsp;<FontAwesomeIcon icon={faBasketShopping} className="text-[#9aa]" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    

                </div>
            </div>

        </div>
    )
}
