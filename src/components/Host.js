import react from 'react'
import '../styles/Host.css'

class Host extends react.Component{

    render(){
        return(
            <div className='kasa-host-container'>
                <div className='kasa-host__name'>{this.props.name}</div>
                <img src={this.props.picture} alt='kasa-host-img' className='kasa-host__img'/>
            </div>

        )
    }
}

export default Host