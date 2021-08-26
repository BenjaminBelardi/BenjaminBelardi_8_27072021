import react from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Card.css'


//const locationsList = require('../datas/logements.json')

class Card extends react.Component{
    
    render (){
        return (
                <NavLink className='kasa-card-link' key={this.props.logement.id}  to={{
                    pathname : `/logement/${this.props.logement.id}`,
                    state:{
                        logement : true
                        }
                    }}>
                    <article>
                        <img src={this.props.logement.cover} alt='kasa-card-img' className='kasa-card__img'/>
                        <p className='kasa-card__txt'>{this.props.logement.title}</p>
                    </article>
                </NavLink>
        )
    }
}
export default Card