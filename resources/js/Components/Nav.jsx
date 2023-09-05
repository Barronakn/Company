import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import Menu_icon from "../../../public/assets/menu_btn.png"

const Nav = () => {
    //Apparution du menu
    const [click, setClick] = useState(false);


    const navbar = document.querySelector(".navbar");
    const menu_icon = document.querySelector(".menu-icon");
    const remove_icon = document.querySelector(".remove-icon");

    const handleClick = () => {
        setClick();
        navbar.style.display = "block"
        menu_icon.style.display = "none"
        remove_icon.style.display = "block"
    }

    const handleClickRemove = () => {
        setClick(false);
        navbar.style.display = "none"
        menu_icon.style.display = "block"
        remove_icon.style.display = "none"

    }

    const { url } = usePage();
    const navLinks = [
        { name: "Home", url: "/", },
        { name: "About Us", url: "/aboutus", },
        { name: "Services", url: "/services", },
        { name: "Portfolio", url: "/portfolio", },
        { name: "Blog", url: "/blog", },
        { name: "Contact", url: "/contact", },
    ];

    return (
        <div className='menu fixed left-0 w-full uppercase shadow-lg flex justify-around items-center font-sans text-black bg-white h-20'>
            <div className='logo flex gap-80'>
                <h1 className='font-bold text-2xl'>
                    <Link href='/'><span className='text-green-500'>Com</span>pany</Link>
                </h1>
                <div onClick={handleClick} className="menu-icon none cursor-pointer">
                    <img loading='lazy' src={Menu_icon} alt="menu-icon" />
                </div>
                <span onClick={handleClickRemove} className='text-2xl none remove-icon'>×</span>
            </div>

            {
                click ? (
                    <nav className='navbar'>
                        <ul className='flex gap-12'>
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link className={url === link.url ? "active text-green-500" : "text-black hover:text-green-500 text-xs font-bold"} href={link.url}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                ) : (
                    <nav className='navbar'>
                        <ul className='flex gap-12'>
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link className={url === link.url ? "active text-green-500" : "text-black hover:text-green-500 text-xs font-bold"} href={link.url}>{link.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                )
            }
        </div>
    );
};

export default Nav;
