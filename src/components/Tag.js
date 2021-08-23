import react from 'react'
import '../styles/tag.css'


class Tag extends react.Component{

    render(){
        return(
            <div className="kasa-tag-container">
                {this.props.list.map((name =>
                    <span hey={name} className="kasa-tag kasa-tag-mr">{name}</span>
                    ))}
            </div>
        )
    }
}


export default Tag