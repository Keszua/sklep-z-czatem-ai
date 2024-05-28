import { useState } from "react";
import { BackgroundSushi} from "../assets";
import { mapa } from "../components";

import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { point, polygon } from '@turf/helpers';
import { generateCircularPolygon } from "../components/MapRegion";

interface GeoJSON {
    type: "Feature",
    properties: {
        name: string,
        price: number
    },
    geometry: {
        type: string,
        coordinates: number[][][]
    }
}

interface GeocodeResult {
    name: string;
    properties: {
        geocoding: {
            label: string;
            score: number;
            type: string;
        };
    };
    type: string;
    geometry: {
        type: string;
        coordinates: [number, number];
    };
    center: [number, number];
}

// Przykładowy region GeoJSON wokół punktu centralnego
const sampleRegion: GeoJSON = {
    type: "Feature",
    properties: {
        name: "Central Zone",
        price: 5,
    },
    geometry: {
        type: "Polygon",
        coordinates: [
            [
                [21.12927225224636, 51.408623] ,
                [21.125413193049955, 51.41443433644399] ,
                [21.1160966, 51.4168414708146] ,
                [21.106780006950043, 51.41443433644399] ,
                [21.10292094775364, 51.408623] ,
                [21.106780006950043, 51.40281166355601] ,
                [21.1160966, 51.400404529185394] ,
                [21.125413193049955, 51.40281166355601] ,
                [21.12927225224636, 51.408623] ,
            ]
        ]
    }
};

const sampleRegion2: GeoJSON = {
    type: "Feature",
    properties: {
        name: "Central Zone",
        price: 10,
    },
    geometry: {
        type: "Polygon",
        coordinates: [
            [

                [21.15123167265696, 51.408623] ,
                [21.140940848133216, 51.42411989718397] ,
                [21.1160966, 51.43053892217227] ,
                [21.091252351866782, 51.42411989718397] ,
                [21.08096152734304, 51.408623] ,
                [21.091252351866782, 51.393126102816026] ,
                [21.1160966, 51.38670707782773] ,
                [21.140940848133216, 51.393126102816026] ,
                [21.15123167265696, 51.408623] ,
            ]
        ]
    }
};


const calculateDeliveryPrice = (location: [number, number], regions: GeoJSON[]): number | null => {
    const pointToCheck = point(location);

    for (const region of regions) {
        const poly = polygon(region.geometry.coordinates);
        if (booleanPointInPolygon(pointToCheck, poly)) {
            return region.properties.price;
        }
    }

    return null; // Jeśli adres nie znajduje się w żadnym z regionów, zwróć null lub inną wartość reprezentującą brak ceny dostawy
};

export const MapView = () => {

    
    const boxShadowOfLink = ({isActive}: {isActive: boolean}) => 
        ({color: isActive ? '#C19D56' : '#FFF'})

    const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
    const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null);
    const [city, setCity] = useState('Radom');
    const [street, setStreet] = useState('Limanowskiego');
    const [houseNumber, setHouseNumber] = useState('134');
    const [geocodeResult, setGeocodeResult] = useState<[number, number] | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    
    const geocoder = L.Control.Geocoder.nominatim();
    
    
    const defultLocation: [number, number] = [51.408623, 21.1160966];
    
    // const newCode = generateCircularPolygon(defultLocation, 8000, 8);
    // console.log(newCode);
    
    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };
    
    const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(event.target.value);
    };
    
    const handleHouseNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHouseNumber(event.target.value);
    };


    const handleAddressSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setHasSearched(true);
        const address = `${street} ${houseNumber}, ${city}`;
        geocoder.geocode(address, (results: GeocodeResult[]) => {
            if (results.length > 0) {
                const { center } = results[0];

                setSelectedLocation(center);
                setGeocodeResult(center);
                
                const latLngArray: [number, number] = [center.lng, center.lat];
                const price = calculateDeliveryPrice(latLngArray, [sampleRegion, sampleRegion2]);
                setDeliveryPrice(price);

            } else {
                alert('Adres nie został znaleziony. Skontaktuj się z obsługa sklepu, tel (48) 381 10 35');
            }
        });
    };

  
    const svgIcon = new L.Icon({
        iconUrl: `data:image/svg+xml;base64,${btoa(mapa.markerSushiSVG)}`,
        iconSize: [35, 35], // Wymiary ikony
        iconAnchor: [17.5, 35], // Punkt, w którym ikona jest "przypinana" do mapy (środek dolnej krawędzi)
        popupAnchor: [0, -35], // Punkt, z którego będzie wyskakiwać Popup
        className: 'svg-icon' // Klasa dla dalszych stylizacji, jeśli jest potrzebna
      });


    return (
        <div  className="sushi-view flex flex-col items-center w-full text-white" >

            <h1 className="sushi-view__baner w-full">
                <img src={BackgroundSushi} alt="Sushi " />
            </h1>
            <div className="sushi-view__nav flex flex-row bg-navbar"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    width: '100%',
                    padding: '30px',
                    color: '#000',
                    fontSize: '14px',
            }}
            >
                <div>
                    STRONA GŁÓWNA  
                </div>
                <div className=" h-100 w-100"
                    style={{
                        color: '#C19D56',
                        fontSize: '14px',
                    }}
                >&nbsp;/ MAPA</div>

            </div>

            <div className="map__container flex flex-row max-w-[90%] h-[70vh] w-full m-4 bg-black">

                <MapContainer center={defultLocation} zoom={13} scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                > 
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"           
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <GeoJSON   data={sampleRegion2} style={{ color: 'yellow' }} />
                    <GeoJSON   data={sampleRegion} style={{ color: 'green' }} />
                    <Marker position={defultLocation} icon={svgIcon}>
                        <Popup>
                            Sushi <br/><br/> Radom
                        </Popup>
                    </Marker>

                    {selectedLocation && (
                        <Marker position={selectedLocation}>
                            <Popup>
                                Delivery Price: {deliveryPrice}
                            </Popup>
                        </Marker>
                    )}

                    {geocodeResult && (
                        <Marker position={geocodeResult}>
                            <Popup>
                                Delivery Price: {deliveryPrice}
                            </Popup>
                        </Marker>
                    )}

                    {/* <Polygon pathOptions={polygonOptions} positions={deliveryZonePoints} /> */}
                </MapContainer>
            </div>

            <div className="map__panel h-[100px] w-full m-8 w-[90%]">
                <label htmlFor="cityInput">Miasto:</label>
                <input  
                    type="text"
                    id="cityInput"
                    value={city}
                    onChange={handleCityChange}
                />
                <label htmlFor="streetInput">Ulica:</label>
                <input
                    type="text"
                    id="streetInput"
                    value={street}
                    onChange={handleStreetChange}
                />
                <label htmlFor="houseNumberInput">Numer domu/lokalu:</label>
                <input
                    type="text"
                    id="houseNumberInput"
                    style={{ width: '50px' }}
                    value={houseNumber}
                    onChange={handleHouseNumberChange}
                />
                <button type="button" onClick={handleAddressSubmit}> Szukaj </button>
                <div>
                {
                   hasSearched
                   ? (deliveryPrice !== null
                       ? <div> Cena dostawy: {deliveryPrice} PLN</div>
                       : <div> Brak dostawy w tym regionie</div>)
                   : <div>Wprowadź swoją lokalizację</div>
                }   
                </div> 
                    
            </div>


        </div>
    )
}

