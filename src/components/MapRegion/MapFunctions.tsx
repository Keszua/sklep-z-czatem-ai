export const generateCircularPolygon = (center: [number, number], radius: number, numberOfSides: number): [number, number][] => {
        const coords: [number, number][] = [];
        const d2r = Math.PI / 180;   // stopnie na radiany
        const r2d = 180 / Math.PI;   // radiany na stopnie
        const earthRadius = 6371;    // promień Ziemi w kilometrach
    
        // Generowanie punktów
        for (let i = 0; i < numberOfSides; i++) {
            const angle = 2 * Math.PI / numberOfSides * i;
            const dx = radius * Math.cos(angle);
            const dy = radius * Math.sin(angle);
    
            let lat = center[0] + (dy / r2d) / earthRadius;
            let lng = center[1] + (dx / r2d) / (earthRadius * Math.cos(center[0] * d2r));
    
            // Korekta dla przekraczania meridianu 180 stopni
            lng = lng > 180 ? lng - 360 : lng;
            lng = lng < -180 ? lng + 360 : lng;
    
            // coords.push([lat, lng]);
            coords.push([lng, lat]);
        }
    
        // Zamknięcie poligonu
        coords.push(coords[0]);
    
        return coords;
};


export const marker = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
</svg>
`;

