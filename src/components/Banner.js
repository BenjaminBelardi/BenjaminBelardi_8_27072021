import React from 'react'
import '../styles/Banner.css'

class Banner extends React.Component{
    
    render(){

        return (
            <div className= {`kasa-banner-container ${this.props.cssStyle}`}>
                <img src={this.props.img} alt='kasa-banner' className='kasa-banner__img'/>
                <p className='kasa-banner__txt'>{this.props.txt}</p>
            </div>
        )   
    }
}
export default Banner