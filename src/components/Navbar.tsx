import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";

import './Navbar.scss';
import { navLinks } from "../constants";
import { logo, menu, close, logoSushi } from "../assets";
// import { flag_en_icon, flag_pl_icon } from "./LangIconFlags";


export const Navbar = () => {
//   const {t} = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isLanguageOpen, setIsLanguageOpen] = useState(false);

//   const handleLanguageChange = (selectedLanguage: string) => {
//     i18next.changeLanguage(selectedLanguage);
//     setIsLanguageOpen(false);
//   };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 40) { // przewijanie w dół
        setScrolled(true);
      } else { // przewijanie w górę
        setScrolled(false);
      }
      // Aktualizuj ostatnią pozycję przewijania, ale nie gdy jesteśmy na górze strony
      if (scrollTop > 0) {
        setLastScrollTop(scrollTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);


  const boxShadowOfLink = ({isActive}: {isActive: boolean}) => 
  ({color: isActive ? '#C19D56' : '#FFF'})


  return (
    <div  className="navbar fixed w-full text-white top-12 left-0 " 
        style={{zIndex: 1001 }}
    >

        <nav className={`${scrolled ? 'top-[-145px]' : 'top-[0px]'} ${lastScrollTop > 20 ? 'bg-black' : 'bg-red'} relative flex flex-row items-center  border-b border-white border-opacity-20`}
            style={{
                justifyContent: 'space-between',
                padding: '5px 20px',
            }}
        >

            <NavLink to="/"    style={boxShadowOfLink} className='navbar__menu--element'> 
                <img src={logoSushi} alt="logo" className=" h-[46px] object-contain" />
            </NavLink>

            {/* <ul className='list-none hidden sm:flex flex-row gap-10  flex flex-row items-center'>

                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`${active === nav.id ? "text-gold" : "text-white"} 
                            hover:text-gold text-[18px] font-medium cursor-pointer`
                        }
                        style={{
                            fontWeight: '600',
                            fontSize: '15px',
                            padding: '18px 0px',
                        }}
                        onClick={() => setActive(nav.id)}
                    >
                        <a href={`#${nav.id}`}>{(nav.title)}</a>
                    </li>
                ))}
            
            </ul>  */}

            <ul className='list-none hidden sm:flex flex-row gap-10  flex flex-row items-center'>
                <NavLink to="/"                          style={boxShadowOfLink} className='navbar__menu--element'> STRONA GŁÓWNA </NavLink>
                <NavLink to="/kategorie/catering-sushi"  style={boxShadowOfLink} className='navbar__menu--element'> ZAMÓW ONLINE  </NavLink>
                <NavLink to="/mapa"                      style={boxShadowOfLink} className='navbar__menu--element'> MAPA DOSTAWY  </NavLink>
                <NavLink to="/kontakt"                   style={boxShadowOfLink} className='navbar__menu--element'> KONTAKT       </NavLink>
            </ul> 

            <div style={{
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    alignItems: 'center',
                }} >
                    <NavLink to="/koszyk"
                        style={{
                            display: 'flex',
                            flexFlow: 'row nowrap',
                            alignItems: 'center',
                        }}  
                    > 
                        <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00ODguNDY4LDE4OC4zODRIMzczLjY0M0wyOTIuOTI1LDMyLjc0N2MtMi44OTQtNS41OC03Ljc4Ny05LjY5OS0xMy43NzktMTEuNTk5Yy01Ljk5My0xLjktMTIuMzY1LTEuMzUyLTE3Ljk0NSwxLjU0MiAgICBjLTEuOTQsMS4wMDYtMy42NzYsMi4yNS01LjIwMSwzLjY3M2MtMS41MjYtMS40MjItMy4yNjItMi42NjctNS4yMDItMy42NzNjLTUuNTc5LTIuODk0LTExLjk1My0zLjQ0MS0xNy45NDUtMS41NDIgICAgYy01Ljk5MiwxLjg5OS0xMC44ODUsNi4wMTktMTMuNzc5LDExLjU5OWwtODUuMDgyLDE2NC4wNTJjLTIuODk0LDUuNTgtMy40NDIsMTEuOTUzLTEuNTQyLDE3Ljk0NSAgICBjMC42NDgsMi4wNDUsMS41NzQsMy45NTEsMi43MSw1LjcwNEgyMy41MzJjLTQuNzA1LDAtOC41MzItMy44MjctOC41MzItOC41MzJjMC00LjcwNCwzLjgyOC04LjUzMiw4LjUzMi04LjUzMmg4NS41MDUgICAgYzQuMTQyLDAsNy41LTMuMzU3LDcuNS03LjVjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNUgyMy41MzJDMTAuNTU3LDE4OC4zODQsMCwxOTguOTQxLDAsMjExLjkxNiAgICBjMCwxMC43NjEsNy4yNjIsMTkuODUxLDE3LjE0MSwyMi42NDNsNDMuNDM5LDIzMS42N2MyLjc5NSwxNC45MTIsMTUuODM2LDI1LjczNSwzMS4wMDgsMjUuNzM1aDMyOC44MjUgICAgYzE1LjE3MiwwLDI4LjIxMi0xMC44MjMsMzEuMDA4LTI1LjczNWw0My40MzktMjMxLjY3MWM5Ljg3OC0yLjc5MSwxNy4xNC0xMS44ODEsMTcuMTQtMjIuNjQyICAgIEM1MTIsMTk4Ljk0LDUwMS40NDMsMTg4LjM4NCw0ODguNDY4LDE4OC4zODR6IE0yNjguMTA3LDM2LjAwN2MyLjAyMy0xLjA0OSw0LjMzNC0xLjI0OCw2LjUwNi0wLjU1OSAgICBjMi4xNzIsMC42ODgsMy45NDcsMi4xODIsNC45OTYsNC4yMDVsODUuMDgyLDE2NC4wNTNjMS4wNDksMi4wMjMsMS4yNDgsNC4zMzQsMC41NTksNi41MDZjLTAuNjg4LDIuMTczLTIuMTgyLDMuOTQ3LTQuMjA2LDQuOTk2ICAgIGMtMi4wMjIsMS4wNS00LjMzMywxLjI0OC02LjUwNiwwLjU2Yy0yLjE3My0wLjY4OC0zLjk0Ny0yLjE4Mi00Ljk5Ni00LjIwNUwyNjQuNDYxLDQ3LjUwOSAgICBDMjYyLjI5NSw0My4zMzMsMjYzLjkzMSwzOC4xNzMsMjY4LjEwNywzNi4wMDd6IE0zNjcuOTc5LDIzNS40NDlsLTcuMDk3LDczLjE3OEgyNjMuNXYtNzMuMTc4SDM2Ny45Nzl6IE0yNTYsNjMuNzc1ICAgIGw4MC4yMjgsMTU0LjY5MmMwLjM1NCwwLjY4NCwwLjc0LDEuMzQ0LDEuMTUzLDEuOTgxSDE3NC42MTljMC40MTMtMC42MzcsMC43OTktMS4yOTcsMS4xNTMtMS45OGw3LjgyMy0xNS4wODNIMjk3Ljc1ICAgIGM0LjE0MiwwLDcuNS0zLjM1Nyw3LjUtNy41YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVIMTkxLjM3NEwyNTYsNjMuNzc1eiBNMTQ3LjMwOCwyMDMuNzA1bDg1LjA4My0xNjQuMDUzICAgIGMxLjA0OS0yLjAyMywyLjgyMy0zLjUxNyw0Ljk5Ni00LjIwNWMwLjg1LTAuMjcsMS43MjEtMC40MDMsMi41ODgtMC40MDNjMS4zNDksMCwyLjY4NywwLjMyNCwzLjkxOCwwLjk2MiAgICBjNC4xNzYsMi4xNjcsNS44MTIsNy4zMjYsMy42NDYsMTEuNTAybC04NS4wODMsMTY0LjA1M2MtMS4wNDksMi4wMjMtMi44MjMsMy41MTctNC45OTYsNC4yMDVjLTIuMTcxLDAuNjg4LTQuNDgyLDAuNDktNi41MDYtMC41NiAgICBjLTIuMDIzLTEuMDQ5LTMuNTE3LTIuODIzLTQuMjA1LTQuOTk2QzE0Ni4wNiwyMDguMDM5LDE0Ni4yNTksMjA1LjcyOSwxNDcuMzA4LDIwMy43MDV6IE0zMi41NjksMjM1LjQ0OWg5Ni4zODJsNy4wOTcsNzMuMTc4ICAgIEg0Ni4yOUwzMi41NjksMjM1LjQ0OXogTTQ5LjEwMywzMjMuNjI2aDg4LjRsNy4wOTcsNzMuMTc3SDYyLjgyM0w0OS4xMDMsMzIzLjYyNnogTTkxLjU4Nyw0NzYuOTY1ICAgIGMtNy45NTgsMC0xNC43OTgtNS42NzctMTYuMjY0LTEzLjQ5OWwtOS42ODctNTEuNjYzaDgwLjQxOGw2LjMyLDY1LjE2Mkg5MS41ODd6IE0yNDguNSw0NzYuOTY1aC04MS4wNTdsLTYuMzE5LTY1LjE2MkgyNDguNSAgICBWNDc2Ljk2NXogTTI0OC41LDM5Ni44MDNoLTg4LjgzMWwtNy4wOTctNzMuMTc3SDI0OC41VjM5Ni44MDN6IE0yNDguNSwzMDguNjI3aC05Ny4zODJsLTcuMDk3LTczLjE3OEgyNDguNVYzMDguNjI3eiAgICAgTTM0NC41NTcsNDc2Ljk2NUgyNjMuNXYtNjUuMTYyaDg3LjM3NkwzNDQuNTU3LDQ3Ni45NjV6IE0zNTIuMzMxLDM5Ni44MDRIMjYzLjV2LTczLjE3N2g5NS45MjhMMzUyLjMzMSwzOTYuODA0eiAgICAgTTQzNi42NzcsNDYzLjQ2NmMtMS40NjYsNy44MjItOC4zMDcsMTMuNDk5LTE2LjI2NSwxMy40OTloLTYwLjc4Nmw2LjMyLTY1LjE2Mmg4MC40MThMNDM2LjY3Nyw0NjMuNDY2eiBNNDQ5LjE3NywzOTYuODA0ICAgIGgtODEuNzc2bDcuMDk3LTczLjE3N2g4OC40TDQ0OS4xNzcsMzk2LjgwNHogTTQ2NS43MSwzMDguNjI2aC04OS43NTdsNy4wOTctNzMuMTc4aDk2LjM4MUw0NjUuNzEsMzA4LjYyNnogTTQ4OC40NjgsMjIwLjQ0OSAgICBoLTAuMTIyYy0wLjAwNSwwLTAuMDA5LDAtMC4wMTQsMEgzNzYuODRjMS4xMzYtMS43NTMsMi4wNjEtMy42NTksMi43MS01LjcwNGMxLjE4My0zLjczMywxLjQxNi03LjYxNSwwLjcyNC0xMS4zNmgxMDguMTk0ICAgIGM0LjcwNSwwLDguNTMyLDMuODI4LDguNTMyLDguNTMyQzQ5NywyMTYuNjIxLDQ5My4xNzIsMjIwLjQ0OSw0ODguNDY4LDIyMC40NDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNDMTlENTYiIGRhdGEtb2xkX2NvbG9yPSIjYzE5ZDU2Ij48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" 
                            alt="logo" 
                            className="h-[36px] object-contain" />
                    </NavLink>

                    <div style={{ 
                        display: 'flex',
                        flexFlow: 'column',
                        float: 'left', marginLeft: '20px', }}>
                        <div style={{ fontSize: '12px', fontWeight: '400' }}>
                            KOSZYK
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '700' }}>
                            131.99zł
                        </div>
                    </div>
            </div>



        {/* hamburger menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] 
                    ${active === nav.title ? "text-secondary" : "text-primary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
       
    </nav>
    </div>
  );
};
