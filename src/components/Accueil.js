import React from 'react'
import Banner from './Banner'
import Card from './Card'
import '../styles/card.css'
import banner from '../assets/acceuil_banner.png'

const logementList = require('../datas/logements.json')
const acceuilBannerTxt = "Chez vous, Partout et ailleurs"

class Accueil extends React.Component {
    render (){
        return (
            <div>
                <Banner img={banner} txt={acceuilBannerTxt}/>
                <ul className='kasa-card-container'>
                    {logementList.map((logement)=>
                    <li key={logement.id} className='kasa-card'>
                        <Card logement={logement} />
                    </li>
                )}
               </ul>
            </div>
        )
    }
}

export default Accueil