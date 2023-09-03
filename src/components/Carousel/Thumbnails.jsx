import React from "react";
import classes from "./CarouselCss.module.css"

const Thumbnails = ({images, current, onChange}) => {

    return (
        <div >
          {images.map((image, index) => (
                <img
                    className={classes.imgThumbnails}
                    key={index}
                    src={image}
                    alt={`Thumbnail`}
                    onClick={() => onChange(index)}
                    style={{
                        border: index === current ? "2px solid blueviolet" : "none",
                        cursor: "pointer"
                }}/>
            ))}
        </div>

    )
}

export default Thumbnails