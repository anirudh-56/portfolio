"use client";

import './Header.css'

import {useEffect, useState, useRef} from 'react';

const menus = ["Anirudh Yallapragada", "Home", "Experiences", "Projects"]

const Header = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.4,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersection){
                    setActiveSection(entry.target.id)
                }
            });
        }, options);

        menus.forEach((menu) => {
            const element = document.getElementById(menu);

            if(element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [menus])

    return (
        <header className="Header">
            <div className = "mobileView">
                <button className = "cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}></button>
            </div>

            <nav
                className={`${toggleMenu ? "flex": "hidden sm: flex"} 
                justify-center items-center gap-3 sm:gap-5 lg:gap-10 sm:flex-row flex-col mt-2 sm:mt-0`}
            >
            {
                menus.map((menu, i) => {
                    return (
                        <a 
                            key = {i}
                            href= {`#${menu}`}
                            className={`w-full sm:w-auto uppercase font-semibold text-base text-white text-center sm:px-3 lg:px-5 py-2 sm:py-1 rounded-2xl transition-all ease-linear hover:bg-green hover:shadow-md`}
                        >
                            {menu}
                        </a>
                    );
                })
            }
            <a href="mailto:aniyallapragada56@gmail.com">Contact</a>
            </nav>
        </header>
    );
}

export default Header;