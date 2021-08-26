import react from 'react'
import '../styles/dropdown.css'
import {ReactComponent as Arrow} from '../assets/arrow_up.svg'

class Dropdowns extends react.Component{

    constructor(props){
        super(props)
        this._dropDownClick = this._dropDownClick.bind(this)
        this.state = { open : false}
    }

    _dropDownClick(){
        this.setState((isOpen) => ({
            open: !isOpen.open
        }))
    }

    render(){
        const dropDownOpen = this.state.open ? null : "hidden"
        
     return(
        <div className='dropdown-container'>
            <div className="dropdown__title">
                <h2>{this.props.title}</h2>
                    <Arrow className={`${dropDownOpen === "hidden" ? "arrow_down" : "arrow_default"}`} onClick={this._dropDownClick}/>
            </div>
            {Array.isArray(this.props.data) ? (
            <ul className={`dropdown__list dropdown__txt ${dropDownOpen}`}>
                {this.props.data.map((element)=>
                    <li key={element}>{element}</li>
                )}
            </ul>
            ) : (
                <p className={`dropdown__txt ${dropDownOpen}`}>{this.props.data}</p>
            )}
        </div>

     )

    }
}

export default Dropdowns