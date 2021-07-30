import React from 'react'
import Banner from './Banner'
import Card from './Card'
import '../styles/card.css'
//import logementList from './Logement'

const logementList = require('../datas/logements.json')

class Accueil extends React.Component {
    render (){
        return (
            <div>
                <Banner />
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