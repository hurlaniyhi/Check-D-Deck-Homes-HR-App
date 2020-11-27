import React, {useState, useContext} from 'react'
import '../styles/style.css'
import {FaUser, FaLock} from 'react-icons/fa'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'
import DataManager from "../context/dataManager"
import { SpinningCircles, ThreeDots, Puff } from 'svg-loaders-react'
//import Loader from 'react-loader-spinner'

const Login = () => {

    const {state, signIn} = useContext(DataManager)
    const [myInput, setMyInput] = useState({username: "", password: ""})

    const history = useHistory()

    const handleChange = (e) => {
        setMyInput({...myInput, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        document.querySelector(".loads").style.display = "inline-block"
       
        await signIn(history, myInput.username, myInput.password)
       
        setMyInput({...myInput, username: "", password: ""})
    }

    if(state.requestDone){
        document.querySelector(".loads").style.display = "none"
    }

    // LOGIC FOR A PARTICULAR STYLING
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
            
            <form class="form-wrap" onSubmit={handleSubmit}>
            <img class="login-logo" src={logo} />
                <p class="form-title">Login as {title}</p>
                <label class="label">Username</label>
                <div class="cover-input" id="input1">
                    <div class="icon-container"><FaUser class="user-icon"/></div>
                    <input class="user-input" value={myInput.username} name="username" onChange={handleChange} onClick={()=>changeColor("#input1")} onBlur={()=>reverseColor("#input1")} type="text" placeholder="Enter username" required/>
                </div>
                <label class="label">Password</label>
                <div class="cover-input" id="input2">
                <div class="icon-container"><FaLock class="user-icon"/></div>
                    <input class="user-input" value={myInput.password} name="password" onChange={handleChange} type="password" placeholder="Enter Password" onClick={()=>changeColor("#input2")} onBlur={()=>reverseColor("#input2")} required/>
                </div>
                <button value="submit" class="login-button" onClick={handleSubmit}>
                    Login 
                    <Puff
                        className="loads"
                        stroke="white" strokeOpacity=".8" 
                        style={{width: "2.6rem", height: "2.6rem", marginLeft: "1.2rem", display: "none"}} 
                        />
                </button>
            </form>
           
        </div>
    )
}

export default Login