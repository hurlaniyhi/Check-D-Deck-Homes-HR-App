import React, {useState} from 'react'
import '../styles/style.css'
import {FaUser, FaLock} from 'react-icons/fa'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    function signIn(){
        alert("you will be signed in wooooo!")
        history.push("/admin")
    }

    function changeColor(id){
        document.querySelector(id).style.border = "1.8px solid #00039B"
    }

    function reverseColor(id){
        document.querySelector(id).style.border = "1px solid rgba(0, 0, 0, .2)"
    }

    var title = localStorage.getItem("info")
    document.body.style.background = "linear-gradient(to right, rgba(2, 0, 37, .9), rgba(0, 1, 0, 0.9))"

    return(
        <div id="login-container">
            
            <div class="form-wrap">
            <img class="login-logo" src={logo} />
                <p class="form-title">Login as {title}</p>
                <label class="label">Username</label>
                <div class="cover-input" id="input1">
                    <div class="icon-container"><FaUser class="user-icon"/></div>
                    <input class="user-input" onClick={()=>changeColor("#input1")} onBlur={()=>reverseColor("#input1")} type="text" placeholder="Enter username" required/>
                </div>
                <label class="label">Password</label>
                <div class="cover-input" id="input2">
                <div class="icon-container"><FaLock class="user-icon"/></div>
                    <input class="user-input" type="password" placeholder="Enter Password" onClick={()=>changeColor("#input2")} onBlur={()=>reverseColor("#input2")} required/>
                </div>
                <a class="login-button" onClick={()=> signIn()} >Login</a>
            </div>
        </div>
    )
}

export default Login