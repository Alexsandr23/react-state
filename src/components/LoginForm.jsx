import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const LoginForm = ({onLogin}) => {
    
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form>
            <MyInput type="text" value={login} onChange={e => setLogin(e.target.value)} placeholder = "Login"/>
            <MyInput type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder = "Password"/>
            <MyButton onClick={(e) =>{
                e.preventDefault()
                onLogin({login, password})
                setLogin("")
                setPassword("")
            }} disabled = {login.length > 8 && password.length > 10 ? false : true}>Login</MyButton>
        </form>
    )
}

export default LoginForm
