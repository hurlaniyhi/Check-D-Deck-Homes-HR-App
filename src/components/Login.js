import React, {useState} from 'react'
import '../styles/style.css'
import {FaUser, FaLock} from 'react-icons/fa'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    function signIn(){
        alert("you will be signed in wooooo!")
        history.push("/")
    }

    var title = localStorage.getItem("info")

    return(
        <div id="login-container">
            
            <div class="form-wrap">
            <img class="login-logo" src={logo} />
                <p class="form-title">Login as {title}</p>
                <label class="label">Username</label>
                <div class="cover-input">
                    <div class="icon-container"><FaUser class="user-icon"/></div>
                    <input class="user-input" type="text" placeholder="Enter username" required/>
                </div>
                <label class="label">Password</label>
                <div class="cover-input">
                <div class="icon-container"><FaLock class="user-icon"/></div>
                    <input class="user-input" type="password" placeholder="Enter Password" required/>
                </div>
                <a class="login-button" onClick={()=> signIn()} >Login</a>
            </div>
        </div>
    )
}

export default Login