import React from 'react';
import star from '../assets/star.svg'
import starNotLight from '../assets/starnotlight.svg'
import '../styles/Rating.css'



class Rating extends React.Component{

    render(){

        const range = [1,2,3,4,5]

        return (
            <div className="kasa-star-container">
                {range.map((rangeElt)=>
                    this.props.rating >= rangeElt ? (
                        <img key={rangeElt} src={star} alt='kasa-star-rating-light' className='kasa-star'/>
                    ) : <img key={rangeElt} src={starNotLight} alt='kasa-star-rating-not-light'className='kasa-star'/>
                )}
            </div>
        )
    }
}

export default Rating