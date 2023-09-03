import React from "react";
import { useState } from "react";

const Spoiler = ({header="+", open, children}) => {
    const [isOpen, setisOpen] = useState(open)

    return (
        <div 
        style = {{display: "flex", flexDirection: "column", cursor: "pointer" }} 
        onClick = {() => setisOpen(!isOpen)}>
            {header}
            {isOpen && children}
        </div>
    )
}

export default Spoiler;