"use client";
import './Bottom.css'
import {useEffect, useState, useRef} from 'react';

const menus = ["Anirudh Yallapragada", "Home", "Experiences", "Projects"]



const Bottom = () => {
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
            <header className="Bottom">
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className = "mobileView">
                    <button className = "cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}></button>
                </div>
    
                <nav
                    className={`${toggleMenu ? "flex": "hidden sm: flex"} 
                    justify-center items-center gap-3 sm:gap-5 lg:gap-10 sm:flex-row flex-col mt-2 sm:mt-0`}
                >
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-github"></i>
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


export default Bottom;