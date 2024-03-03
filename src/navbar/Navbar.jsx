import React, { useState } from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="nav__container">
                <div className="nav__content">
                    <div className="nav__logo">
                        <img className='nav__logo-img' src="./coding_1159283.png" alt="code logo" />
                        <p className="nav__logo-text">CodeQuestor</p>
                    </div>
                    <ul className="nav__links">
                        <li className='nav__item'><a className='nav__link'>JavaScript</a></li>
                        <li className='nav__item'><a className='nav__link'>Reactjs</a></li>
                    </ul>
                    <div className="nav__mobile">
                        <button className='nav__mobile-button' onClick={handleToggleMenu}><GiHamburgerMenu /></button>
                    </div>
                </div>
            </div>
            <ul className={`nav__mobile-bar ${isOpen ? 'open' : ''}`}>
                <li className='nav__mobile-item'><a className='nav__mobile-link'>JavaScript</a></li>
                <li className='nav__mobile-item'><a className='nav__mobile-link'>Reactjs</a></li>
            </ul>
        </>
    )
}

export default Navbar