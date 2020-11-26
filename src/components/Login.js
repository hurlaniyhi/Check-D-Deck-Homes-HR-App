import React, {useState, useContext} from 'react'
import '../styles/style.css'
import {FaUser, FaLock} from 'react-icons/fa'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'
import DataManager from "../context/dataManager"

const Login = () => {

    const {state, signIn} = useContext(DataManager)
    const [myInput, setMyInput] = useState({username: "", password: ""})

    const history = useHistory()

    const handleChange = (e) => {
        setMyInput({...myInput, [e.target.name]: e.target.value})
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
                    <input class="user-input" name="username" onChange={handleChange} onClick={()=>changeColor("#input1")} onBlur={()=>reverseColor("#input1")} type="text" placeholder="Enter username" required/>
                </div>
                <label class="label">Password</label>
                <div class="cover-input" id="input2">
                <div class="icon-container"><FaLock class="user-icon"/></div>
                    <input class="user-input" name="password" onChange={handleChange} type="password" placeholder="Enter Password" onClick={()=>changeColor("#input2")} onBlur={()=>reverseColor("#input2")} required/>
                </div>
                <div class="login-button" onClick={()=>signIn(history, myInput.username, myInput.password)} >Login</div>
            </div>
        </div>
    )
}

export default Login