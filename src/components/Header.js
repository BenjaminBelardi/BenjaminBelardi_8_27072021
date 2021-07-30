import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import '../styles/header.css'

class Header extends React.Component{
 
    
    render() {
        return (
            <header>
                <div className='header'>
                    <img src={logo} alt='kasa' className='kasa-logo' />
                    <nav className='kasa-nav'>
                        <ul className='kasa-nav__link'>
                            <NavLink exact activeClassName="current" to="/">
                                <li className='kasa-mg-r3 kasa-red'>Accueil</li>
                            </NavLink>
                            <NavLink activeClassName="current" to="/about">
                                <li className='kasa-red'>A Propos</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header