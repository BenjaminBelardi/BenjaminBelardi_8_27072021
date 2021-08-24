import React from 'react';
import {NavLink} from "react-router-dom"
import '../styles/Error.css'


class Error extends React.Component {
    

    render(){
        return(
            <div className="kasa-error-container">
                <span className="kasa-error-number">{this.props.errorNumber}</span>
                <p className="kasa-error-txt">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink exact className='kasa-error-link' to="/">
                    <span >Retourner sur la page d'acceuil</span>
                </NavLink>
            </div>

        )
    }

}


export default Error