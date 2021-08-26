import React from 'react';
import '../styles/Footer.css'
import {ReactComponent as Logo} from '../assets/logo.svg'


class Footer extends React.Component {
    
    render(){
      
        return(
            <div className="kasa-footer-container">
                <Logo className="kasa-footer-logo"/>
                <p>&copy; 2020 Kasa. All rights reserved </p>
            </div>

        )
    }

}
export default Footer