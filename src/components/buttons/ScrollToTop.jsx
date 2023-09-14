import React, { useState, useEffect } from 'react';
import { ArrowUpCircleFill } from 'react-bootstrap-icons';
// import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`${isVisible ? 'opacity-100':'opacity-0'} ease-in-out duration-200 z-[1000] border-none m-0 rounded-full bg-white p-0 fixed bottom-[40px] right-[40px] z-1 pointer`}  onClick={goTop}>
            <ArrowUpCircleFill color="#fbc02d" size={60}/>
        </button>
    );
}

export default ScrollToTop