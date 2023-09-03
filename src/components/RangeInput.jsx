import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import classes from "./UI/input/MyInput.module.css";

const RangeInput = ({min, max, ...props}) => {
    const [text, setText] = useState("")

    
   return (
    <div className ={(text.length !==0 && text.length <= min) || text.length > max ? classes.redBorder : classes.myInput}
        style={{width: "175px"}}>
        <MyInput {...props} 
                value={text}
                onChange={e => setText(e.target.value)}
                style = {{border: "none", outline:"none"}}
                />
    </div>
    )
}

export default RangeInput;