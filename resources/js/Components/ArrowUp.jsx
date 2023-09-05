import React, { useState } from 'react';
import arrowUp from "../../../public/assets/arrow-up.svg";

const ArrowUp = () => {
    // Remonte en haut de la page au clic sur le bouton
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });
    return (
        <div className='arrowUp'>
            {visible && (
                <img
                    loading='lazy'
                    onClick={scrollToTop}
                    className="cursor-pointer fixed right-3 bottom-3 w-10 h-10 bg-transparent hover:bg-green-500 hover:rounded-full hover:p-1"
                    src={arrowUp}
                    alt="arrowUp"
                />
            )}
        </div>
    );
};

export default ArrowUp;
