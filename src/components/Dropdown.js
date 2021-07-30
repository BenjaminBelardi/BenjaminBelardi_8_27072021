import react from 'react'
import '../styles/dropdown.css'

class Dropdowns extends react.Component{

    render(){
     return(
        <div className='kasa-dorpdown-container'>
            <h2>{this.props.title}</h2>
            {Array.isArray(this.props.data) ? (
            <ul className='kasa-dropdown__list'>
                {this.props.data.map((element)=>
                    <li key={element}>{element}</li>
                )}
            </ul>
            ) : (
                <p>{this.props.data}</p>
            )}
        </div>

     )

    }
}

export default Dropdowns