import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Cookie, Footer, Navbar, Topbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { HomePageView, SushiViev } from './views';
import { MapView } from './views/MapView';
import { SushiViev2 } from './views/SushiView2';
import { ChatBot } from './components/ChatBot/ChatBot';
// import { Whisper } from './components/Whisper/Whisper';


export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Topbar />
                <Navbar />
                <Routes >
                    <Route path="/" element={<HomePageView />} />
                    <Route path="/oferta/california" element={<SushiViev />} />
                    <Route path="/oferta/futomaki" element={<SushiViev />} />
                    <Route path="/oferta/nigiri" element={<SushiViev />} />

                    <Route path="/kategorie/catering-sushi" element={<SushiViev />} />
                    <Route path="/catering-sushi2" element={<SushiViev2 />} />
                    <Route path="/mapa" element={<MapView />} />
                    <Route path="*" element={<HomePageView />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            <ChatBot />
            {/* <Whisper /> */}
            <Cookie />
        </>
    )
}

