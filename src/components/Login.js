import React, {useState, useContext, useEffect} from 'react'
import '../styles/style.css'
import {FaUser, FaLock} from 'react-icons/fa'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'
import DataManager from "../context/dataManager"
import { SpinningCircles, ThreeDots, Puff } from 'svg-loaders-react'
import Loader from 'react-loader-spinner'

const Login = () => {

    const {state, signIn} = useContext(DataManager)
    const [myInput, setMyInput] = useState({username: "", password: ""})

    const history = useHistory()
   
    const handleChange = (e) => {
        setMyInput({...myInput, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
       
        await signIn(history, myInput.username, myInput.password)
      
        setMyInput({...myInput, username: "", password: ""})
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


    const type = localStorage.getItem("info")
    const token = localStorage.getItem("token")

    if(token && (type === "Admin")){
       var nav = true
       var move = history.push("/admin")
    }
    else if(token && (type === "Staff")){
        var nav = true
       var move = history.push("/staff")
    }
    else if(!type){
        var nav = true
        var move = history.push("/")
    }
    else{
        var nav = false
    }


    return(
        <div id="login-container">
            
           {nav === false ? <form class="form-wrap" onSubmit={handleSubmit}>
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
               {!state.requestDone ? <button value="submit" class="login-button" id="normals" onClick={handleSubmit}>
                    Login 
                    {/* <Puff
                        className="loads"
                        stroke="white" strokeOpacity=".8" 
                        style={{width: "2.6rem", height: "2.6rem", marginLeft: "1.2rem", display: "none"}} 
                        /> */}
                </button> :
                <button value="submit" class="login-button" id="loads">
                    loading
                    <Loader 
                    type="Puff"
                    color="#eee"
                    height={23}
                    width={23}
                    // timeout={3000} //3 secs
                    style={{textAlign:"center", display: "inline-block", marginLeft: "1rem"}}
                    />
                </button>}
            </form>:
            move}
           
        </div>
    )
}

export default Login