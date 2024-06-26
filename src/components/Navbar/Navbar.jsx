import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const {getTotalCartAmount} = useContext(StoreContext);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Link to={'/'}> <img className='logo' src={assets.logo} alt="logo" /></Link>
            <ul className={`navbar-menu ${isScrolled ? 'white' : ''}`}>
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search__icon" />
                <div className="navbar-search-icon">
                    <Link to={'/cart'}> <img src={assets.basket_icon} alt="basket__icon" /></Link>
                    <div className={`${getTotalCartAmount() === 0 ? '' : 'dot' }`}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar
