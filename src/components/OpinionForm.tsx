import { useState } from 'react';
import { Star } from './OpinionCard';

interface OpinionFormProps {
    onSubmit: (name: string, rating: number, message: string, termsAccepted: boolean) => void;
}

export const OpinionForm: React.FC<OpinionFormProps> = () => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const MAX_STARS = 5;

    const renderStars = () => {
        return Array.from({ length: MAX_STARS }, (_, index) => (
            <Star key={index} filled={index < rating} onClick={() => setRating(index + 1)} />
        ));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const isValid = validateFields();
        if (!isValid) {
            return;
        }

        if (!termsAccepted) {
            alert('Nie wyraziłeś jasno zgody na wyświeltenie Twojej opinii.');
            return;
        }

        alert(`Dziękujemy ${name} za wysłąnie opinii. Zanim pojawi się na ztronie, musi zostać zaakceptowana przez administratora.`);   
    };

    const [errors, setErrors] = useState({
        name: false,
        message: false,
    });

    const validateFields = () => {
        const newErrors = {
            name: !name,
            message: !message,
        };
        setErrors(newErrors);
        return Object.values(newErrors).every(value => !value);
    };

    const inputClassName = "block w-full mt-1 p-2 border border-gold rounded mb-4";
    const errorBorderClass = "border-4 border-red-500";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 my-3 w-full mx-auto border border-gold rounded" 
        style = {{
            width: "95%"
        }}>
            <label className="mb-4">
                Imię:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength={3}
                    maxLength={30}
                    placeholder="np. Jan K."
                    className={`${inputClassName} ${errors.name ? errorBorderClass : 'border-gold'}`}
                />
            </label>
            <div className="mb-4">
                Ocena:
                <div className="flex">
                    {renderStars()}
                </div>
            </div>
            <label className="mb-4">
                Opinia:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    minLength={10}
                    maxLength={300}
                    placeholder="Twoja opinia o nas..."
                    className={`${inputClassName} h-24 overflow-y-auto ${errors.message ? errorBorderClass : 'border-gold'}`}
                />
            </label>
            <label className="items-center mb-4">
                <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} className="mr-2" />
                Klikając w przycisk „Wyślij” wyrażasz zgodę na wyświetlenie opinii na stronie.
                {showInfo && <p>
                    Twoje dane osobowe są przetwarzane przez BIURMEBL Marcin Neska, który będzie ich Administratorem. 
                    Mamy siedzibę w Radomiu (26&nbsp;-&nbsp;600) przy ul. Radosna 6a. 
                    Będziemy przetwarzać Twoje dane osobowe w celu zapewnienia komunikacji pomiędzy Tobą, 
                    a tym Dostawcą usług lub produktów, w tym poinformowania Dostawcy kto jest nadawcą wiadomości. 
                    Na wypadek rozstrzygania ewentualnych roszczeń lub sporów będziemy przechowywać Twoje dane przez 12 miesięcy. 
                    w ten sposób zabezpieczamy interesy BIURMEBL Marcin Neska i wszystkich naszych Użytkowników. 
                    Gwarantujemy spełnienie Twoich praw wynikających z ogólnego rozporządzenia o ochronie danych (RODO) tj. prawo dostępu, 
                    sprostowania oraz usunięcia Twoich danych, ograniczenia ich przetwarzania, prawo do ich przenoszenia, 
                    prawo wniesienia sprzeciwu, niepodlegania zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu, 
                    prawo do cofnięcia zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania. 
                    Podanie danych jest dobrowolne, lecz niezbędne do realizacji wyżej wymienionego celu. 
                    
                </p>}
            </label>

            <div className='flex flex-row-reverse mb-4'>
                <button onClick={() => setShowInfo(!showInfo)} className="flex items-center">
                    {showInfo ? 'Zwiń' : 'Rozwiń więcej informacji'}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke={'#B87332'} strokeWidth={2} d={showInfo ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7' } />
                        </svg>
                </button>
            </div>

            <button type="submit" className="bg-gold text-white font-bold py-2 px-4 rounded hover:bg-gold-darker hover:text-black">
                Wyślij
            </button>
        </form>
    );
};