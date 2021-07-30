import React from 'react'
import banner from '../assets/banner.svg'
import '../styles/banner.css'

class Banner extends React.Component{

    render(){
        return (
            <div className='kasa-banner'>
                <img src={banner} alt='kasa-banner' className='kasa-banner__img'/>
                <p className='kasa-banner__txt'>Chez vous, Partout et ailleurs</p>
            </div>
        )   
    }


}

export default Banner