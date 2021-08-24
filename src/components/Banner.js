import React from 'react'
import '../styles/banner.css'

class Banner extends React.Component{

    render(){
        return (
            <div className='kasa-banner'>
                <img src={this.props.img} alt='kasa-banner' className='kasa-banner__img'/>
                <p className='kasa-banner__txt'>{this.props.txt}</p>
            </div>
        )   
    }
}
export default Banner