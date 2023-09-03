import React from "react";
import { useState } from "react";
import MyButton from "../UI/button/MyButton";
import classes from "./CarouselCss.module.css";
import Thumbnails from './Thumbnails';




const Carousel = ({images}) => {
    const [currentImg, setCurrentImg] = useState(0)

    const thumbnailClick = (index) => {
        setCurrentImg(index)
    }

    const previousImg = () => {
        setCurrentImg((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }

    const nextImg = () => {
        setCurrentImg((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }

    return (
        <div className={classes.wraper}>
            <div className={classes.div}>
                <MyButton onClick ={previousImg} 
                        style={{position: "absolute", 
                                top: "50%",
                                transform: "translateY(-50%)",
                                height: "100%",
                                border:"none"}}>🠔</MyButton>
                <img src={images[currentImg]} alt="Carousel" className={classes.img}/>
                <MyButton onClick ={nextImg} 
                        style={{position: "absolute", 
                                top: "50%",
                                right: "0px",
                                transform: "translateY(-50%)",
                                height: "100%",
                                border:"none"}}>➞</MyButton>
            </div>
            
            <Thumbnails images={images} current={currentImg} onChange={thumbnailClick}/>
        </div>

    )
}

export default Carousel