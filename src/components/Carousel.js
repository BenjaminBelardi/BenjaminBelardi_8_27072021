import react from "react"
import arrow from '../assets/arrow-forward-ios.svg'
import '../styles/Caroussel.css'


class Carousel extends react.Component {
    constructor(props){
        super(props)

        this.imgList = this.props.imgList
        this.imgLength = this.imgList.length - 1
        this._nextImg = this._nextImg.bind(this)
        this._prevtImg = this._prevImg.bind(this)
        this.state = {
             activeIndex: 0
         }
}   

    _nextImg(e) {
        e.preventDefault()
        let currentIndex = this.state.activeIndex
        if (currentIndex === this.imgLength){
            currentIndex = -1;
        }
        ++currentIndex;

         this.setState({
            activeIndex: currentIndex
        })   
    }

    _prevImg(e) {
        e.preventDefault()
        let currentIndex = this.state.activeIndex
        if (currentIndex === 0){
            currentIndex = this.imgLength + 1;
        }
        --currentIndex;

         this.setState({
            activeIndex: currentIndex
        })   
    }

    render(){
        return(
            <div className='kasa-caroussel-container'>
                 <img src={arrow} alt='kasa-card-img' className='kasa-carousel__arrow left arrow-rotate' onClick={e => this._prevImg(e)}/>
                 {/* <img src={arrow} alt='kasa-card-img' className='kasa-carousel__arrow right' onClick={e => this._nextImg(e)}/> */}
                {this.imgList.map((img , index) =>
                    this.state.activeIndex === index ? (
                        <div key={index} className='img-size'>
                            <img src={img} alt='kasa-card-img' className='kasa-caroussel__img img-size'/>
                            <p className='img-number'>{`${index +1} / ${this.imgList.length}`}</p>
                        </div>
                    ): null
                )}
                { <img src={arrow} alt='kasa-card-img' className='kasa-carousel__arrow right' onClick={e => this._nextImg(e)}/>}
            </div>
        )}
}   

export default Carousel