import React from 'react'
import Banner from './Banner'
import Dropdowns from './Dropdown'
import banner from '../assets/gustavo-alves-YOXSC4zRcxw-unsplash.png'
import '../styles/About.css'

const about = require('../datas/about.json')

class About extends React.Component {


    render (){
        return (
            <div className="kasa-about-layout">  
                <Banner cssStyle="kasa-banner-about-size" img={banner} />
                <section className="kasa-about-dropdown-container">  
                    <Dropdowns title="Fiabilité" data={about.fiabilité}  />
                    <Dropdowns title="Respect" data={about.respect} />
                    <Dropdowns title="Service" data={about.service} />
                    <Dropdowns title="Sécurité" data={about.securite} />
               </section>
            </div>
        )
    }
}

export default About
