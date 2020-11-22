import React from 'react'
import '../styles/style.css'
import logo from "../assets/ourlogo.png"
import {useHistory, Link} from 'react-router-dom'


const Home = () => {

    const history = useHistory()

    function Login(info){
        localStorage.setItem("info", info)
        history.push("/login")
    }


    return(
        <div id="main-container">
            <img className="logo" src={logo} />
            <div className="about">
                <h1 className="greeting">Welcome to CheckD'Deck Homes</h1>
                <p className="sales">We sell all properties you have in mind to buy.</p>
                <p className="sales-plus">Land, Buildings, and other properties</p>
            </div>
            <div className="navigate-us">
                    <div className="nav1" onClick={()=> Login("Admin")}>Get started as Admin</div>
                    <div className="nav1" onClick={()=> Login("Staff")}>Get started as Staff</div>
            </div>
        </div>
    )
}

export default Home