import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {FaHome, FaTimes, FaPlus, FaEnvelope, FaSignOutAlt} from 'react-icons/fa'
import barImage from '../assets/admin-image6.jpg'
import barLogo from '../assets/ourlogo.png'
import Department from './Departments'
import AdminHome from './AdminHome'



const AdminDashboard = () => {

    const history = useHistory()

    function logOut(){
        history.push("/")
    }

    function HomePage(){
        alert("Ok")
        history.push("/admin/home")
    }

    function closeItem(){
        document.querySelector(".menu-items").style.opacity = 0
    }

    function openItem(){
        let swap = document.querySelector(".menu-items")
         if(swap.style.opacity == 0){
             swap.style.opacity = 1
         }
         else{
             swap.style.opacity = 0
         }
    }

    document.body.style.background = '#F7FCFC'

    return(
       
        <Router>
            <div class="title-bar">
                <FaSignOutAlt class="logout-icon" onClick={()=>logOut()} />
                {/* <input type="checkbox" class="checkme" id="show-menu" /> */}
                <div class="menu-container" onClick={()=> openItem()}><p class="bar-menu">Menu-items</p></div>
                
                <div class="bar-user">
                <img src={barImage} class="bar-image" />
                    <p class="bar-username">Admin Dashboard</p>
                </div>
                <a href="/admin/home"><img class="logo-bar" src={barLogo}/></a>
            </div>

            <div class="header">
            <div class="menu-items">
                    <FaTimes class="cancel" onClick={()=> closeItem()} />
                    <a href="/admin/home" class="item-button">Home</a>
                    <a href="/admin/dept" class="item-button">Instalmental transaction</a>
                    <a href="/admin/dept" class="item-button">Add new staff</a>
                    <a href ="/admin/home" class="item-button">Broadcast message</a>
                    <a href="/admin/dept"class="item-button">All departments</a>
                    <a href="/admin/dept" class="item-button">All files</a>
                    <a class="item-button" onClick={()=>logOut()}>LogOut</a>
                </div>

                <a class="add-container" href="">
                    <FaPlus class="add-logo" />
                </a>
                <p class="add-label">Add new staff ?</p>
                <p class="header-greeting">Hello, We are Admin</p>
                <div class="broadcast">
                    <FaEnvelope class="broadcast-icon" />
                    <a href="/admin/dept" class="broadcast-text">Send Broadcast Mail</a>
                </div>
            </div>

        
            
            <div class="content-view">
            <Switch>
            <Route path="/admin/" exact component={AdminHome}></Route>
            <Route path="/admin/dept" component={Department}></Route>
            <Route path="/admin/home" component={AdminHome}></Route>
            </Switch>
            </div>
        </Router>
      
    )
}

export default AdminDashboard