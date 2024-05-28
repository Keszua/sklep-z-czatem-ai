import React, { useState } from 'react';
import { SimpleCaptcha, generateCaptchaText } from './SimpleCaptcha';
                        
interface ContactFormProps {
  onSubmit: (subject: string, email: string, phone: string, message: string, captcha: string, termsAccepted: boolean) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    // const [captcha, setCaptcha] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [captchaText, setCaptchaText] = useState(generateCaptchaText());

    const [errors, setErrors] = useState({
        subject: false,
        email: false,
        phone: false,
        message: false,
        captcha: false
    });

    const validateFields = () => {
        const newErrors = {
            subject: !subject,
            email: !email,
            phone: !phone,
            message: !message,
            captcha: captchaText !== userInput
        };
        setErrors(newErrors);
        return Object.values(newErrors).every(value => !value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isValid = validateFields();
        if (!isValid) {
            return;
        }

        setUserInput('');
        setCaptchaText(generateCaptchaText()); 

        if (captchaText !== userInput) {
            alert('Wpisany kod captcha jest niepoprawny.');
            return;
        }

        if (!termsAccepted) {
            alert('Nie wyraziłeś jasno zgody na przetwarzanie Twoich danych.');
            return;
        }

        onSubmit(subject, email, phone, message, captchaText, termsAccepted);
    };

    const inputClassName = "block w-full mt-1 p-2 border border-gold rounded mb-4";
    const errorBorderClass = "border-4 border-red-600";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-4 my-3 w-full mx-auto border border-gold rounded" 
            style = {{
                width: "95%"
            }}>
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                minLength={3}
                maxLength={100}
                placeholder="Temat"
                // className="block w-full mt-1 p-2 border border-gold rounded mb-4"
                className={`${inputClassName} ${errors.subject ? errorBorderClass : 'border-gold'}`}
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój adres email"
                maxLength={30}
                // className="block w-full mt-1 p-2 border border-gold rounded mb-4"
                className={`${inputClassName} ${errors.email ? errorBorderClass : 'border-gold'}`}
            />
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={9}
                maxLength={30}
                placeholder="Telefon"
                // className="block w-full mt-1 p-2 border border-gold rounded mb-4"
                className={`${inputClassName} ${errors.phone ? errorBorderClass : 'border-gold'}`}
                pattern="(\+\d+)?\s*\d+(?:[ -]*\d+)*"
                title="Dopuszczalne tylko cyfry"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Treść"
                minLength={10}
                maxLength={500}
                className={`${inputClassName} h-24 overflow-y-auto ${errors.message ? errorBorderClass : 'border-gold'}`}
            />

            <div className="mb-4">
                Przepisz tekst z obrazka
                <SimpleCaptcha 
                    captchaText={captchaText} 
                    setCaptchaText={setCaptchaText} 
                    userInput={userInput} 
                    setUserInput={setUserInput} 
                />
            </div>

            <input
                // className="block w-full mt-1 p-2 border border-gold rounded"
                className={`${inputClassName} ${errors.captcha ? errorBorderClass : 'border-gold'}`}
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Tekst z obrazka"
            />

            <label className="items-center mb-4">
                <input type="checkbox" checked={termsAccepted } onChange={(e) => setTermsAccepted (e.target.checked)} className="mr-2" />
                Klikając w przycisk „Wyślij” wyrażasz zgodę na przetwarzanie Twoich danych osobowych.
                {showInfo && <p>
                    <br/>Dane osobowe są przetwarzane przez BIURMEBL Marcin Neska, który będzie ich Administratorem. 
                    Mamy siedzibę w Radomiu (26&nbsp;-&nbsp;600) przy ul. Radosna 6a. 
                    Będziemy przetwarzać Twoje dane osobowe w celu zapewnienia komunikacji pomiędzy Tobą, 
                    a tym Dostawcą usług lub produktów, w tym poinformowania Dostawcy kto jest nadawcą wiadomości. 
                    Na wypadek rozstrzygania ewentualnych roszczeń lub sporów będziemy przechowywać Twoje dane przez 12 miesięcy. 
                    W ten sposób zabezpieczamy interesy BIURMEBL Marcin Neska i wszystkich naszych Użytkowników. 
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

            <button type="submit" className="bg-gold text-white font-bold py-2 px-4 rounded hover:text-black">
                Wyślij
            </button>
        </form>
    );
};