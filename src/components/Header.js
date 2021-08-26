import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../assets/logo.svg'
import '../styles/Header.css'

class Header extends React.Component{
 
    
    render() {
        return (
            <header className='header'>
                    <NavLink  exact to="/">   
                        <img src={logo} alt='kasa' className='kasa-logo' />
                    </NavLink>
                    <nav className='kasa-nav'>
                        <ul className='kasa-nav-list__link'>
                            <NavLink exact className='nav-link' activeClassName="current" to="/">
                                <li className='kasa-mg-r1 kasa-red'>Accueil</li>
                            </NavLink>
                            <NavLink className='nav-link' activeClassName="current" to="/about">
                                <li className='kasa-red'>A Propos</li>
                            </NavLink>
                        </ul>
                    </nav>
            </header>
        )
    }
}

export default Header