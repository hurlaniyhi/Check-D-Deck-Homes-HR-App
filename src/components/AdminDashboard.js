import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {FaHome, FaTimes, FaPlus, FaEnvelope, FaSignOutAlt} from 'react-icons/fa'
import barImage from '../assets/admin-image6.jpg'
import barLogo from '../assets/ourlogo.png'
import Department from './Departments'
import AdminHome from './AdminHome'
import Progress from "./Progress"



const AdminDashboard = () => {

    const history = useHistory()

    function logOut(){   
        history.push("/")
    }

    function callme(){
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
            <div className="title-bar">
                <FaSignOutAlt className="logout-icon" onClick={()=>logOut()} />
                {/* <input type="checkbox" className="checkme" id="show-menu" /> */}
                <div className="menu-container" onClick={()=> openItem()}><p className="bar-menu">Menu-items</p></div>
                
                <div className="bar-user">
                <img src={barImage} className="bar-image" />
                    <p className="bar-username">Admin Dashboard</p>
                </div>
                <Link to="/admin/home"><img className="logo-bar" src={barLogo}/></Link>
            </div>

            <div className="header">
            <div className="menu-items">
                    <FaTimes className="cancel" onClick={()=> openItem()} />
                    <Link to="/admin/home" onClick={()=> callme()} className="item-button">Home</Link>
                    <Link to="/admin/dept" onClick={()=> callme()} className="item-button">All departments</Link>
                    <Link to="/admin/work" onClick={()=> callme()} className="item-button">Instalmental transaction</Link>
                    <Link to="/admin/work" onClick={()=> callme()} className="item-button">Add new staff</Link>
                    <Link to ="/admin/work" onClick={()=> callme()} className="item-button">Broadcast message</Link>
                    <Link to="/admin/work" onClick={()=> callme()} className="item-button">All files</Link>
                    <a className="item-button" onClick={()=>logOut()}>LogOut</a>
                </div>
                <div className="add-master">
                    <Link className="add-container" to="/admin/dept">
                        <FaPlus className="add-logo" />
                    </Link>
                    <p className="add-label">Add new staff ?</p>
                </div>
                <p className="header-greeting">Hello, We are Admin</p>
                <div className="broadcast">
                    <FaEnvelope className="broadcast-icon" />
                    <Link to="/admin/dept" className="broadcast-text">Send Broadcast Mail</Link>
                </div>
            </div>

        
            
            <div className="content-view">
            <Switch>
            <Route path="/admin/" exact component={AdminHome}></Route>
            <Route path="/admin/dept" component={Department}></Route>
            <Route path="/admin/work" component={Progress}></Route>
            <Route path="/admin/home" component={AdminHome}></Route>
            <Redirect from="/admin/:id" to="/admin/" />
            </Switch>
            </div>
        </Router>
      
    )
}

export default AdminDashboard