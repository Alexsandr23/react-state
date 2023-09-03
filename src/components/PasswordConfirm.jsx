import React from "react";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import classes from "./UI/input/MyInput.module.css";

function isPasswordStrong(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
    if (password.length === 0) {
        return true
    } else {
        return regex.test(password)
    }
  }
  

const PasswordConfirm = () => {
    const [password, setPassword] = useState("")
    const [passwordValid, setPasswordValide] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [strongPassword, setStrongPassword] = useState(true)
    return (
        <>
            <div className={password.length === 0 || strongPassword ? classes.myInput : classes.redBorder} 
                style={{width: "175px"}} >
                <MyInput 
                    type="password" 
                    onChange={e => {
                        setPassword(e.target.value)
                        setPasswordMatch(e.target.value === passwordValid)
                        setStrongPassword(isPasswordStrong(e.target.value))
                    }}
                    style = {{border: "none", outline:"none"}}
                    placeholder = "Password"
                    />
            </div>
            <div className={passwordValid !== 0 && passwordMatch ? classes.myInput : classes.redBorder} 
                style={{width: "175px"}} >
                <MyInput 
                    type="password" 
                    onChange={e => {
                        setPasswordValide(e.target.value)
                        setPasswordMatch(e.target.value === password)
                    }}
                    style = {{border: "none", outline:"none"}}
                    placeholder = "Repeat password"
                    />
            </div>
            {password.length === 0 || strongPassword ? "" : <p>Password is not strong enough</p>}
            {password.length === 0 || passwordMatch ? "" : <p>Passwords do not match</p>}
        </>
    )
}

export default PasswordConfirm