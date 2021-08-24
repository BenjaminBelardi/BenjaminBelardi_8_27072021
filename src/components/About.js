import React from 'react'
import Banner from './Banner'
import Dropdowns from './Dropdown'
import banner from '../assets/gustavo-alves-YOXSC4zRcxw-unsplash.png'

const about = require('../datas/about.json')

class About extends React.Component {


    render (){
        return (
            <div>  
                <Banner img={banner} />
                <Dropdowns title="Fiabilité" data={about.fiabilité}  />
                <Dropdowns title="Respect" data={about.respect} />
                <Dropdowns title="Service" data={about.service} />
                <Dropdowns title="Sécurité" data={about.securite} />
            </div>
        )
    }
}

export default About
