import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from '../assets/logo.svg'
import '../styles/header.css'

class Header extends React.Component{
 
    
    render() {
        return (
            <header>
                <div className='header'>
                    <img src={logo} alt='kasa' className='kasa-logo' />
                    <Router>
                        <nav>
                            <ul className='kasa-nav'>
                                <li>
                                 <Link to="/">Acceuil</Link>
                                </li>
                                <li>
                                <Link to="/about">A Propos</Link>
                                </li>
                            </ul>
                        </nav>
                    </Router>
                </div>
            </header>
        )
    }
}

export default Header