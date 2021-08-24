import react from 'react'
import {withRouter} from 'react-router-dom'
import Carousel from './Carousel'
import Host from './Host'
import Dropdowns from './Dropdown'
import Rating from './rating'
import Tag from './Tag'
import '../styles/Logement.css'


const logementList = require('../datas/logements.json')

class Logement extends react.Component {

    constructor(props){
        super(props)
        this.id = this.props.match.params.id
    }


    render(){
        return(
            // <div>
                logementList.map((logement)=>
                    logement.id === this.id ? (
                    <div>
                        <Carousel key={this.id} imgList={logement.pictures} />
                        <h1 className='color-primary lgt-title-size'>{logement.title}</h1>
                        <h3 className='color-primary lgt-location-size'>{logement.location}</h3>
                        <Tag list={logement.tags} />
                        <Host name={logement.host.name} picture={logement.host.picture}/>
                        <Rating rating={logement.rating}/>
                        <Dropdowns title="Description" data={logement.description} />
                        <Dropdowns title="Equipement" data={logement.equipments} />
                    </div>
                ):null
                )
            // </div>

        )
    }
}

export default  withRouter(Logement)