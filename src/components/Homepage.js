import React from 'react'
import '../styles/style.css'
import logo from "../assets/ourlogo.png"
import {useHistory} from 'react-router-dom'


const Home = () => {

    const history = useHistory()

    function Login(info){
        localStorage.setItem("info", info)
        history.push("/login")
    }


    return(
        <div id="container">
            <img className="logo" src={logo} />
            <div className="about">
                <h1 className="greeting">Welcome to CheckD'Deck Homes</h1>
                <p className="sales">We sell all properties you have in mind to buy.</p>
                <p className="sales-plus">Land, Buildings, and other properties</p>
            </div>
            <div className="navigate">
                    <a className="nav1" onClick={()=> Login("Admin")}>Get started as Admin</a>
                    <a className="nav1" onClick={()=> Login("Staff")}>Get started as Staff</a>
            </div>
        </div>
    )
}

export default Home