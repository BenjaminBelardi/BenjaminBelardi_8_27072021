import react from 'react'
import {Link} from 'react-router-dom'
import '../styles/Card.css'



class Card extends react.Component{
    
    render (){
        return (
                <Link className='kasa-card-link' key={this.props.logement.id}  to={{
                    pathname : `/logement/${this.props.logement.id}`
                    }}>
                    <article className="card-container">
                        <img src={this.props.logement.cover} alt='kasa-card-img' className='kasa-card__img'/>
                        <p className='kasa-card__txt'>{this.props.logement.title}</p>
                    </article>
                </Link>
        )
    }
}
export default Card