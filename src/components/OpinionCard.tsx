// import React from 'react';


interface StarProps {
    filled: boolean;
};
  
export const Star: React.FC<StarProps & React.SVGProps<SVGSVGElement>> = ({ filled, ...props }) => {
    const fillColor = filled ? '#B87332' : 'none';
    const strokeColor = '#B87332';
  
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={fillColor}
            stroke={strokeColor}
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="1"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
      </svg>
    );
  };
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


interface OpinionProps {
    author: string;
    date: string;
    content: string;
    rating: number;
};

const MAX_STARS = 5;

export const OpinionCard: React.FC<OpinionProps> = ({ author, date, content, rating }) => {
    // Funkcja generująca gwiazdki na podstawie oceny
    const renderStars = () => {
        return Array.from({ length: MAX_STARS }, (_, index) => (
            <Star key={index} filled={index < rating} />
        ));
    };

    return (
    <div className="flex flex-col opinion-card border border-gold rounded p-4 my-3 w-full h-full">
        <div className="flex flex-row justify-around items-center mb-2 ">        
            <div className="flex items-center">{renderStars()}</div>
                <div className="ml-2 text-sm ">
                    <div className="text-gold text-center">{author}</div>
                    <div className="text-gray-600 text-center">{date}</div>
                </div>
            </div>
        <div className="ml-4 overflow-auto max-h-64">{content}</div> {/* Dodano style CSS tutaj */}
    </div>
    );
};
