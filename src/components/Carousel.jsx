import React ,{useState} from 'react'
import '../styles/carousel.css'

function Carousel(props) {
    const [imgActive, setImgActive] = useState(0)
    console.log(props.images);

  return (
    <>
        <div className="carouselContainer">
            <button onClick={()=>{imgActive===0?setImgActive((props.images.length-1)):setImgActive((imgActive-1))}} className="btn leftBtn">{"<"}</button>
            <div className="carouselDot">
                {props.images.map((image,index)=>{
                    return(
                        <div key={index} className={imgActive===index?"dot dotActive":"dot"} ></div>
                    )
                })}
            </div>
            <button className="btn rightBtn" onClick={()=>{imgActive===props.images.length-1?setImgActive((0)):setImgActive((imgActive+1))}}>{">"}</button>
            <div className="carouselImages">
                {props.images.map((image,index)=>{
                    return(
                        <img key={index} alt="project Images" src={image} className={imgActive===index?"img imgActive":"img"} />
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Carousel