import react from 'react'
import '../styles/Tag.css'


class Tag extends react.Component{

    render(){
        return(
            <div className="kasa-tag-container">
                {this.props.list.map((name =>
                    <span key={name} className="kasa-tag kasa-tag-mr">{name}</span>
                    ))}
            </div>
        )
    }
}


export default Tag