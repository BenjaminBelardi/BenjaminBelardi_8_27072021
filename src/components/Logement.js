import react from 'react'
import {withRouter} from 'react-router-dom'
import Carousel from './Carousel'
import Host from './Host'
import Dropdowns from './Dropdown'
import Rating from './Rating'
import Tag from './Tag'
import '../styles/Logement.css'
import Error from './Error'


const rentList = require('../datas/logements.json')

class Logement extends react.Component {

    constructor(props){
        super(props)
        this.id = this.props.match.params.id
        this._queryRent = this._queryRent.bind(this)
        this.rent = {} 
        this._queryRent()
    }

    _queryRent(){
        rentList.map((rent)=>{
            if (rent.id === this.id ){
                this.rent = rent
            }
        return this.rent
        })
    }

    render(){
        return(
            Object.keys(this.rent).length > 0 ? (
                    <div className="kasa-logement-layout">
                        <Carousel key={this.id} imgList={this.rent.pictures} />
                        <section className="kasa-logement-header">
                            <section className="kasa-logement-info">
                                <h1 className='color-primary lgt-title-size mr-top-1r'>{this.rent.title}</h1>
                                <h3 className='color-primary lgt-location-size'>{this.rent.location}</h3>
                                <Tag list={this.rent.tags} />
                            </section>
                            <aside className="kasa-host-rating-container mr-top-1r">
                                <Host name={this.rent.host.name} picture={this.rent.host.picture}/>
                                <Rating rating={this.rent.rating}/>
                            </aside>
                        </section>
                        <section className="kasa-dropdown-container">
                            <Dropdowns title="Description" data={this.rent.description} />
                            <Dropdowns title="Equipement" data={this.rent.equipments} />
                        </section>
                    </div>
            ): <Error errorNumber="404" />
        )
    }
}

export default  withRouter(Logement)