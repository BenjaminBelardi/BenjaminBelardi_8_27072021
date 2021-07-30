import react from 'react'
import {withRouter} from 'react-router-dom'
import Carousel from './Carousel'
import Host from './Host'
import Dropdowns from './Dropdown'
import Rating from './rating'
import Tag from './Tag'


const logementList = require('../datas/logements.json')

class Logement extends react.Component {

    constructor(props){
        super(props)
        this.id = this.props.match.params.id
    }



    
    render(){
        return(
            <div>
                {logementList.map((logement)=>
                    logement.id === this.id ? (
                    <div>
                        <Carousel key={this.id} imgList={logement.pictures} />
                        <h1>{logement.title}</h1>
                        <h3>{logement.location}</h3>
                        <Host name={logement.host.name} picture={logement.host.picture}/>
                        <Tag list={logement.tags} />
                        <Rating rating={logement.rating}/>
                        <div className="">
                            <Dropdowns title="Description" data={logement.description}/>
                            <Dropdowns title="Equipement" data={logement.equipments}/>
                        </div>
                    </div>
                ):null
                )}
            </div>

        )
    }
}

export default  withRouter(Logement)