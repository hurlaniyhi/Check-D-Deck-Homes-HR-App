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
            <img class="logo" src={logo} />
            <div class="about">
                <h1 class="greeting">Welcome to CheckD'Deck Homes</h1>
                <p class="sales">We sell all properties you have in mind to buy.</p>
                <p class="sales-plus">Land, Buildings, and other properties</p>
            </div>
            <div class="navigate">
                    <a class="nav1" onClick={()=> Login("Admin")}>Get started as Admin</a>
                    <a class="nav1" onClick={()=> Login("Staff")}>Get started Staff</a>
            </div>
        </div>
    )
}

export default Home