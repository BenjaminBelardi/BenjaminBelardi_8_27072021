import React from 'react';
import '../styles/Footer.css'
import styled from 'styled-components'
//import logo from '../assets/logo.svg'
import {ReactComponent as Logo} from '../assets/logo.svg'


class Footer extends React.Component {
    
    render(){
        const Svg = styled(Logo)`
        path{
            fill = "#fff"
        }
        `

        return(
            <div className="kasa-footer-container">
                {/* <img src={logo} alt='kasa-logo' className='kasa-footer-logo' /> */}
                <Svg />
                <p>&copy; 2020 Kasa. All rights reserved </p>
            </div>

        )
    }

}
export default Footer