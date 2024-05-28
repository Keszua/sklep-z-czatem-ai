
const renderCaptchaImage = (captchaText: string) => {
    // Definiujemy rozmiar obrazka SVG
    const width = 150;
    const height = 50;
  
    // Tworzymy elementy SVG z tekstem i zakłóceniami (linie, kropki)
    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="#F3F3F3"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="#333">${captchaText}</text>
        ${Array.from({ length: 5 }).map(
          () =>
            `<line x1="${Math.random() * width}" y1="${Math.random() * height}" x2="${
              Math.random() * width
            }" y2="${Math.random() * height}" stroke-width="1" stroke="rgba(0,0,0,0.1)"/>`
        ).join('')}
      </svg>
    `;
    
    return svgContent;
};

export const generateCaptchaText = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

interface SimpleCaptchaProps {
    captchaText: string;
    setCaptchaText: (text: string) => void;
    userInput: string;
    setUserInput: (input: string) => void;
  };

export const SimpleCaptcha = ({
    captchaText,
    setCaptchaText,
    // userInput,
    setUserInput,
}: SimpleCaptchaProps) => {
    
    const refreshCaptcha = () => {
        const newCaptchaText = generateCaptchaText();
        setCaptchaText(newCaptchaText);
        setUserInput('');
    };

    return (
        <div>
            <div className="flex flex-row items-center justify-center ">
                <div className="flex items-center m-4">
                    <img
                        src={`data:image/svg+xml;base64,${btoa(renderCaptchaImage(captchaText))}`}
                        alt="captcha"
                    />
                </div>
                <div className="flex items-center m-4">
                    <button 
                        type="button" 
                        className="bg-gold text-black rounded "
                        style={{ 
                            width: '150px', 
                            height: '50px',
                        }}
                        onClick={refreshCaptcha}>
                        Generuj nowy obraz
                    </button>
                </div>
            </div>  
        </div>
    );
};